import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "@lottiefiles/lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import HomeSlide from "./HomeSlide";
import HomeLoading from "./HomeLoading";
import { useNavigate } from "react-router-dom";

const HomeFullSlide = () => {
  // * data fetching
  const { data: popularMovieListsData, isLoading } = useGetPopularMoviesQuery();
  const { data: popularTvSeriesListsData } = useGetPopularTvSeriesQuery();

  // * hooks
  const [isMovie, setIsMovie] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");
  const [hoverObj, setHoverObj] = useState({});
  const navigate = useNavigate();

  // * get  popular movie lists from data fetching
  const popularMovieLists = popularMovieListsData?.results;

  // * get  popular tv-series lists from data fetching
  const popularTvSeriesLists = popularTvSeriesListsData?.results;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative bg-slate-700 min-h-screen py-10">
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
          {(isMovie ? popularMovieLists : popularTvSeriesLists)?.map(
            (list, index) => (
              <>
                {/* <HomeSlide hoverObj={hoverObj} /> */}
                <div className=""></div>
                <SplideSlide
                  onMouseEnter={() => {
                    setImgUrl(
                      `https://image.tmdb.org/t/p/original/${list.backdrop_path}`
                    );
                    setHoverObj(list);
                  }}
                  key={index}
                >
                  <div className=" absolute inset-0 z-10 w-[500px] aspect-square">
                    <img className=" w-full h-full" src={list.backdrop_path} />
                  </div>

                  <img
                    onClick={() => navigate(`/movie/detail/${list.id}`)}
                    className=" rounded cursor-pointer"
                    src={
                      list.poster_path
                        ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                        : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
                    }
                    alt=""
                  />
                  <h2 className=" w-full truncate mt-5">
                    {list.name ?? list.title}
                  </h2>
                  <p className=" text-slate-400 text-sm">{list.release_date}</p>
                </SplideSlide>
              </>
            )
          )}
        </Splide>
      </div>
    </>
  );
};

export default HomeFullSlide;
