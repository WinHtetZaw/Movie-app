import React from "react";

const HomeCard = () => {
  return (
    <div className=" text-[#cccccc] bg-white bg-opacity-10 w-[90%] h-[400px] rounded-lg my-5 mx-auto">
      <div className=" flex justify-between items-center px-5">
        <h1 className=" capitalize font-serif font-extrabold">Movie app</h1>

        <div className=" flex gap-5">
          <p>Movies</p>
          <p>Tv Series</p>

          <button className=" flex gap-1">
            <div>Sign in</div>
            <span>/</span>
            <div>Sign up</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
