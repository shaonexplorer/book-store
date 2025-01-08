import { useDispatch } from "react-redux";
import rating from "../assets/productCard/Star Rating.png";
import { add } from "../redux/cartSlice";

function ProductCard({ book, image }) {
  const dispatch = useDispatch();
  return (
    <div className="w-screen flex flex-col mt-10">
      {/* --------image and titles-------- */}
      <div className="w-screen h-[530px] font-inter flex flex-col">
        <div className="w-screen h-[350px] mx-[16px]">
          <img src={image} className="w-[60%] h-full"></img>
        </div>
        {/* ---------------titles-------------------------- */}
        <div className="w-screen h-full px-[16px] flex flex-col mt-[40px]">
          <h1 className="text-[20px] font-bold text-[#223263]">{book.title}</h1>
          <img src={rating} className="w-[96px] mt-[8px]"></img>
          <p className="text-[20px] font-bold text-[#40BFFF] mt-[16px]">
            ${book.newPrice}
          </p>
        </div>
      </div>
      {/* --------more details------- */}
      <div className="w-screen px-[16px]">
        <h1 className="font-inter font-bold text-[#223263] text-[14px]">
          Specification
        </h1>

        <div className="flex gap-[15px] w-[350px] mt-[12px]">
          <div className="flex flex-col gap-[10px] w-full">
            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Publisher:
              </label>
              <p className="text-[14px]">{book.author}</p>
            </span>

            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Language:
              </label>
              <p className="text-[14px]">English</p>
            </span>

            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Print length :
              </label>
              <p className="text-[14px]">592 pages</p>
            </span>
          </div>

          {/* row 02 */}
          <div className="flex flex-col gap-[10px] w-full">
            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Publication date :
              </label>
              <p className="text-[14px]">March 3, 2020</p>
            </span>

            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Reading age :
              </label>
              <p className="text-[14px]">14+</p>
            </span>

            <span className="flex justify-between w-full">
              <label className="text-[#C689C6] text-opacity-[70%] text-[14px]">
                Dimensions :
              </label>
              <p className="text-[14px]">6 x 1.8 x 9 inches</p>
            </span>
          </div>
        </div>

        <button
          onClick={() => dispatch(add(book))}
          className="mt-[20px] hover:scale-95 transition-all duration-500 bg-[#40BFFF] w-full px-[16px] py-[16px] text-[14px] text-white font-bold font-inter rounded-[5px] shadow-[0px_10px_30px_rgba(64, 191, 255, 0.24)]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
