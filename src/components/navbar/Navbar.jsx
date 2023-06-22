import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Genres from "./Genres";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" w-full flex items-center z-50 h-full text-slate-200">
      <Link to={"/"}>
        <h3 className=" text-2xl text-slate-200 py-1 px-2 font-semibold font-serif hover:text-neon">
          Movie app
        </h3>
      </Link>
      <div className=" hidden sm:flex items-center ml-auto gap-7 mr-5">
        <NavLink to={"/"}>
          <h3 className=" text-lg font-semibold transition duration-300">
            Home
          </h3>
        </NavLink>

        <NavLink
          to={{
            pathname: "/movies",
            state: { page: 1 },
          }}
        >
          <h3 className=" text-lg font-semibold transition duration-300">
            Movies
          </h3>
        </NavLink>

        <NavLink to={"/tv-series"}>
          <h3 className=" text-lg font-semibold transition duration-300">
            Tv series
          </h3>
        </NavLink>

        <Genres />
      </div>
      {/* burger menu  */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`menu ${isMenuOpen && "opened"} w-9 h-9 ml-auto sm:hidden`}
      >
        <svg className=" w-full h-full" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
