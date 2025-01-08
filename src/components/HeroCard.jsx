import { useEffect, useState } from "react";
import { Link } from "react-router";

function HeroCard({ book }) {
  const [image, setImage] = useState();
  useEffect(() => {
    async function fetch() {
      try {
        const data = await import(`./../assets/hero/${book.coverImage}`);
        setImage(data.default);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center">
      {/* text */}
      <div className=" sm:pl-10 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center gap-[24px] sm:gap-[35px]">
          <div className="w-fit px-[10px] py-[10px] border border-[#C689C6] text-[12px] sm:text-[14px] text-[#C689C6] font-inter leading-[20px]">
            Author of august
          </div>
          <h1 className="font-inter font-bold text-[28px] sm:text-[48px] leading-[60px] text-[#382C2C]">
            {book.author}
          </h1>
          <p className="sm:w-[477px] text-[#4D4C4C] font-inter text-[14px]  sm:text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi
            rerum quisquam fugit esse numquam quis vero voluptates autem
            incidunt suscipit ea, blanditiis, recusandae tempora?
          </p>
          <Link to={`/book/${book._id}`}>
            <button className="bg-[#937DC2] hover:scale-95 transition-all duration-500 w-fit text-[#FFFFFF] rounded-[2px] px-[22px] sm:px-[32px] py-[12px] text-[14px] sm:text-[16px] font-inter">
              View his books
            </button>
          </Link>
        </div>
      </div>
      {/* image  */}
      <div className="relative w-full h-full">
        <img
          src={image}
          className="mix-blend-screen absolute top-[10%] sm:top-0 left-[25%] sm:left-[247px] w-[180px] h-[260px] sm:w-[314px] sm:h-[444px] shadow-[8.01111px_0px_60.0833px_rgba(255, 255, 255, 0.25)]"
        ></img>
      </div>
    </div>
  );
}

export default HeroCard;
