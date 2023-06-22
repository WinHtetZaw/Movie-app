import { Input } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import DropDownBtn from "../DropDownBtn";
import { useGetTrendingMoviesQuery } from "../../redux/services/movieListApi";
import { useGetTrendingTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";

const TrendingAtHome = () => {
  // * hooks
  const [type, setType] = useState("movie");
  const [choseTime, setChoseTime] = useState("day");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isChoseTimeOpen, setIsChoseTimeOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // * data fetching
  const {
    data: trendingMovieListsData,
    isLoading: isTrendingMovieListsDataLoading,
    isError,
  } = useGetTrendingMoviesQuery(choseTime);

  const {
    data: trendingTvSeriesListsData,
    isLoading: isTrendingTvSeriesListsDataLoading,
  } = useGetTrendingTvSeriesQuery(choseTime);

  // * get  trending movie lists from data fetching
  const trendingMovieLists = trendingMovieListsData?.results;
  trendingMovieLists &&
    console.log("trendingMovieLists - ", trendingMovieLists);

  // * get trending tv-series lists from data fetching
  const trendingTvSeriesLists = trendingTvSeriesListsData?.results;
  trendingTvSeriesLists &&
    console.log("trendingTvSeriesLists - ", trendingTvSeriesLists);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // * handle functions
  const handleTypeClick = (clickType) => {
    setType(clickType);
    setIsTypeOpen(false);
  };

  const handleChoseTimeClick = (chose) => {
    setChoseTime(chose);
    setIsChoseTimeOpen(false);
  };

  // * looping movie lists
  const trendingMovieListsLooping = trendingMovieLists?.map(
    (trendingMovieList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            trendingMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {trendingMovieList.title}
        </h2>
        <p className=" text-slate-400">{trendingMovieList.release_date}</p>
      </div>
    )
  );

  // * looping tv series lists
  const trendingTvSeriesListsLooping = trendingTvSeriesLists?.map(
    (trendingTvSeriesList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            trendingTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {trendingTvSeriesList.name}
        </h2>
        <p className=" text-slate-400">{trendingTvSeriesList.release_date}</p>
      </div>
    )
  );

  return (
    <div>
      <div className="bg-dark-1 px-3 md:px-7 py-10">
        <div className="">
          <div className=" flex gap-2 sm:gap-5 items-center font-semibold mb-5">
            <h1 className="text-lg sm:text-xl whitespace-nowrap">Trending : </h1>

            {/* Movie or Tv series choose button */}
            <div className="relative hover:card-shadow text-left w-[7rem]">
              <button
                disabled={isTrendingMovieListsDataLoading}
                onClick={() => {
                  setIsTypeOpen(!isTypeOpen);
                  setIsChoseTimeOpen(false);
                }}
                type="button"
                className="inline-flex w-full disabled:opacity-60 justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-2 ring-white ring-inset "
              >
                {type === "movie" ? "Movie" : "Tv series"}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown area  */}
              <div
                className={` ${
                  isTypeOpen ? "block" : "hidden"
                } absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className="px-2 py-3  rounded bg-dark-4 text-slate-200 border border-[#fffde4]">
                  <button
                    value={"movie"}
                    onClick={(e) => handleTypeClick(e.target.value)}
                    className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                  >
                    Movie
                  </button>
                  <button
                    value={"tv"}
                    onClick={(e) => handleTypeClick(e.target.value)}
                    className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                  >
                    Tv series
                  </button>
                </div>
              </div>
            </div>

            {/* day or week choose button */}
            <div className="relative hover:card-shadow text-left w-[7rem]">
              <button
                disabled={isTrendingTvSeriesListsDataLoading}
                onClick={() => {
                  setIsChoseTimeOpen(!isChoseTimeOpen);
                  setIsTypeOpen(false);
                }}
                type="button"
                className="inline-flex w-full disabled:opacity-60 justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-2 ring-white ring-inset "
              >
                {choseTime === "day" ? "Today" : "This week"}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown area  */}
              <div
                className={` ${
                  isChoseTimeOpen ? "block" : "hidden"
                } absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className="px-2 py-3  rounded bg-dark-4 text-slate-200 border border-[#fffde4]">
                  <button
                    value={"day"}
                    onClick={(e) => handleChoseTimeClick(e.target.value)}
                    className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                  >
                    Today
                  </button>
                  <button
                    value={"week"}
                    onClick={(e) => handleChoseTimeClick(e.target.value)}
                    className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                  >
                    This week
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        {windowWidth > 640 ? (
          <div className=" popularAtHome overflow-x-scroll flex gap-7 pb-5">
            {type === "movie"
              ? trendingMovieListsLooping
              : trendingTvSeriesListsLooping}
          </div>
        ) : (
          <div className="">
            <SliderCarousel
              movieLists={trendingMovieLists}
              tvSeriesLists={trendingTvSeriesLists}
              isMovie={type === "movie" ? true : false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingAtHome;
