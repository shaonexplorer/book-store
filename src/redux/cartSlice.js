import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import "./../index.css";

const initialState = [];

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (!state.find((item) => item._id == action.payload._id)) {
        return [
          ...state,
          { ...action.payload, qty: 1, totalPrice: action.payload.newPrice },
        ];
      }
      return state.map((item) =>
        item._id == action.payload._id
          ? {
              ...item,
              qty: item.qty + 1,
              totalPrice: item.newPrice * (item.qty + 1),
            }
          : item
      );
    },
    decrement: (state, action) => {
      if (
        action.payload.qty == 1 ||
        state.find((item) => item._id == action.payload._id)?.qty == 1
      ) {
        return state.filter((item) => item._id !== action.payload._id);
      }
      return state.map((item) =>
        item._id == action.payload._id
          ? {
              ...item,
              qty: item.qty - 1,
              totalPrice: item.newPrice * (item.qty - 1),
            }
          : item
      );
    },
    remove: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
    add: (state, action) => {
      if (state.find((item) => item._id == action.payload._id)) {
        console.log("item already added");
        Toast.fire({
          icon: "warning",
          title: "Item already added to cart",
          position: "top-right",
        });
        return;
      }
      Toast.fire({
        icon: "success",
        title: "Item successfully added to cart",
        position: "top-right",
      });
      return [
        ...state,
        { ...action.payload, qty: 1, totalPrice: action.payload.newPrice },
      ];
    },
  },
});

export const { increment, decrement, add, remove } = cartSlice.actions;

export default cartSlice.reducer;
