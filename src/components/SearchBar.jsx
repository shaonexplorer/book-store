import { Link, useNavigate } from "react-router";
import close from "../assets/header/close.png";
import search from "../assets/header/Group.png";
import { IoMdArrowBack } from "react-icons/io";

function SearchBar({
  suggestion,
  searchQuery,
  setSearchQuery,
  setShowSearchBar,
}) {
  const navigate = useNavigate();
  return (
    <div className="sm:hidden fixed inset-0 w-screen h-screen z-30 bg-black bg-opacity-40">
      <div className="w-screen h-screen flex flex-col bg-white font-inter text-[12px] text-[#223263] font-bold px-[16px] py-[20px] ">
        <div className="flex gap-5 items-center w-full">
          <button
            onClick={() => {
              setSearchQuery();
              setShowSearchBar(false);
            }}
          >
            <IoMdArrowBack className="w-[20px] h-[20px] text-[#40BFFF]" />
          </button>

          <div className="w-[260px] h-[42px] relative">
            <button
              onClick={() => {
                setShowSearchBar(false);
                navigate(`/search?query=${searchQuery}`);
              }}
            >
              <img
                src={search}
                className="w-[14px] h-[14px] absolute top-[35%] left-2"
              ></img>
            </button>
            <input
              onSubmit={() => {
                setShowSearchBar(false);
                navigate(`/search?query=${searchQuery}`);
              }}
              value={searchQuery}
              placeholder="Type any book"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[260px] h-[42px] pl-[25px] py-[12px] rounded-[5px] border border-[#40BFFF] focus:outline-none  "
            ></input>

            {searchQuery?.length > 1 && (
              <button onClick={() => setSearchQuery()}>
                <img
                  className="absolute top-[25%] right-4 w-[20px] h-[20px]"
                  src={close}
                ></img>
              </button>
            )}
          </div>
        </div>

        <span className="bg-[#EBF0FF] w-full h-[1px] my-[16px] "></span>
        <div onClick={() => setShowSearchBar(false)} className="w-full h-full">
          <ul className="w-full h-full text-[#9098B1]">
            {searchQuery?.length > 2 &&
              suggestion?.map((item, index) => (
                <li className="px-[16px] py-[16px]" key={index}>
                  <Link to={`/search?query=${item.title}`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
