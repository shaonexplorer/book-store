import { useSearchParams } from "react-router";

function Bar({ itemsLength }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="w-screen mx-[16px] sm:mx-0 sm:w-[960px] h-[60px] bg-[#F1F3F4] flex items-center px-2 sm:px-[20px] py-[20px] gap-[20px] sm:gap-[50px]">
      <p className="text-[#22262A] text-[14px] sm:text-[16px] font-inter">
        {itemsLength} results
      </p>
      <div className="flex items-center gap-[10px] ">
        <label className="hidden sm:flex sm:w-full text-[#22262A]  sm:text-[16px] font-inter">
          Sort By
        </label>
        <select
          defaultValue={1}
          onChange={(e) => setSearchParams({ sort: e.target.value })}
          className=" px-2 py-2   sm:w-full bg-[#F1F3F4] text-[#22262A] text-[14px] sm:text-[16px] font-inter focus:outline-none"
        >
          <option value={0}>Sort By</option>
          <option value={1}>Price High to Low</option>
          <option value={2}>Price Low to High</option>
          <option value={3}>Title A-Z</option>
          <option value={4}>Title Z-A</option>
        </select>
      </div>
      <select
        onChange={(e) => setSearchParams({ category: e.target.value })}
        className="sm:hidden text-[14px] font-inter bg-[#F1F3F4] text-[#22262A] focus:outline-none"
      >
        <option value={0}>Category</option>
        <option value={"all"}>All</option>
        <option value={"business"}>Business</option>
        <option value={"fiction"}>Fiction</option>
        <option value={"horror"}>Horror</option>
        <option value={"adventure"}>Adventure</option>
      </select>
    </div>
  );
}

export default Bar;
