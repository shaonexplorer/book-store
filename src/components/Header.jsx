import logo from "./../assets/header/Logo.png";
import logo01 from "./../assets/header/we love books.png";
import search from "./../assets/header/Search.png";
import cartLogo from "./../assets/header/cart.png";
import user from "./../assets/header/User.png";
import { FaHeart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../context/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineHelpCenter } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import Suggestion from "./Suggestion";
import bookData from "../utils/BookData";
import SearchBar from "./SearchBar";
import { IoIosSearch } from "react-icons/io";

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartItemQty = cart.reduce((acc, item) => acc + item.qty, 0);

  const context = useContext(authContext);
  const navigate = useNavigate();

  const [showUserOption, setShowUserOption] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [index, setIndex] = useState(-1);

  const [searchQuery, setSearchQuery] = useState();

  const suggestion = bookData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  const ref = useRef();

  async function handleLogOut() {
    try {
      await context.logOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowUserOption(false);
    } else return;
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("mousedown", (e) => handleClickOutside(e));
    };
  }, []);

  useEffect(() => {
    if (searchQuery?.length > 1 && suggestion.length > 0) {
      setShowSuggestion(true);
    } else setShowSuggestion(false);
  }, [suggestion, searchQuery]);

  return (
    <>
      {showSearchBar && (
        <SearchBar
          suggestion={suggestion}
          setSearchQuery={setSearchQuery}
          setShowSearchBar={setShowSearchBar}
          searchQuery={searchQuery}
        />
      )}
      <div className="w-screen sm:w-[1442px] px-[30px] sm:px-0 mx-auto flex flex-col justify-center items-center sm:border-none border-b border-[#937DC2]">
        {/* upper header */}
        <div className="w-full sm:w-[1442px] h-[72px]   flex justify-between sm:px-[130px] items-center">
          {/* logo */}
          <Link to="/">
            <div className="flex gap-[8px] justify-center items-center">
              <img src={logo} className="w-[60px] h-[25px]"></img>
              <span className="hidden sm:flex w-[1px] h-[30px] rounded-sm bg-[#937DC2]"></span>
              <img
                src={logo01}
                className="hidden sm:flex w-[60px] h-[30px]"
              ></img>
            </div>
          </Link>

          {/* search bar */}

          <div className="hidden sm:flex w-[180px] sm:w-[376px] relative font-inter">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter" && showSuggestion === true) {
                  if (index >= 0) {
                    navigate(`/search?query=${suggestion[index]?.title}`);
                  } else if (index < 0) {
                    navigate(`/search?query=${searchQuery}`);
                  }

                  setSearchQuery();
                } else if (e.key === "Enter" && showSuggestion === false) {
                  navigate(`/search?query=${searchQuery}`);
                }
                if (e.key === "ArrowDown" && showSuggestion) {
                  setIndex(index + 1);
                } else if (e.key === "ArrowUp" && showSuggestion) {
                  setIndex(index - 1);
                }
              }}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="w-full sm:w-[376px] h-[36px] border border-white rounded-[2px] px-[15px] py-[9px] placeholder:text-[14px] placeholder:text-[#B8B8B8] bg-[#F1F1F1] text-purple-500 normal-case text-[14px] focus:outline-none"
              placeholder="Type any book here"
            ></input>
            {showSuggestion && (
              <Suggestion
                input={suggestion}
                index={index}
                setIndex={setIndex}
                setSuggestion={setSearchQuery}
              />
            )}
            <Link to={`/search?query=${searchQuery}`}>
              <button
                onClick={() => {
                  setSearchQuery();
                }}
              >
                <img
                  src={search}
                  className="w-[20px] h-[20px] absolute right-[8px] top-[8px]"
                ></img>
              </button>
            </Link>
          </div>
          {/* nav bar text  */}
          <div className="hidden sm:flex gap-[24px] justify-center items-center text-[14px] text-[#7B7881]">
            <h1>Privacy policy</h1>
            <h1>Warranty</h1>
            <h1>Shipping</h1>
            <h1>Returns</h1>
          </div>

          {/* icons */}
          <div className="flex gap-2 sm:gap-[30px] justify-center items-center ">
            <button onClick={() => setShowSearchBar(true)}>
              <IoIosSearch className="w-[22px] h-[22px] text-stone-600" />
            </button>

            <Link to="/cart">
              <div className="w-[24px] h-[24px] relative">
                <img src={cartLogo} className="w-[24px] h-[24px]"></img>
                {cart.length > 0 && (
                  <span className="absolute -top-[6px] -right-[6px] z-20 rounded-full bg-[#C689C6] flex justify-center items-center w-[15px] h-[15px] font-inter text-white text-[12px]">
                    {cartItemQty}
                  </span>
                )}
              </div>
            </Link>

            <button className="hidden sm:flex">
              <FaHeart className="w-[24px] h-[24px] text-[#937DC2]" />
            </button>

            {!context.user ? (
              <button>
                <Link to={"/login"}>
                  <img src={user} className="w-[24px] h-[24px]"></img>
                </Link>
              </button>
            ) : (
              <div ref={ref} className="w-full relative">
                <button
                  onClick={() => {
                    setShowUserOption(!showUserOption);
                  }}
                  className="text-[14px] w-28 sm:w-[180px] text-black py-[14px] sm:px-[20px] rounded-[14px] flex items-center justify-between sm:bg-[#F7F7F9] font-inter   relative"
                >
                  <span className="text-stone-600">Hello,</span>
                  <span className=" ">
                    {` ${
                      context.user.displayName ||
                      context.user.email.split("@")[0]
                    }`}
                  </span>

                  {showUserOption ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {showUserOption && (
                  <div className="w-[280px] overflow-hidden z-30 flex flex-col   absolute top-[59px] right-0 border-[#E4E2E4] border bg-white text-[#000000] text-[14px] font-inter   rounded-[8px] shadow-md shadow-stone-200">
                    <span className="flex gap-2 py-[10px] px-[16px] items-center w-full text-[#999999] text-[16px]">
                      <CgProfile className="w-[20px] h-[20px]" />
                      {context.user.email}
                    </span>
                    <span className="bg-[#CECECE] w-[250px] flex h-[1px] mx-[15px]"></span>
                    <button className="flex gap-2 py-[10px] px-[16px] items-center w-full hover:text-purple-400 transition duration-500">
                      <IoSettingsOutline className="w-[17px] h-[17px]" />
                      Profile Settings
                    </button>
                    <button className="flex gap-2 py-[10px] px-[16px] items-center w-full hover:text-purple-400 transition duration-500">
                      <MdOutlineHelpCenter className="w-[17px] h-[17px]" /> Help
                      Center
                    </button>
                    <button className="flex gap-2 py-[10px] px-[16px] items-center w-full hover:text-purple-400 transition duration-500">
                      <AiOutlineProduct className="w-[17px] h-[17px]" /> Orders
                    </button>
                    <span className="bg-[#CECECE] w-[250px] flex h-[1px] mx-[15px]"></span>
                    <button
                      className="flex  gap-2 items-center py-[10px] px-[16px] w-full hover:text-purple-400 transition duration-500"
                      onClick={() => handleLogOut()}
                    >
                      <BiLogOut className="w-[17px] h-[17px]" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* bottom header */}
        <div className="hidden w-[1442px] h-[80px]   sm:flex justify-between px-[130px] items-center border-y border-[#937DC2]">
          {/* nav text */}
          <div className="flex gap-[24px] justify-center items-center text-[16px] font-inter text-[#4D4C4C] ">
            <button>The must Read</button>
            <button>News</button>
            <button>Promotion of the amount</button>
            <button>Publishs</button>
            <button>Subscribe to the newsletter</button>
          </div>
          {/* contact */}
          <div className="flex gap-[35px] justify-center items-center">
            <button className="flex gap-[8px] justify-center items-center">
              <IoMdCall className="w-[24px] h-[24px] text-[#937DC2]" />
              <h1 className="text-[#4D4C4C] font-inter">+445 87 999 000</h1>
            </button>
            <button className="px-[30px] py-[12px] text-[16px] text-[#937DC2] font-inter border border-[#937DC2] rounded-[2px]">
              Request a call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
