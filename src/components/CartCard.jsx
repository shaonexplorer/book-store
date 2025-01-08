import { useDispatch } from "react-redux";
import del from "./../assets/cart/del.png";
import minus from "./../assets/cart/minus.png";
import plus from "./../assets/cart/plus.png";
import { MdDeleteForever } from "react-icons/md";

import { useEffect, useState } from "react";
import { decrement, increment, remove } from "../redux/cartSlice";
import { Link } from "react-router";

function CartCard({ item }) {
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      try {
        const data = await import(`../assets/book/${item.coverImage}.png`);
        setImage(data.default);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);
  return (
    <tr className="font-inter text-[#382C2C] text-[14px] sm:text-[18px] border-b-[2px] border-[#F6F7F8]">
      <td className="justify-items-start py-[26px]">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center ">
          <button
            className="hidden sm:flex"
            onClick={() => dispatch(remove(item))}
          >
            <img
              src={del}
              className="w-5 h-5 sm:w-[26px] sm:h-[26px] hover:scale-150 transition-all duration-500"
            ></img>
          </button>

          <Link to={`/book/${item._id}`}>
            <img
              className="w-[115px] h-[154px] hover:scale-95 transition-all duration-500"
              src={image}
            ></img>
          </Link>

          <h1>{item.title}</h1>
          <p className="sm:hidden text-[#40BFFF] font-inter font-bold text-[14px]">
            ${item.newPrice.toFixed(2)}
          </p>
        </div>
      </td>
      <td className="">
        <div className="hidden sm:flex">${item.totalPrice.toFixed(2)}</div>
      </td>
      <td className=" justify-items-center ">
        <div className="flex gap-3 items-center">
          <button onClick={() => dispatch(remove(item))} className="sm:hidden">
            <MdDeleteForever className="w-7 h-7 text-red-500 opacity-80" />
          </button>

          <div className="w-[124px] h-[46px] bg-[#F6F7F8] flex gap-[30px] justify-center items-center">
            <button onClick={() => dispatch(decrement(item))}>
              <img
                src={minus}
                className="w-[10px] h-[4px] hover:scale-150 transition-all duration-500"
              ></img>
            </button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increment(item))}>
              <img
                src={plus}
                className="w-[10px] h-[10px] hover:scale-150 transition-all duration-500"
              ></img>
            </button>
          </div>
        </div>
      </td>
      <td className="justify-items-center">
        <div className="hidden sm:flex">${item.newPrice.toFixed(2)}</div>
      </td>
    </tr>
  );
}

export default CartCard;
