import React, { useEffect, useRef, useState } from "react";
import { useGetPopularMoviesQuery } from "../redux/services/movieListApi";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { Loader } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  // * hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = useRef(1);

  // * data fetching
  const { data, isLoading, isSuccess } = useGetPopularMoviesQuery();

  // * get data globally
  const { genreNum } = useSelector((state) => state.genreSlice);

  // * get  popular movie lists from data fetching
  const popularMovieLists = data?.results;
  isSuccess && console.log(popularMovieLists);

  useEffect(() => {
    setSearchParams({ page: pageNum.current });
  }, []);

  // * looping movie lists by genre
  let filter;
  if (genreNum != 0) {
    filter = popularMovieLists?.filter((popularMovieList) =>
      popularMovieList.genre_ids.includes(genreNum)
    );
  }

  // * looping movie lists
  const looping = (genreNum == 0 ? popularMovieLists : filter)?.map(
    (popularMovieList) => (
      <MovieCard
        key={popularMovieList.id}
        {...popularMovieList}
        isLoading={isLoading}
      />
    )
  );

  // * handle functions
  const handlePaginationBtnClick = (type) => {
    if(type === "prev") {
      if (pageNum.current === 1) {
        return;
      }
      pageNum.current -= 1;
      setSearchParams({ page: pageNum.current });
    } else {
      if (pageNum.current === 10) {
        return;
      }
      pageNum.current += 1;
      setSearchParams({ page: pageNum.current });
    }
  };

  return (
    <div className="lg:max-w-[900px] lg:mx-auto p-3 md:p-5">
      {/* pagination  */}
      <div className=" mb-5 w-full flex justify-between min-[350px]:justify-start">
        <button
          onClick={()=>handlePaginationBtnClick("prev")}
          className="mr-3 w-[7rem] border-2 py-1 px-2 rounded cursor-pointer hover:card-shadow text-slate-100"
        >
          Previous
        </button>
        <button onClick={()=>handlePaginationBtnClick("next")} className="mr-3 w-[7rem] border-2 py-1 px-2 rounded cursor-pointer hover:card-shadow text-slate-100">
          Next
        </button>
      </div>

      {/* movie lists show  */}
      <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-7">
        {looping}
      </div>

      {/* pagination  */}
      <div className=" my-5 w-full flex justify-between min-[350px]:justify-end">
        <button className="mr-3 w-[7rem] border-2 py-1 px-2 rounded cursor-pointer hover:card-shadow text-slate-100">
          Previous
        </button>
        <button className="mr-3 w-[7rem] border-2 py-1 px-2 rounded cursor-pointer hover:card-shadow text-slate-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
