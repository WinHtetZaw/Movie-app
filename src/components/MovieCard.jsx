import React, { useEffect, useState } from "react";
import { BsExclamationCircle, BsHeart, BsHeartFill } from "react-icons/bs";
import { RingProgress } from "@mantine/core";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import "./imageCard.css";

const MovieCard = (props) => {
  // * hooks
  const [isFavorite, setIsFavorite] = useState(false);

  // * get data from props
  const { title, poster_path, name, id, release_date, vote_average, isMovie } =
    props;

  // * variables define
  const percentage = vote_average * 10;

  return (
    // <Link to={`/${isMovie ? "movie" : "tv"}/detail/${id}`}>
    //   <div className="  group flex items-center justify-center">
    //     <div className=" relative bg-[#25262b] min-w-[6rem] max-w-[230px] border border-[#fffde4] hover:card-shadow transition duration-300 rounded-lg overflow-hidden">

    //       {/* card image */}
    //       <div className=" aspect-[199/298]">
    //         <img
    //           className=" w-full h-full object-cover"
    //           src={
    //             poster_path
    //               ? `https://image.tmdb.org/t/p/w500${poster_path}`
    //               : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
    //           }
    //           alt=""
    //         />
    //       </div>

    //       <div className=" relative text-[#fffde4] px-2 pt-2 min-h-[8rem] ">
    //         {/* volt process circle  */}
    //         <div className=" absolute -top-6 left-3 w-[50px] h-[50px] bg-[#1a1b1e] rounded-full">
    //           <RingProgress
    //             rootColor="#1a1b1e"
    //             size={50}
    //             thickness={4}
    //             roundCaps
    //             sections={[{ value: percentage, color: "#0084C7" }]}
    //             label={
    //               <div className=" text-sky-600 text-sm text-center">
    //                 {percentage}%
    //               </div>
    //             }
    //           />
    //         </div>

    //         {/* title  */}
    //         <h3 className=" mb-3 pt-7 line-clamp-2 w-full text-slate-200">
    //           {title ?? name}
    //         </h3>

    //         {/* date  */}
    //         <p className=" text-sm text-white opacity-60">{release_date}</p>

    //         {/* <div className=" invisible group-hover:visible flex flex-col gap-3  ml-auto mr-5  text-lg">
    //         <div className="">
    //           {isFavorite ? (
    //             <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
    //               <BsHeartFill className=" cursor-pointer text-red-400" />
    //             </div>
    //           ) : (
    //             <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
    //               <BsHeart className=" cursor-pointer" />
    //             </div>
    //           )}
    //         </div>
    //         <Link to={`detail/${id}`}>
    //           <div className=" mt-4 bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
    //             <BsExclamationCircle className=" cursor-pointer" />
    //           </div>
    //         </Link>
    //       </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </Link>

      <div className=" p-7">
        <Link to={`/${isMovie ? "movie" : "tv"}/detail/${id}`}>
        <div className="card">
          <div className="imgBox">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
              }
              // src="https://images.unsplash.com/photo-1509221969444-c160deb7edb5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=8f6e01a936da20b1e24b431089f27130"
              alt=""
            />
          </div>
          <div className="details w-full h-full text-gray-800 p-1 xs:p-[10px] md:p-[20px]">
            {/* title  */}
            <h3 className=" py-1 xs:py-2 text-[12px] line-clamp-2 xs:text-base w-[85%]">
              {title ?? name}
            </h3>
            {/* date  */}
            <p className=" py-1 xs:py-2 text-[9px] xs:text-base w-full">
              {release_date}
            </p>

            <div className=" flex items-center gap-3">
              {/* volt progress  */}
              <div className=" py-5 hidden sm:block">
                <RingProgress
                  rootColor="transparent"
                  size={50}
                  thickness={4}
                  roundCaps
                  sections={[{ value: percentage, color: "rgb(31 41 55)" }]}
                  label={
                    <div className=" text-gray-800 text-sm text-center">
                      {percentage}%
                    </div>
                  }
                />
              </div>
              <div className=" whitespace-nowrap w-fit text-[10px] xs:text-base text-gray-800 py-[2px] xs:py-1 select-none cursor-pointer">
                Go to detail !
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
  );
};

export default MovieCard;
