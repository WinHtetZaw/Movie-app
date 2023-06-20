import React, { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../redux/services/movieListApi";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import "./movieCarouselSplide.css";

const MovieCarousel = () => {
  // data fetching
  const {
    data: popularMovieListsData,
    isLoading,
    isSuccess,
  } = useGetPopularMoviesQuery();

  // states

//   get  popular movie lists from data fetching
  const popularMovieLists = popularMovieListsData?.results;
  popularMovieLists && console.log("popularMovieLists - ", popularMovieLists);

 

  return (
    <div>
      <Splide
        className=" w-[80vw] aspect-video  relative"
        options={{
            start : 0,
          gap: 30,
          arrows: true,
          perPage: 2,
          autoplay : true,
          interval : 3000,
          perMove: 1,
          focus : "center",
          drag: true,
          type: "loop",
   
          breakpoints: {
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {popularMovieLists?.map((popularMovieList, index) => (
          <SplideSlide key={index}>
            <img
              src={
                popularMovieList.poster_path
                  ? `https://image.tmdb.org/t/p/w500${popularMovieList.poster_path}`
                  : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
              }
              alt=""
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieCarousel;
