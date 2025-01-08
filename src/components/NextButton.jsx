import { IoIosArrowDropright } from "react-icons/io";

function NextButton({ swiperRef }) {
  return (
    <button onClick={() => swiperRef.current?.slideNext()}>
      <IoIosArrowDropright className="w-[32px] h-[32px] text-[#937DC2] hover:scale-125 transition-all duration-300" />
    </button>
  );
}

export default NextButton;
