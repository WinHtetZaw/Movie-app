import React, { useEffect, useState } from "react";
import { BsExclamationCircle, BsHeart, BsHeartFill } from "react-icons/bs";
import { RingProgress } from "@mantine/core";

const MovieCard = (props) => {

  // * hooks 
  const [isFavorite, setIsFavorite] = useState(false);


  // * get data from props
  const { title, poster_path, name, id, release_date, vote_average } = props;

  // * variables define
  const percentage = vote_average * 10;


  return (
    <div className="  group flex items-center justify-center">
      <div className=" relative bg-[#25262b] min-w-[8rem] max-w-[230px] border border-[#fffde4] hover:card-shadow transition duration-300 rounded-lg overflow-hidden">
        {/* card image */}
        <div className=" aspect-[199/298]">
          <img
            className=" w-full h-full object-cover"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
            }
            alt=""
          />
        </div>

        <div className=" relative text-[#fffde4] px-2 min-h-[7rem] ">
          {/* volt process circle  */}
          <div className=" absolute -top-6 left-3 w-[50px] h-[50px] bg-[#1a1b1e] rounded-full">
            <RingProgress
              rootColor="#1a1b1e"
              size={50}
              thickness={4}
              roundCaps
              sections={[{ value: percentage, color: "#0084C7" }]}
              label={
                <div className=" text-sky-600 text-sm text-center">
                  {percentage}%
                </div>
              }
            />
          </div>

          {/* title  */}
          <h3 className=" mb-3 pt-7 line-clamp-2 w-full text-slate-200">
            {title ?? name}
          </h3>

          {/* date  */}
          <p className=" text-sm text-white opacity-60">{release_date}</p>

          {/* <div className=" invisible group-hover:visible flex flex-col gap-3  ml-auto mr-5  text-lg">
            <div className="">
              {isFavorite ? (
                <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                  <BsHeartFill className=" cursor-pointer text-red-400" />
                </div>
              ) : (
                <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                  <BsHeart className=" cursor-pointer" />
                </div>
              )}
            </div>
            <Link to={`detail/${id}`}>
              <div className=" mt-4 bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                <BsExclamationCircle className=" cursor-pointer" />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
