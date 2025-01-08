import { Link, useNavigate } from "react-router";
import logo from "../assets/header/Logo.png";
import logo01 from "../assets/header/we love books.png";
import google from "../assets/login/google.png";
import login from "../assets/login/auth-side-bg.png";
import { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

function Signup() {
  const [user, setUser] = useState({});

  const context = useContext(authContext);

  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  async function handleSignup() {
    if (!user.email || !user.password)
      return Toast.fire({
        icon: "error",
        title: `Please fill all fields`,
        position: "top-right",
      });
    try {
      const email = await context.signUp(user.email, user.password);
      if (email) {
        Toast.fire({
          icon: "success",
          title: `Sign up Successfull`,
          position: "top-right",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-scren h-screen flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-md">
      <img
        className="hidden sm:flex w-[616px] h-[800px] rounded-l-[6px]"
        src={login}
      ></img>
      <div className="sm:mr-48 w-[343px] sm:w-[450px] h-[592px] sm:h-[800px] sm:p-[48px] bg-white flex flex-col relative justify-between gap-[16px] font-inter shadow-stone-300 sm:shadow-md rounded-[6px]">
        {/* email---------------------------------------------- */}
        <div className="flex justify-center w-full">
          {/* <img src={logo} className="w-[60px] "></img> */}
          <Link to={"/"}>
            <div className="flex gap-[8px] justify-center items-center focus:outline-none">
              <img src={logo} className="w-[60px] h-[25px]"></img>
              <span className="w-[1px] h-[30px] rounded-sm bg-[#937DC2]"></span>
              <img src={logo01} className="w-[60px] h-[30px]"></img>
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-[30px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <label className="hidden sm:flex text-[11px] text-[#333333]">
                Sign up
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
                placeholder="Email or phone number"
                className="w-full h-[48px] bg-[#E5E5E5] rounded-[6px] px-[16px] py-[14px] placeholder:text-[#808080] placeholder:text-[15px] focus:outline-none"
              ></input>
            </div>
            {/* password ------------------------------------- */}
            <div className="flex flex-col gap-[8px]">
              <label className="hidden sm:flex text-[11px] text-[#333333]">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Enter password"
                className="w-full h-[48px] bg-[#E5E5E5] rounded-[6px] px-[16px] py-[14px] placeholder:text-[#808080] placeholder:text-[15px] focus:outline-none"
              ></input>
            </div>
          </div>

          <button
            onClick={() => handleSignup()}
            className="w-full h-[40px] px-[24px] py-[10px] bg-[#007AFF] rounded-[6px] text-white text-[15px] hover:scale-95 transition duration-500"
          >
            Sign up
          </button>
          <span className="w-full h-[0.5px] bg-[#E5E5E5] "></span>
          <button className="w-full h-[40px] px-[24px] py-[10px] bg-[#333333] rounded-[6px] text-white text-[12px] flex justify-center items-center gap-[8px] hover:scale-95 transition duration-500">
            <img src={google} className="w-[20px] h-[20px]"></img>
            <p>or sign in with Google</p>
          </button>

          <div className="w-full flex justify-center">
            <h1 className="text-[#1A1A1A] text-[12px]">
              Already have an account?&nbsp;
              <Link to={"/login"}>
                <span className="text-[#007AFF]"> Sign in</span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="  w-[360px] flex justify-center items-center">
          <p className="text-[12px] text-[#666666]">
            © All copyrights are reserved. B-World 2024.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
