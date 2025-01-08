import { useState } from "react";
import { useSearchParams } from "react-router";

function SideBar() {
  const [price, setPrice] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="w-[190px] h-full flex flex-col gap-[30px] font-inter ">
      <div className="flex flex-col gap-[25px] bg-[#F6F7F8] px-[20px] py-[20px]">
        <h1 className="text-[18px] text-[#22262A] font-semibold">CATEGORY</h1>
        <div className="w-full h-full flex flex-col items-start gap-[18px] text-[#262626] text-[14px]">
          <button
            className={`${
              searchParams.get("category") == "all"
                ? "text-[#40BFFF]"
                : "text-[#262626]"
            }`}
            onClick={() => setSearchParams({ category: "all" })}
          >
            All
          </button>
          <button
            className={`${
              searchParams.get("category") == "business"
                ? "text-[#40BFFF]"
                : "text-[#262626]"
            }`}
            onClick={() => setSearchParams({ category: "business" })}
          >
            Business
          </button>
          <button
            className={`${
              searchParams.get("category") == "fiction"
                ? "text-[#40BFFF]"
                : "text-[#262626]"
            }`}
            onClick={() => setSearchParams({ category: "fiction" })}
          >
            Fiction
          </button>
          <button
            className={`${
              searchParams.get("category") == "horror"
                ? "text-[#40BFFF]"
                : "text-[#262626]"
            }`}
            onClick={() => setSearchParams({ category: "horror" })}
          >
            Horror
          </button>
          <button
            className={`${
              searchParams.get("category") == "adventure"
                ? "text-[#40BFFF]"
                : "text-[#262626]"
            }`}
            onClick={() => setSearchParams({ category: "adventure" })}
          >
            Adventure
          </button>
        </div>
      </div>
      {/* -------------------------- */}
      <div className="flex flex-col gap-[25px] bg-[#F6F7F8] px-[20px] py-[20px]">
        <h1 className="text-[18px] text-[#22262A] font-semibold">AUTHOR</h1>
        <div className="w-full h-full flex flex-col items-start gap-[18px] text-[#262626] text-[14px]">
          <button onClick={() => setSearchParams({ author: "all" })}>
            All
          </button>
          <button onClick={() => setSearchParams({ author: "mario platz" })}>
            Mario platz
          </button>
          <button
            onClick={() => setSearchParams({ author: "james patterson" })}
          >
            James patterson
          </button>

          <button onClick={() => setSearchParams({ author: "dan brown" })}>
            Dan brown
          </button>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="flex flex-col gap-[25px] bg-[#F6F7F8] px-[20px] py-[20px]">
        <h1 className="text-[18px] text-[#22262A] font-semibold">PRICES</h1>
        <div className="w-full h-full flex flex-col items-start gap-[18px] text-[#262626] text-[14px]">
          <div className="flex items-center justify-between w-full">
            <p>Below:</p>
            <p>${price}</p>
          </div>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setSearchParams({ price: e.target.value });
            }}
            type="range"
            className="w-[150px] h-[4px]  font-inter focus:outline-none"
          ></input>
        </div>
      </div>

      {/* ------------------ */}

      <button className="w-full h-[55px] bg-[#F6F7F8] flex justify-center items-center font-inter  text-[#262626]">
        More
      </button>
    </div>
  );
}

export default SideBar;
