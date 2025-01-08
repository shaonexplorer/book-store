import { Swiper, SwiperSlide } from "swiper/react";
import bookData from "../utils/BookData";
import BookCard from "./BookCard";

import "swiper/css";
import "swiper/css/pagination";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router";

function BookSwiper() {
  const swiperRef = useRef(SwiperType);

  const pagination = {
    clickable: true,
    el: ".pagination",
  };

  return (
    <div className="w-screen overflow-hidden sm:w-[1350px]   mx-auto mt-[80px] mb-[110px] flex flex-col gap-10">
      <h1 className="ml-[20px] sm:ml-[80px]  mb-[50px] font-semibold text-[24px] sm:text-[38px] font-inter text-[#313131]">
        Selected for you
      </h1>

      <div className="relative w-full h-full">
        <div className="hidden sm:flex absolute left-2 top-[30%]">
          <PrevButton swiperRef={swiperRef} />
        </div>

        <div className="px-[20px] sm:px-[80px] w-full h-full">
          <Swiper
            className="w-[1350px] h-full  "
            slidesPerView={4}
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            loop={true}
            onSwiper={(Swiper) => {
              swiperRef.current = Swiper;
            }}
          >
            {bookData
              .filter((book) => book.category == "fiction")
              .map((book) => (
                <SwiperSlide key={book._id}>
                  <Link to={`/book/${book._id}`}>
                    <BookCard book={book} />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="hidden sm:flex absolute right-2 top-[30%]">
          <NextButton swiperRef={swiperRef} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-[12px]     mx-auto">
        <div
          className="pagination"
          style={{
            "--swiper-pagination-color": "#937DC2",
          }}
        ></div>
      </div>
    </div>
  );
}

export default BookSwiper;
