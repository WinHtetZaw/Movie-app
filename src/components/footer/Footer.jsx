import "@lottiefiles/lottie-player";
import { Link, useLocation } from "react-router-dom";
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
    <div className=" flex items-center py-10 gap-5 flex-col w-full bg-[#34495e] text-white">
      <ul className=" flex gap-5 flex-wrap text-2xl">
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
        <Link to={"/"}>
          <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
            Home
          </li>
        </Link>
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
