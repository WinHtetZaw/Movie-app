import "@lottiefiles/lottie-player";
import { useLocation } from "react-router-dom";
import {
  CiFacebook,
  CiTwitter,
  CiInstagram,
  CiLinkedin,
  CiMail,
} from "react-icons/ci";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
    return <></>;
  }
  return (
    <div className=" flex items-center pt-5 pb-16 gap-5 flex-col w-full bg-dark-5 text-white">
      {/* <ul className=" grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        <li className=" w-[70px] sm:w-[100px] aspect-square">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_xwabp3dh.json"
            style={{ width: "100%", height: "100%" }}
          ></lottie-player>
        </li>
        <li className=" w-[70px] sm:w-[100px] aspect-square">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_5mhyg2hz.json"
            style={{ width: "100%", height: "100%" }}
          ></lottie-player>
        </li>
        <li className=" w-[70px] sm:w-[100px] aspect-square">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_86afyky0.json"
            style={{ width: "100%", height: "100%" }}
          ></lottie-player>
        </li>
        <li className=" w-[70px] sm:w-[100px] aspect-square">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_ej2lfhv2.json"
            style={{ width: "100%", height: "100%" }}
          ></lottie-player>
        </li>
      </ul> */}
      <ul className=" flex gap-5 flex-wrap text-2xl h-10">
        <li className=" hover:scale-110 text-slate-300 hover:text-white active:scale-90 cursor-pointer transition-all duration-300 ">
          <CiFacebook />
        </li>
        <li className=" hover:scale-110 text-slate-300 hover:text-white active:scale-90 cursor-pointer transition-all duration-300 ">
          <CiTwitter />
        </li>
        <li className=" hover:scale-110 text-slate-300 hover:text-white active:scale-90 cursor-pointer transition-all duration-300 ">
          <CiInstagram />
        </li>
        <li className=" hover:scale-110 text-slate-300 hover:text-white active:scale-90 cursor-pointer transition-all duration-300 ">
          <CiLinkedin />
        </li>
        <li className=" hover:scale-110 text-slate-300 hover:text-white active:scale-90 cursor-pointer transition-all duration-300 ">
          <CiMail />
        </li>
      </ul>
      <ul className=" font-serif flex items-center gap-3 text-sm sm:text-base sm:gap-5">
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          Home
        </li>
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          About
        </li>
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          Service
        </li>
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          Help
        </li>
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          Contact
        </li>
      </ul>
      <p className=" flex items-center text-sm sm:text-base">
        <span className=" text-2xl font-mono mr-2">&copy; </span>Win Htet Zaw |
        All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
