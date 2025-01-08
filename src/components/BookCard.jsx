import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import bookData from "../utils/BookData";

function BookCard({ book }) {
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      try {
        const data = await import(`./../assets/book/${book.coverImage}.png`);
        setImage(data.default);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  function handleAddToCart(e) {
    e.preventDefault();

    const currentBook = bookData.find((item) => item._id == book._id);

    dispatch(add(currentBook));
  }
  return (
    <div className="w-[274px] h-[650px] flex flex-col justify-between">
      <div className="w-full h-[414px] overflow-hidden rounded-[3px] shadow-[0px_0px_60.0833px_rgba(0, 0, 0, 0.25)]">
        <img
          src={image}
          className="w-full h-[414px] object-cover hover:scale-95 transition-all duration-500"
        ></img>
      </div>

      <div className="flex flex-col justify-between  ">
        <h1 className="font-inter font-semibold text-[24px]   text-[#382C2C] leading-tight tracking-tighter">
          {book.title}
        </h1>
        <p className="text-[16px] font-inter text-[#4D4C4C] mt-[7px]">
          {book.author}
        </p>
        <div className="flex justify-between items-center w-full mt-[14px]">
          <p className="text-[20px] font-inter font-semibold text-[#382C2C]">
            ${book.newPrice}
          </p>
          <button onClick={(e) => e.preventDefault()}>
            <FaRegHeart className="w-[24px] h-[24px] text-[#937DC2] " />
          </button>
        </div>

        <button
          onClick={(e) => handleAddToCart(e)}
          className="hover:scale-95 transition-all duration-500 py-[12px] mt-[30px] bg-[#937DC2] rounded-[2px] font-inter text-[16px] text-white flex justify-center items-center gap-2 "
        >
          <FaShoppingCart className="w-[20px] h-[20px] text-white" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
