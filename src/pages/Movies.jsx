import React from "react";
import { useGetPopularMoviesQuery } from "../redux/services/movieListApi";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { Loader } from "@mantine/core";
import PaginationMui from "../components/PaginationMui";

const Movies = () => {
  // data fetching
  const { data, isLoading, isSuccess } = useGetPopularMoviesQuery();

  // get data globally
  const { genreNum } = useSelector((state) => state.genreSlice);

  // get  popular movie lists from data fetching
  const popularMovieLists = data?.results;
  isSuccess && console.log(popularMovieLists);

 // looping movie lists by genre
  let filter;
  if (genreNum != 0) {
    filter = popularMovieLists?.filter((popularMovieList) =>
      popularMovieList.genre_ids.includes(genreNum)
    );
  }

  // looping movie lists
  const looping = (genreNum == 0 ? popularMovieLists : filter)?.map(
    (popularMovieList) => (
      <MovieCard key={popularMovieList.id} {...popularMovieList} isLoading={isLoading} />
    )
  );

  return (
    <>
      <PaginationMui />
      <div className=" flex flex-wrap justify-center items-center gap-5 md:gap-10 p-5">
        <div
          className={`${
            isLoading ? "flex" : "hidden"
          } absolute w-full top-0 h-screen justify-center items-center`}
        >
          <Loader size={50} color="#FFFDE4" />
        </div>
        {looping}
        {/* <div className="relative h-[300px] bg-blue-200 w-[200px] overflow-hidden">
        <span className=" top-[50px] absolute w-full h-full bg-gradient-to-b from-transparent to-black"></span>
      </div> */}
      </div>
    </>
  );
};

export default Movies;
