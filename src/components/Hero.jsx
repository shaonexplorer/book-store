import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import bookData from "../utils/BookData";
import HeroCard from "./HeroCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { useRef } from "react";

function Hero() {
  const swiperRef = useRef(SwiperType);
  return (
    <div className="mt-[40px] sm:mt-[70px] w-[330px] sm:w-[1120px] h-[700px] sm:h-[530px] mx-auto flex flex-col  overflow-hidden ">
      <Swiper
        className="w-full h-full "
        onSwiper={(Swiper) => (swiperRef.current = Swiper)}
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
      >
        {bookData.map((book) => (
          <SwiperSlide key={book._id}>
            <HeroCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-[24px] justify-center items-center">
        <PrevButton swiperRef={swiperRef} />
        <NextButton swiperRef={swiperRef} />
      </div>
    </div>
  );
}

export default Hero;
