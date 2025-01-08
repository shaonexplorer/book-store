import { useState } from "react";
import creditCard from "../assets/payment/Credit Card.png";
import paypal from "../assets/payment/Paypal.png";
import bank from "../assets/payment/Bank.png";
import close from "../assets/payment/times.png";
import creditCardImage from "../assets/payment/CreditCard.png";
import success from "../assets/payment/Success Icon.png";
import backIcon from "../assets/payment/Status Bar.png";

function PaymentModal({ setShowPaymentModal }) {
  const [index, setIndex] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(1);

  return (
    <div className="w-screen h-screen inset-0 fixed bg-[#222222] bg-opacity-[30%] flex justify-center items-center z-40">
      <div className="w-screen sm:w-[1020px] h-screen overflow-auto sm:h-[790px] bg-white rounded-md px-[40px]  sm:px-[100px] py-[80px] flex flex-col items-center font-inter relative">
        {index > 1 && (
          <button
            onClick={() => setIndex(index - 1)}
            className="absolute top-[40px] left-[40px] sm:top-[70px] sm:left-[90px]"
          >
            <img src={backIcon} className="w-[22px] h-[22px]"></img>
          </button>
        )}

        <button
          onClick={() => setShowPaymentModal(false)}
          className="absolute top-[40px] right-[40px] sm:top-[70px] sm:right-[110px]"
        >
          <img className="w-[25px] h-[25px] " src={close}></img>
        </button>
        <h1 className=" text-[32px] font-semibold text-[#40BFFF] w-full text-center">
          Make Payment
        </h1>
        <div className="w-[155px] h-[36px] mt-[40px] flex gap-[24px] items-center relative">
          <span
            className={`z-10 ${
              index >= 1 ? "bg-[#40BFFF]" : "bg-[#DFDEDE]"
            }  w-[36px] h-[36px] rounded-full flex justify-center items-center text-white`}
          >
            1
          </span>
          <span
            className={`absolute -z-0 top-[50%] w-[122px] h-[2px] bg-[#DFDEDE]`}
          ></span>
          <span
            className={`${
              index >= 2 ? "bg-[#40BFFF] " : "bg-[#DFDEDE]"
            } w-[36px] h-[36px] rounded-full flex justify-center items-center text-white z-10`}
          >
            2
          </span>

          <span
            className={`${
              index == 3 ? "bg-[#40BFFF] " : "bg-[#DFDEDE]"
            } w-[36px] h-[36px] rounded-full flex justify-center items-center text-white z-10`}
          >
            3
          </span>
        </div>
        {index == 1 && (
          <>
            <div className="w-full flex flex-col sm:flex-row items-center sm:gap-[70px] mt-[40px]">
              <div className="w-full h-full flex flex-col-reverse sm:flex-col justify-between gap-[32px]">
                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="First Name"
                ></input>

                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Email Address"
                ></input>

                <form
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="flex flex-col"
                >
                  <h1 className="text-[20] font-semibold text-[#40BFFF]">
                    Select method of payment
                  </h1>
                  <div
                    className={`w-full h-[56px] flex justify-between items-center ${
                      paymentMethod == 1 ? "bg-[#EBF0FF] " : "bg-white"
                    }  px-2 mt-[14px]`}
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-[24px] h-[24px]" src={creditCard}></img>
                      <label className="text-[12px] text-[#223263]">
                        credit card or debit
                      </label>
                    </div>

                    <input type="radio" name="1" value="1"></input>
                  </div>
                  <div
                    className={`w-full h-[56px] flex justify-between items-center ${
                      paymentMethod == 2 ? "bg-[#EBF0FF] " : "bg-white"
                    }  px-2  `}
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-[24px] h-[24px]" src={paypal}></img>
                      <label className="text-[12px] text-[#223263]">
                        Paypal
                      </label>
                    </div>
                    <input type="radio" name="1" value="2"></input>
                  </div>
                  <div
                    className={`w-full h-[56px] flex justify-between items-center ${
                      paymentMethod == 3 ? "bg-[#EBF0FF] " : "bg-white"
                    }  px-2  `}
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-[24px] h-[24px]" src={bank}></img>
                      <label className="text-[12px] text-[#223263]">
                        Bank transfer
                      </label>
                    </div>
                    <input type="radio" name="1" value="3"></input>
                  </div>
                </form>
              </div>
              {/* column 02 */}
              <div className="w-full h-full flex flex-col gap-[40px] mt-[40px] sm:mt-0">
                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Last Name"
                ></input>

                <textarea
                  type="description"
                  className="w-[300px] sm:w-[380px] h-[122px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Address for delivery"
                ></textarea>

                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Mobile Phone"
                ></input>
              </div>
            </div>
            <button
              onClick={() => setIndex(2)}
              className="w-[338px] h-[70px] bg-[#33A0FF] text-white text-[24px] font-bold px-[20px] py-[9px] mt-[36px] rounded-md hover:scale-95 transition-all duration-500"
            >
              Go to payment
            </button>
          </>
        )}

        {index == 2 && (
          <>
            <div className="w-full flex flex-col sm:flex-row items-center sm:gap-[70px] mt-[40px]">
              <div className="w-full h-full flex flex-col justify-between gap-[32px]">
                <img
                  className="w-[340px] h-[200px]"
                  src={creditCardImage}
                ></img>
              </div>
              {/* column 02 */}
              <div className="w-full h-full flex flex-col gap-[40px] mt-[40px] sm:mt-0">
                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Card Number"
                ></input>

                <div className="w-full flex gap-[15px]">
                  <input
                    type="text"
                    className="w-full h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                    placeholder="Expiry"
                  ></input>

                  <input
                    type="text"
                    className="w-full h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                    placeholder="CVV"
                  ></input>
                </div>

                <input
                  type="text"
                  className="w-[300px] sm:w-[380px] h-[50px] bg-[#DFDEDE] bg-opacity-50 px-[14px] py-[15px] placeholder:text-[#999999] text-[16px] rounded-[10px] focus:outline-none"
                  placeholder="Holder Number"
                ></input>
              </div>
            </div>
            <button
              onClick={() => setIndex(3)}
              className="w-[338px] h-[70px] bg-[#33A0FF] text-white text-[24px] font-bold px-[20px] py-[9px] mt-[36px] rounded-md hover:scale-95 transition-all duration-500"
            >
              Confirm
            </button>
          </>
        )}

        {index == 3 && (
          <>
            <div className="w-full flex flex-col justify-center items-center gap-[50px] mt-[50px]">
              <div className="w-full flex flex-col items-center gap-[30px] ">
                <img src={success} className="w-[130px] h-[130px]"></img>
                <h1 className="text-[24px] text-[#223263] font-bold">
                  Success
                </h1>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-[338px] h-[70px] bg-[#33A0FF] text-white text-[24px] font-bold px-[20px] py-[9px] mt-[36px] rounded-md hover:scale-95 transition-all duration-500"
              >
                Complete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PaymentModal;
