import logo from "./../assets/footer/Logo.png";
import follow from "./../assets/footer/follow us.png";
import { IoMdCall } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import pay from "./../assets/footer/ways to pay.png";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="w-screen sm:w-[1442px] mx-auto h-[920px] sm:h-[409px] mt-[60px] sm:mt-[109px] pl-[20px] sm:pl-0 pr-2 sm:pr-0 bg-[#937DC2] flex flex-col ">
      {/* part 01 */}
      <div className="w-full py-[50px] sm:px-[124px] flex flex-col gap-5 sm:flex-row justify-between ">
        {/* col 01 */}
        <div className="flex flex-col gap-[190px]">
          <Link to="/">
            <img src={logo} className="w-[60px] h-[25px]"></img>
          </Link>

          <img src={follow} className="hidden sm:flex w-[116px] h-[28px]"></img>
        </div>
        {/* col 02 */}

        <div className="sm:w-[653px] sm:h-[189px] grid grid-cols-2 gap-[40px] sm:flex justify-between font-inter text-[14px] sm:text-[16px] text-white text-opacity-[80%]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-semibold text-white">Categories</h1>
            <h1>Psychology</h1>
            <h1>Self-Help</h1>
            <h1>Romance</h1>
            <h1>Mystery</h1>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h1 className="font-semibold text-white">For kids</h1>
            <h1>Games</h1>
            <h1>Comics</h1>
            <h1>Fantasy</h1>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h1 className="font-semibold text-white">E Books</h1>
            <h1>Fiction</h1>
            <h1>Historical</h1>
            <h1>Horror</h1>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h1 className="font-semibold text-white">Help & Contacts</h1>
            <div className="flex items-center gap-2">
              <IoMdCall className="w-[16px] h-[16px] text-white" />
              <h1>+445 87 999 000</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="w-[16px] h-[16px] text-white" />
              <h1>Mo-Fri, 9 AM to 11 PM</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdMail className="w-[16px] h-[16px] text-white" />
              <h1>b.world@store.ro</h1>
            </div>
          </div>
        </div>

        {/* col 03 */}

        <div className="w-[170px] flex flex-col gap-[25px] ml-auto sm:ml-0">
          <p className="font-inter w-[160px] text-[14px] text-white  leading-[18px]">
            If you have questions, you can contact us or we will do it for you.
          </p>
          <button className="bg-[#937DC2] border border-white font-inter text-white text-[16px] px-[30px] py-[12px] w-fit">
            Request a call
          </button>

          <img src={pay} className="mt-[77px] w-[177px] h-[32px]"></img>
        </div>
      </div>
      {/* part 02 */}
      <div className="w-full h-[56px] flex justify-center items-center border-t border-white">
        <h1 className="font-inter text-[12px] sm:text-[16px] text-white ">
          © All copyrights are reserved. B-World 2022.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
