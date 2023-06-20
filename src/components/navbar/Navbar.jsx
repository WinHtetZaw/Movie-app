import React from "react";
import { Link, NavLink } from "react-router-dom";
import Genres from "./Genres";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around z-50">
      <Link to={"/"}>
        <h3 className=" text-3xl text-slate-800 font-semibold font-serif flex flex-col text-center">
          <span>Movie</span> <span>App</span>
        </h3>
      </Link>
      <div className=" flex gap-7 ">
        <NavLink to={"/"}>
          <h3 className=" text-lg font-semibold">Home</h3>
        </NavLink>
        <NavLink to={"/movies"}>
          <h3 className=" text-lg font-semibold">Movies</h3>
        </NavLink>
        <NavLink to={"/tv-series"}>
          <h3 className=" text-lg font-semibold">Tv series</h3>
        </NavLink>
        <Genres/>
      </div>
    </div>
  );
};

export default Navbar;
