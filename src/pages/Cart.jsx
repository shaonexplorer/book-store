import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import PaymentModal from "../components/PaymentModal";
import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <div className="w-screen sm:w-[1192px] mx-auto h-full flex flex-col px-[16px] sm:px-0">
        {/* ------------------------ */}
        <table className="table-auto mt-[50px]">
          <thead className="capitalize font-inter text-[14px] sm:text-[20px] text-[#382C2C] font-medium">
            <tr className="border-b-[2px] border-[#F6F7F8]">
              <th className="py-[26px] justify-items-start">
                <p>product</p>
              </th>
              <th className="justify-items-start  py-[26px]">
                <p className="hidden sm:flex">price</p>
              </th>
              <th className="">
                <p className=" ">qty</p>
              </th>
              <th className="">
                <p className="hidden sm:flex">unit price</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartCard item={item} key={item._id} />
            ))}
          </tbody>
        </table>

        {/* ---------------------------- */}

        <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-[430px] mt-[90px] ">
          <div className="flex">
            <input
              type="text"
              className="w-[250px] h-[59px] border border-[#937DC2] px-4 focus:outline-none font-inter "
              placeholder="Voucher Code"
            ></input>
            <button className="w-[118px] h-[60px] bg-[#937DC2]   sm:text-[18px] text-white font-inter rounded-r-[4px] ">
              Redeem
            </button>
          </div>

          <div className="w-[377px] h-[310px] flex flex-col justify-between pr-[16px] sm:pr-0 font-inter text-[14px] sm:text-[18px] text-[#382C2C]">
            <span className="w-full flex justify-between">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </span>

            <span className="w-full flex justify-between">
              <p>Shipping fee</p>
              <p>$20.94</p>
            </span>

            <span className="w-full flex justify-between">
              <p>Coupon</p>
              <p>No</p>
            </span>

            <div className="bg-[#F6F7F8] w-full h-[2px]"></div>

            <span className="w-full flex justify-between text-[20px] sm:text-[30px]">
              <p>Total</p>
              <p>${(total + 20.94).toFixed(2)}</p>
            </span>

            <button
              onClick={() => setShowPaymentModal(true)}
              className="w-full bg-[#937DC2] text-white py-[16.5px] rounded-[2px] hover:scale-95 transition-all duration-500"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* -------------payment modal goes here------------------- */}

      {showPaymentModal && (
        <PaymentModal setShowPaymentModal={setShowPaymentModal} />
      )}
    </>
  );
}

export default Cart;
