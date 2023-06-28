import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../redux/services/movieListApi";
import { AiOutlineEye } from "react-icons/ai";
import { RingProgress } from "@mantine/core";
import PageLoading from "../components/PageLoading";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieDetailQuery(id);
  // console.log(data);

  // * variables define
  const percentage = data?.vote_average.toFixed(1) * 10;

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
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
          <div className=" pt-[20vh] pb-16 z-50 flex flex-col md:flex-row absolute -top-[80px] bg-opacity-80  bg-[#25262b] ">
            {/* left  */}
            <div className=" w-[200px] md:w-4/12 rounded-lg overflow-hidden p-5">
              <img
                className=" rounded h-full md:h-fit w-full object-contain max-w-[350px]"
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt=""
              />
            </div>
            {/* right  */}
            <div className=" md:w-8/12 text-slate-200 p-5">
              <div className=" py-2">
                <h1 className=" text-3xl font-semibold font-serif pb-2 ">
                  {data?.title}
                </h1>
                <div className=" pt-2">
                  <span className="opacity-90 ">{data?.status}</span>
                  <span className="opacity-90 ">
                    &nbsp;-&nbsp;{data?.runtime} min
                  </span>
                  <span className="opacity-90 uppercase">
                    &nbsp;-&nbsp;{data?.original_language}
                  </span>
                </div>
              </div>
              <div className=" font-sans italic text-slate-200 text-sm py-2">
                {data?.tagline}
              </div>
              {/* genre tags  */}
              <div className=" flex flex-wrap items-center gap-2 py-2">
                {data?.genres?.map((genre) => (
                  <div
                    className="hvr-radial-in text-sm flex items-center justify-center py-1 px-2 min-w-[6rem] rounded-sm bg-gradient-to-r from-[#005C97] to-[#1CB5E0] text-slate-800"
                    key={genre.id}
                  >
                    #{genre.name}
                  </div>
                ))}
              </div>
              {/* volt  */}
              <div className=" my-2 w-[50px] h-[50px] bg-[#1a1b1e] rounded-full">
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
              {/* Overview */}
              <div className=" font-1 py-2 tracking-[0.15rem]">
                <h2 className=" text-lg font-semibold mb-3 tracking-[0.2rem]">
                  Overview
                </h2>
                <p className=" font-sans text-slate-200">{data?.overview}</p>
                <div className="tag"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
