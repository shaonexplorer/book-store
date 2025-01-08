import { useNavigate } from "react-router";
import image from "../assets/search/Not Found.png";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-[16px] font-inter">
      <img src={image} className="w-[140px] h-[140px]"></img>
      <h1 className="font-bold text-[24px] text-[#223263]">
        Product Not Found
      </h1>
      <h1 className=" text-[12px] text-[#9098B1]">
        Thank you for shopping with us
      </h1>
      <button
        onClick={() => navigate("/")}
        className="bg-[#40BFFF] p-[16px] rounded-[5px] tex-[14px] font-bold text-white w-[340px]"
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
