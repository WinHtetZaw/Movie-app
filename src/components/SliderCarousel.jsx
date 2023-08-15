import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";

const SliderCarousel = ({
  movieLists,
  tvSeriesLists,
  isMovie,
  setImgUrl,
  setHoverObj,
}) => {
  return (
    <div>
      <Splide
        className=" relative"
        options={{
          autoplay: true,
          interval: 2000,
          gap: 20,
          arrows: true,
          perPage: 6,
          perMove: 1,
          drag: true,
          type: "loop",
          breakpoints: {
            400: {
              gap: 10,
              perPage: 3,
            },
            640: {
              perPage: 4,
            },
            // 1024: {
            //   perPage: 7,
            // },
          },
        }}
      >
        {(isMovie ? movieLists : tvSeriesLists)?.map((list, index) => (
          <SplideSlide
            onMouseEnter={() => {
              setImgUrl(
                `https://image.tmdb.org/t/p/original/${list.backdrop_path}`
              );
              setHoverObj(list);
            }}
            key={index}
          >
            <img
              className=" rounded"
              src={
                list.poster_path
                  ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                  : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
              }
              alt=""
            />
            <h2 className=" w-full truncate mt-5">{list.name ?? list.title}</h2>
            <p className=" text-slate-400 text-sm">{list.release_date}</p>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderCarousel;
