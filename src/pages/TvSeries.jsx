import React, { useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { useGetPopularTvSeriesQuery } from "../redux/services/tvSeriesApi";

const TvSeries = () => {
  // data fetching
  const { data, isSuccess, isLoading } = useGetPopularTvSeriesQuery();

  // get data globally
  const { genreNum } = useSelector((state) => state.genreSlice);

  // get  popular tv-series lists from data fetching
  const popularTvSeriesLists = data?.results;
  isSuccess && console.log(popularTvSeriesLists);

  // looping tv-seres lists by genre
  let filterByGenre;
  if (genreNum != 0) {
    filterByGenre = popularTvSeriesLists?.filter((popularTvSeriesList) =>
      popularTvSeriesList.genre_ids.includes(genreNum)
    );
  }
  const filteredLooping = filterByGenre?.map((popularTvSeriesList) => (
    <MovieCard key={popularTvSeriesList.id} {...popularTvSeriesList} />
  ));

  // looping tv-seres lists
  const looping = (genreNum == 0 ? popularTvSeriesLists : filterByGenre)?.map(
    (popularTvSeriesList) => (
      <MovieCard key={popularTvSeriesList.id} {...popularTvSeriesList} />
    )
  );

  return (
    <div className=" flex flex-wrap justify-center gap-7">
      {genreNum == 0 ? looping : filteredLooping}
    </div>
  );
};

export default TvSeries;
