import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SliderCarousel = ({
  movieLists,
  tvSeriesLists,
  isMovie,
  setActiveItem,
}) => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0); // Initialize with the first item
  const activeUrl = useRef(null);
  const splideRef = useRef(null);

  useEffect(() => {
    setActiveItem(activeUrl.current);

    // https://image.tmdb.org/t/p/original/${activeUrl.current}
  }, [activeItemIndex, setActiveItem, activeUrl]);

  return (
    <div>
      <Splide
        onActive={(a) => {
          setActiveItemIndex(a.index);
        }}
        ref={splideRef}
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
          },
        }}
      >
        {(isMovie ? movieLists : tvSeriesLists)?.map((list, index) => {
          if (index === activeItemIndex) {
            activeUrl.current = list;
          }
          return (
            <SplideSlide
              onMouseEnter={() => {
                setActiveItem(list);
              }}
              key={index}
            >
              <img
                onClick={() =>
                  navigate(`/${isMovie ? "movie" : "tv"}/detail/${list.id}`)
                }
                className=" rounded cursor-pointer"
                src={
                  list.poster_path
                    ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                    : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
                }
                alt={list.title ?? list.name}
              />
              <h2 className=" w-full truncate mt-5">
                {list.name ?? list.title}
              </h2>
              <p className=" text-slate-400 text-sm">{list.release_date}</p>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default SliderCarousel;
