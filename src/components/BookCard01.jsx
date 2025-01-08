import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/bookCard/cart_2.png";
import rate from "../assets/bookCard/rate.png";
import btn from "../assets/bookCard/btn.png";
import { useDispatch } from "react-redux";
import bookData from "../utils/BookData";
import { add } from "../redux/cartSlice";

function BookCard01({ book }) {
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const currentBook = bookData.find((item) => item._id == book._id);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await import(`../assets/book/${book.coverImage}.png`);
        setImage(data.default);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-screen  sm:w-[960px] px-[16px] py-[16px] sm:px-0 sm:py-0 sm:h-[320px] flex flex-col sm:flex-row gap-[15px] font-inter border-b border-[#F6F7F8] shadow-stone-300 shadow-sm">
      <div className="w-[210px] sm:w-[270px] h-[270px]">
        <Link to={`/book/${book._id}`}>
          <img
            src={image}
            className="w-full h-full hover:scale-95 transition-all duration-500"
          ></img>
        </Link>
      </div>
      {/* -------------------------------------- */}
      <div className="w-[350px] sm:w-full h-full flex flex-col gap-[17px]">
        <h1 className="text-[#22262A] text-[24px]">{book.title}</h1>
        <div className="flex items-center w-full h-[15px] gap-[13px]">
          <img src={rate} className="w-[70px] h-[10px]"></img>
          <p className="text-[#C1C8CE] text-[14px]">0 Reviews</p>
          <button className="text-[#33A0FF] text-[14px] underline underline-offset-2">
            Submit a review
          </button>
        </div>
        <span className="w-screen sm:w-[470px]  h-[2px] bg-[#F6F7F8]"></span>
        <p className="text-[20px] font-bold text-[#40BFFF]">${book.newPrice}</p>
        <p className="w-[350px] sm:w-full text-[#262626] text-[14px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          reiciendis sunt minima placeat cum eos, suscipit incidunt
          necessitatibus dignissimos soluta, expedita quos, nulla neque ipsum
          repudiandae dolor dicta quae earum!
        </p>

        <div className="flex items-center gap-[16px] w-full">
          <button
            onClick={() => dispatch(add(currentBook))}
            className="w-[150px] flex gap-2 items-center   bg-[#33A0FF] bg-opacity-30 px-[20px] py-[10px] text-[14px] rounded-sm  text-[#33A0FF] hover:scale-95 transition-all duration-500"
          >
            <img src={logo} className="w-[16px] h-[16px]"></img>Add To Cart
          </button>
          <button className="w-[44px] h-[44px] hover:scale-95 transition-all duration-500">
            <img src={btn} className="w-full h-full"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard01;
