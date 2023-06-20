import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BsExclamationCircle, BsHeart, BsHeartFill } from "react-icons/bs";

const MovieCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, backdrop_path, name, id } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: 1 });
  }, []);

  return (
    <div className=" relative group max-w-[300px]">
      <div className=" bg-[#25262b] border border-[#fffde4] rounded-lg overflow-hidden">
        {/* image */}
        <div className="">
          <img
            className=" max-h-[168px] w-[299px] object-cover"
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
            }
            alt=""
          />
        </div>

        {/* title  */}
        <div className="  text-[#fffde4] h-24 flex ">
          <Link to={"detail/3"}>
            <h3 className=" ml-5 my-5 line-clamp-2 mx-auto  text-center">
              {title ?? name}
            </h3>
          </Link>
          <div className=" invisible group-hover:visible flex flex-col gap-3  ml-auto mr-5  text-lg">
            {/* <div className="">
              {isFavorite ? (
                <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                  <BsHeartFill className=" cursor-pointer text-red-400" />
                </div>
              ) : (
                <div className=" bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                  <BsHeart className=" cursor-pointer" />
                </div>
              )}
            </div> */}
            <Link to={`detail/${id}`}>
              <div className=" mt-4 bg-[#fffde4] bg-opacity-[0.15] hover:bg-opacity-25 p-2 rounded-full">
                <BsExclamationCircle className=" cursor-pointer" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
