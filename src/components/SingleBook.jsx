import { useParams } from "react-router";
import bookData from "../utils/BookData";
import { useEffect, useState } from "react";
import rating from "./../assets/bookCard/rating.png";
import minus from "./../assets/bookCard/minus.png";
import plus from "./../assets/bookCard/plus.png";
import BookSwiper from "./BookSwiper";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment } from "../redux/cartSlice";
import ProductCard from "./ProductCard";

function SingleBook() {
  const { bookId } = useParams();

  const currentBook = bookData.find((book) => book._id == bookId);

  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await import(`./../assets/book/${currentBook.coverImage}`);
        setImage(data.default);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [currentBook]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentBook]);

  return (
    <div className="w-full h-full mx-auto flex flex-col ">
      {/* ------------------------------- */}
      {/* product card */}

      <div className="hidden  w-[1192px] h-[656px] mt-[74px] mx-auto sm:flex gap-[60px] ">
        {/* image  */}
        <div className="w-[580px] flex gap-[20px] justify-end">
          <div className="w-[412px] h-[653px] rounded-[6px] overflow-hidden">
            <img className="w-full h-full" src={image}></img>
          </div>
        </div>

        {/*book details */}
        <div className="w-[552px] h-[656px] flex flex-col justify-between font-inter text-[#382C2C]">
          <h1 className="text-[28px] font-bold ">{currentBook.title}</h1>
          <p className="text-[18px] text-[#4F4C57]">{currentBook.author}</p>
          <img className="w-[172px] h-[25px]" src={rating}></img>
          <span className="font-semibold text-[24px] text-[#231F2D]">
            ${currentBook.newPrice}
          </span>
          <p className="text-[16px] leading-[24px] text-[#4F4C57]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius
            voluptatem maxime quas enim aspernatur illum voluptates ea unde
            dicta veritatis vitae molestiae odio, magnam excepturi ex error
            reiciendis nesciunt?
          </p>
          <span className="w-[72px] h-[24px] flex justify-center items-center gap-2">
            <button onClick={() => dispatch(decrement(currentBook))}>
              <img src={minus} className="w-[20px] h-[20px]"></img>
            </button>
            <p>{cart?.find((item) => item._id == currentBook._id)?.qty || 0}</p>

            <button onClick={() => dispatch(increment(currentBook))}>
              <img src={plus} className="w-[20px] h-[20px]"></img>
            </button>
          </span>

          <div className="flex gap-[32px] w-full ">
            <button
              onClick={() => dispatch(add(currentBook))}
              className="px-[70px] py-[12px] text-white text-[16px] bg-[#937DC2] w-full hover:scale-95 trasnsition-all duration-500"
            >
              Add to cart
            </button>

            <button className="px-[70px] py-[12px] text-[#937DC2] text-[16px] bg-white  border border-[#937DC2] w-full hover:scale-95 trasnsition-all duration-500">
              Favorite
            </button>
          </div>

          <span className="w-full h-[1px] rounded-lg bg-[#937DC2] bg-opacity-[60%]"></span>

          <div className="flex gap-[34px] w-full">
            <div className="flex flex-col gap-[20px] w-full">
              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Publisher :
                </label>
                <p className="text-[16px]">{currentBook.author}</p>
              </span>

              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Language :
                </label>
                <p className="text-[16px]">English</p>
              </span>

              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Print length :
                </label>
                <p className="text-[16px]">592 pages</p>
              </span>
            </div>

            {/* row 02 */}
            <div className="flex flex-col gap-[20px] w-full">
              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Publication date :
                </label>
                <p className="text-[16px]">March 3, 2020</p>
              </span>

              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Reading age :
                </label>
                <p className="text-[16px]">14+</p>
              </span>

              <span className="flex justify-between w-full">
                <label className="text-[#C689C6] text-opacity-[70%] text-[16px]">
                  Dimensions :
                </label>
                <p className="text-[16px]">6 x 1.8 x 9 inches</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="sm:hidden w-full">
        <ProductCard book={currentBook} image={image} />
      </div>
      {/* collection */}
      <BookSwiper />
      {/* -------------------------------- */}
      {/* trending */}

      <Trending />
    </div>
  );
}

export default SingleBook;
