import "@lottiefiles/lottie-player";
import { Link, useLocation } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineCopyright,
} from "react-icons/ai";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
    return <></>;
  }
  return (
    <div className=" flex items-center py-10 gap-5 flex-col w-full bg-[#25262b] text-white">
      <ul className=" flex gap-5 flex-wrap text-2xl">
        <li className="logo-container group">
          <span className="logo-border" />
          <RiFacebookFill className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <AiOutlineTwitter className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <AiOutlineInstagram className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <FaTelegramPlane className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <FaLinkedinIn className="logo" />
        </li>
      </ul>
      <ul className=" font-serif flex items-center gap-3 text-sm sm:text-base sm:gap-5">
        <Link to={"/"}>
          <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
            Home
          </li>
        </Link>
        <Link to={"/movie/popular"}>
          <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
            Movie
          </li>
        </Link>
        <Link to={"/tv/popular"}>
          <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
            Tv-Series
          </li>
        </Link>
        <li className=" select-none cursor-pointer text-slate-300 hover:text-white tracking-wider">
          Help
        </li>
      </ul>
      <p className=" flex items-center text-sm sm:text-base">
        <AiOutlineCopyright className="text-lg mr-1 mb-[1px]" />
        Win Htet Zaw | All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
