import React from "react";
import { Link, NavLink } from "react-router-dom";
import Genres from "./Genres";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around z-50 h-full text-slate-200">
      <Link to={"/"}>
        <h3 className=" text-2xl text-slate-200 py-1 px-2 font-semibold font-serif hover:text-neon">
          Movie app
        </h3>
      </Link>
      <div className=" flex gap-7 ">
        <NavLink to={"/"}>
          <h3 className=" text-lg font-semibold transition duration-300">Home</h3>
        </NavLink>
        <NavLink to={"/movies"}>
          <h3 className=" text-lg font-semibold transition duration-300">Movies</h3>
        </NavLink>
        <NavLink to={"/tv-series"}>
          <h3 className=" text-lg font-semibold transition duration-300">Tv series</h3>
        </NavLink>
        <Genres/>
      </div>
    </div>
  );
};

export default Navbar;
