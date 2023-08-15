import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "@lottiefiles/lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import HomeSlide from "./HomeSlide";
import HomeLoading from "./HomeLoading";

const PopularAtHome = () => {
  // * data fetching
  const { data: popularMovieListsData, isLoading } = useGetPopularMoviesQuery();
  const { data: popularTvSeriesListsData } = useGetPopularTvSeriesQuery();

  // * hooks
  const [isMovie, setIsMovie] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");
  const [hoverObj, setHoverObj] = useState({});

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

  // * animation
  const parentVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, delayChildren: 0.3 } },
  };

  const imgVariant = {
    hidden: { scale: 0.8 },
    show: { scale: 1, transition: { duration: 0.5 } },
  };

  const textVariant = {
    hidden: { y: 10 },
    show: { y: 0, transition: { duration: 0.5 } },
  };

  const choiceVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, ease: "easeIn" } },
  };

  // * looping movie lists
  const popularMovieListsLooping = popularMovieLists?.map(
    (popularMovieList, index) => (
      <div
        onMouseEnter={() => {
          setImgUrl(
            `https://image.tmdb.org/t/p/original/${popularMovieList.backdrop_path}`
          );
        }}
        className="font-1 min-w-[200px] my-yellow"
        key={index}
      >
        <motion.img
          variants={imgVariant}
          className=" rounded mb-5"
          src={
            popularMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <motion.h2
          variants={textVariant}
          className=" w-full line-clamp-2 text-slate-50"
        >
          {popularMovieList.title}
        </motion.h2>
        <motion.p variants={textVariant} className=" text-slate-500">
          {popularMovieList.release_date}
        </motion.p>
      </div>
    )
  );

  // looping tv series lists
  const popularTvSeriesListsLooping = popularTvSeriesLists?.map(
    (popularTvSeriesList, index) => (
      <div
        onMouseEnter={() => {
          setImgUrl(
            `https://image.tmdb.org/t/p/original/${popularTvSeriesList.backdrop_path}`
          );
        }}
        className=" font-1 min-w-[200px] my-yellow"
        key={index}
      >
        <motion.img
          variants={imgVariant}
          className=" rounded mb-5"
          src={
            popularTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <motion.h2
          variants={textVariant}
          className=" w-full line-clamp-2 text-slate-50"
        >
          {popularTvSeriesList.name}
        </motion.h2>
        <motion.p variants={textVariant} className=" text-slate-400">
          {popularTvSeriesList.release_date ??
            popularTvSeriesList.first_air_date}
        </motion.p>
      </div>
    )
  );

  return (
    <>
      {isLoading || !popularMovieLists ? (
        <div className="mt-[80px] p-5 w-full">
          <HomeLoading />
        </div>
      ) : (
        <motion.div
          variants={parentVariant}
          initial="hidden"
          animate="show"
          style={
            imgUrl
              ? { backgroundImage: `url(${imgUrl})` }
              : {
                  backgroundImage:
                    "linear-gradient(\n        116deg,\n        rgba(232, 232, 232, 0.03) 0%,\n        rgba(232, 232, 232, 0.03) 10%,\n        rgba(14, 14, 14, 0.03) 10%,\n        rgba(14, 14, 14, 0.03) 66%,\n        rgba(232, 232, 232, 0.03) 66%,\n        rgba(232, 232, 232, 0.03) 72%,\n        rgba(44, 44, 44, 0.03) 72%,\n        rgba(44, 44, 44, 0.03) 81%,\n        rgba(51, 51, 51, 0.03) 81%,\n        rgba(51, 51, 51, 0.03) 100%\n      ),\n      linear-gradient(\n        109deg,\n        rgba(155, 155, 155, 0.03) 0%,\n        rgba(155, 155, 155, 0.03) 23%,\n        rgba(30, 30, 30, 0.03) 23%,\n        rgba(30, 30, 30, 0.03) 63%,\n        rgba(124, 124, 124, 0.03) 63%,\n        rgba(124, 124, 124, 0.03) 73%,\n        rgba(195, 195, 195, 0.03) 73%,\n        rgba(195, 195, 195, 0.03) 84%,\n        rgba(187, 187, 187, 0.03) 84%,\n        rgba(187, 187, 187, 0.03) 100%\n      ),\n      linear-gradient(\n        79deg,\n        rgba(254, 254, 254, 0.03) 0%,\n        rgba(254, 254, 254, 0.03) 27%,\n        rgba(180, 180, 180, 0.03) 27%,\n        rgba(180, 180, 180, 0.03) 33%,\n        rgba(167, 167, 167, 0.03) 33%,\n        rgba(167, 167, 167, 0.03) 34%,\n        rgba(68, 68, 68, 0.03) 34%,\n        rgba(68, 68, 68, 0.03) 63%,\n        rgba(171, 171, 171, 0.03) 63%,\n        rgba(171, 171, 171, 0.03) 100%\n      ),\n      linear-gradient(\n        109deg,\n        rgba(71, 71, 71, 0.03) 0%,\n        rgba(71, 71, 71, 0.03) 3%,\n        rgba(97, 97, 97, 0.03) 3%,\n        rgba(97, 97, 97, 0.03) 40%,\n        rgba(40, 40, 40, 0.03) 40%,\n        rgba(40, 40, 40, 0.03) 55%,\n        rgba(5, 5, 5, 0.03) 55%,\n        rgba(5, 5, 5, 0.03) 73%,\n        rgba(242, 242, 242, 0.03) 73%,\n        rgba(242, 242, 242, 0.03) 100%\n      ),\n      linear-gradient(\n        271deg,\n        rgba(70, 70, 70, 0.03) 0%,\n        rgba(70, 70, 70, 0.03) 11%,\n        rgba(178, 178, 178, 0.03) 11%,\n        rgba(178, 178, 178, 0.03) 23%,\n        rgba(28, 28, 28, 0.03) 23%,\n        rgba(28, 28, 28, 0.03) 72%,\n        rgba(152, 152, 152, 0.03) 72%,\n        rgba(152, 152, 152, 0.03) 86%,\n        rgba(43, 43, 43, 0.03) 86%,\n        rgba(43, 43, 43, 0.03) 100%\n      ),\n      linear-gradient(90deg, rgb(27, 27, 27), rgb(1, 1, 1))",
                }
          }
          className={`relative min-h-[110vh] transition-all duration-300 filter bg-no-repeat bg-cover bg-center`}
        >
          <div className=" min-h-[110vh] h-full pt-[80px] flex flex-col justify-between bg-black bg-opacity-40 text-[#cccccc] px-3 md:px-7 py-10">
            <HomeSlide hoverObj={hoverObj} />

            <section>
              <div className=" flex gap-2 items-center mb-5">
                <h2>Popular :</h2>

                {/* movie or tv option   */}
                <button
                  className="relative w-fit h-[40px]"
                  onMouseOver={() => setIsOpened(true)}
                  onMouseLeave={() => setIsOpened(false)}
                >
                  <div className="flex items-center gap-1 w-[7rem]">
                    <span className=" select-none cursor-pointer">
                      {isMovie ? "Movie" : "Tv Series"}
                    </span>
                    <MdOutlineKeyboardArrowDown
                      className={`${
                        isOpened && "-rotate-180"
                      } text-xl transition duration-150 mt-1`}
                    />
                  </div>
                  {/* drop area  */}
                  <AnimatePresence>
                    {isOpened && (
                      <motion.div
                        variants={choiceVariant}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        className="font-1 origin-top absolute bg-glass-1 -right-[4rem]  z-10 py-3 px-2 mt-2 w-44 text-slate-800 rounded shadow-lg ring-1 ring-[#cccccc] ring-opacity-50  focus:outline-none"
                      >
                        <p
                          onClick={() => setIsMovie(true)}
                          className="hover:bg-black text-start hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3 border-b border-gray-400"
                        >
                          Movie
                        </p>
                        <p
                          onClick={() => setIsMovie(false)}
                          className="hover:bg-black text-start hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3"
                        >
                          Tv series
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* slider  */}
              <div>
                <SliderCarousel
                  setHoverObj={setHoverObj}
                  setImgUrl={setImgUrl}
                  movieLists={popularMovieLists}
                  tvSeriesLists={popularTvSeriesLists}
                  isMovie={isMovie}
                />
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PopularAtHome;
