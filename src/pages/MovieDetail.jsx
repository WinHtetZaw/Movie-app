import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailQuery } from "../redux/services/movieListApi";
import { AiOutlineEye } from "react-icons/ai";

const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  console.log(data);
  
  return (
    <div className=" relative">
      <div className="">
        <div className=" fixed top-0 z-10">
          <img
            className=" min-h-[100vh] object-cover"
            src={
              data?.backdrop_path
                ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}`
                : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
            }
            alt=""
          />
        </div>
        <div className=" z-50 flex flex-col md:flex-row absolute top-0 bg-opacity-80  bg-[#25262b] min-h-[full] w-full">
          <div className=" md:w-4/12 min-h-[400px] rounded-lg overflow-hidden p-5">
            <img
              className=" rounded-lg h-full md:h-fit w-full object-contain"
              src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
              alt=""
            />
          </div>
          <div className=" md:w-8/12 text-[#fffde4]  p-5">
            <h2 className=" ">
              <span className=" text-3xl font-semibold font-serif">
                {data?.title}
              </span>{" "}
              <br />
              <span className="opacity-90 "> - {data?.status}</span>
              <span className="opacity-90 "> - {data?.runtime} min</span>
              <span className="opacity-90 uppercase">
                {" "}
                - {data?.original_language}
              </span>
            </h2>
            <div className=" italic text-[#fffde4] opacity-70 text-sm mt-2">
              {data?.tagline}
            </div>
            <div className=" flex flex-wrap gap-2 mt-2">
              {data?.genres?.map((genre) => (
                <div
                  className=" group relative transition duration-300 py-1 px-2 rounded-sm bg-[#5BBFE9] w-fit hover:bg-[#9BE2FB] text-slate-800"
                  key={genre.id}
                >
                  <span className=" group-hover:bg-slate-800 transition duration-300 absolute w-3 h-3 rounded-full bg-my-yellow top-0 bottom-0 my-auto"></span>
                  <span className=" ml-5">{genre.name}</span>
                </div>
              ))}
            </div>
            <div className=" flex items-center gap-3 mt-3 text-[#fffde4]">
              <div className=" text-lg w-16 h-16 flex items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-40">
                {data?.vote_average.toFixed(1)}
              </div>
              {/* <div className=" flex flex-col w-16 h-16  items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-40">
                <AiOutlineEye className=" text-2xl "/>
                <span>{data?.vote_count}</span>
              </div> */}
            </div>
            <div className="">
              <h2 className=" text-lg font-semibold">Overview</h2>
              <p className=" opacity-90">{data?.overview}</p>
              <div className="tag"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
