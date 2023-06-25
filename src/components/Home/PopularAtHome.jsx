import { useEffect, useRef, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import { Footer } from "@mantine/core";

const PopularAtHome = () => {
  // * data fetching
  const { data: popularMovieListsData, isLoading } = useGetPopularMoviesQuery();
  const { data: popularTvSeriesListsData } = useGetPopularTvSeriesQuery();

  // * hooks
  const [isMovie, setIsMovie] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // * get  popular movie lists from data fetching
  const popularMovieLists = popularMovieListsData?.results;
  // popularMovieLists && console.log("popularMovieLists - ", popularMovieLists);

  // * get  popular tv-series lists from data fetching
  const popularTvSeriesLists = popularTvSeriesListsData?.results;
  // popularTvSeriesLists &&
  //   console.log("popularTvSeriesLists - ", popularTvSeriesLists);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // * looping movie lists
  const popularMovieListsLooping = popularMovieLists?.map(
    (popularMovieList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            popularMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {popularMovieList.title}
        </h2>
        <p className=" text-slate-400">{popularMovieList.release_date}</p>
      </div>
    )
  );

  // looping tv series lists
  const popularTvSeriesListsLooping = popularTvSeriesLists?.map(
    (popularTvSeriesList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            popularTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {popularTvSeriesList.name}
        </h2>
        <p className=" text-slate-400">{popularTvSeriesList.release_date}</p>
      </div>
    )
  );
  return (
    <div className="bg-dark-1 px-3 md:px-7 py-10">
      <div className="">
        <div className=" flex gap-2 sm:gap-5 items-center text-xl font-semibold mb-5">
          <h2 className=" text-lg sm:text-xl whitespace-nowrap">Popular : </h2>
          <button
            onClick={() => setIsMovie(true)}
            className={`font-sans relative w-[7rem] flex items-center bg-gradient-to-r from-[#005C97] to-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300  ${
              isMovie && "hover:card-shadow"
            }`}
          >
            <span
              className={`${
                !isMovie ? " opacity-0" : "opacity-100"
              } w-3 h-3 bg-[#E0AB18] rounded-full transition duration-300 absolute top-0 bottom-0 my-auto left-3`}
            ></span>
            <span className=" w-full h-full text-center">Movie</span>
          </button>
  
          <button
            onClick={() => setIsMovie(false)}
            className={`font-sans relative w-[8rem] bg-gradient-to-r from-[#005C97] to-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300  ${
              isMovie && "hover:card-shadow"
            }`}
          >
            <span
              className={`${
                isMovie ? " opacity-0" : "opacity-100"
              } w-3 h-3 bg-[#E0AB18] rounded-full transition duration-300 absolute top-0 bottom-0 my-auto left-3`}
            ></span>
            <span className="w-full h-full text-center">Tv series</span>
          </button>
          {/* <div className="flex gap-3 items-center bg-blue-600 w-[7rem] px-3 py-2 ">
            <span className=" w-4 h-4 rounded-full bg-red-500"></span>
            <span className=" text-white">Click</span>
          </div> */}
        </div>
      </div>
      {windowWidth > 640 ? (
        <div className=" popularAtHome overflow-x-scroll flex gap-7 pb-5">
          {isMovie ? popularMovieListsLooping : popularTvSeriesListsLooping}
        </div>
      ) : (
        <div className="">
          <SliderCarousel
            movieLists={popularMovieLists}
            tvSeriesLists={popularTvSeriesLists}
            isMovie={isMovie}
          />
        </div>
      )}
    </div>
  );
};

export default PopularAtHome;
