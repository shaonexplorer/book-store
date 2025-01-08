import { IoIosArrowDropleft } from "react-icons/io";

function PrevButton({ swiperRef }) {
  return (
    <button onClick={() => swiperRef.current?.slidePrev()}>
      <IoIosArrowDropleft className="w-[32px] h-[32px] text-[#937DC2] hover:scale-125 transition-all duration-300" />
    </button>
  );
}

export default PrevButton;
