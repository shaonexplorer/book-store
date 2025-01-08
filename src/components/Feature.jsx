import truck from "../assets/features/Truck.png";
import star from "../assets/features/Star.png";
import book from "../assets/features/Book open.png";

function Feature() {
  return (
    <div className="w-[300px] sm:w-[1190px] h-[200px] sm:h-[80px] mx-auto mt-[100px] mb-[80px] flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex items-center h-full sm:pr-[60px] sm:border-r border-[#937DC2] gap-[20px] font-inter font-semibold text-[20px] sm:text-[24px] text-[#382C2C]">
        <img className="w-[48px] h-[48px]" src={truck}></img>
        <p>Free shipping over 50$</p>
      </div>

      <div className="flex items-center h-full sm:pr-[60px] sm:border-r border-[#937DC2] gap-[20px] font-inter font-semibold text-[20px] sm:text-[24px] text-[#382C2C]">
        <img className="w-[48px] h-[48px]" src={star}></img>
        <p>Save with loyalty points</p>
      </div>

      <div className="flex items-center gap-[20px] font-inter font-semibold text-[20px] sm:text-[24px] text-[#382C2C]">
        <img className="w-[48px] h-[48px]" src={book}></img>
        <p className="underline-offset-8 underline">Read a few pages</p>
      </div>
    </div>
  );
}

export default Feature;
