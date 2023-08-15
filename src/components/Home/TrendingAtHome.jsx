import { useEffect, useState } from "react";
import { useGetTrendingMoviesQuery } from "../../redux/services/movieListApi";
import { useGetTrendingTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import "@lottiefiles/lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import HomeSlide from "./HomeSlide";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeLoading from "./HomeLoading";

const TrendingAtHome = () => {
  // * hooks
  const [type, setType] = useState("movie");
  const [choseTime, setChoseTime] = useState("day");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isChoseTimeOpen, setIsChoseTimeOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");
  const [hoverObj, setHoverObj] = useState({});

  // * data fetching
  const {
    data: trendingMovieListsData,
    isLoading,
    isError,
  } = useGetTrendingMoviesQuery(choseTime);

  const {
    data: trendingTvSeriesListsData,
    isLoading: isTrendingTvSeriesListsDataLoading,
    isSuccess,
  } = useGetTrendingTvSeriesQuery(choseTime);

  // * get  trending movie lists from data fetching
  const trendingMovieLists = trendingMovieListsData?.results;
  // trendingMovieLists &&
  //   console.log("trendingMovieLists --- ", trendingMovieLists);

  // * get trending tv-series lists from data fetching
  const trendingTvSeriesLists = trendingTvSeriesListsData?.results;
  // trendingTvSeriesLists &&
  //   console.log("trendingTvSeriesLists --- ", trendingTvSeriesLists);

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
  const trendingMovieListsLooping = trendingMovieLists?.map(
    (trendingMovieList, index) => (
      <div
        onMouseEnter={() => {
          setImgUrl(
            `https://image.tmdb.org/t/p/original/${trendingMovieList.backdrop_path}`
          );
        }}
        // onMouseEnter={()=>console.dir(bgRef.current.childNodes[0].attributes[1].value)}
        className="font-1 min-w-[200px] my-yellow"
        key={index}
      >
        <motion.img
          variants={imgVariant}
          className=" rounded mb-5"
          src={
            trendingMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <motion.h2
          variants={textVariant}
          className=" w-full line-clamp-2 text-slate-50"
        >
          {trendingMovieList.title}
        </motion.h2>
        <motion.p variants={textVariant} className=" text-slate-400">
          {trendingMovieList.release_date}
        </motion.p>
      </div>
    )
  );

  // * looping tv series lists
  const trendingTvSeriesListsLooping = trendingTvSeriesLists?.map(
    (trendingTvSeriesList, index) => (
      <div
        onMouseEnter={() => {
          setImgUrl(
            `https://image.tmdb.org/t/p/original/${trendingTvSeriesList.backdrop_path}`
          );
        }}
        className=" min-w-[200px] my-yellow"
        key={index}
      >
        <motion.img
          variants={imgVariant}
          className=" rounded mb-5"
          src={
            trendingTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <motion.h2
          variants={textVariant}
          className=" w-full line-clamp-2 text-slate-50"
        >
          {trendingTvSeriesList.name}
        </motion.h2>
        <motion.p variants={textVariant} className=" text-slate-400">
          {trendingTvSeriesList.release_date}
        </motion.p>
      </div>
    )
  );

  return (
    <>
      {isLoading || !trendingTvSeriesLists ? (
        <div className="mt-[80px] p-5 w-full">
          <HomeLoading />
        </div>
      ) : (
        <motion.div
          variants={parentVariant}
          initial="hidden"
          animate="show"
          exit="exit"
          style={
            imgUrl
              ? { backgroundImage: `url(${imgUrl})` }
              : {
                  backgroundImage:
                    "linear-gradient(\n        116deg,\n        rgba(232, 232, 232, 0.03) 0%,\n        rgba(232, 232, 232, 0.03) 10%,\n        rgba(14, 14, 14, 0.03) 10%,\n        rgba(14, 14, 14, 0.03) 66%,\n        rgba(232, 232, 232, 0.03) 66%,\n        rgba(232, 232, 232, 0.03) 72%,\n        rgba(44, 44, 44, 0.03) 72%,\n        rgba(44, 44, 44, 0.03) 81%,\n        rgba(51, 51, 51, 0.03) 81%,\n        rgba(51, 51, 51, 0.03) 100%\n      ),\n      linear-gradient(\n        109deg,\n        rgba(155, 155, 155, 0.03) 0%,\n        rgba(155, 155, 155, 0.03) 23%,\n        rgba(30, 30, 30, 0.03) 23%,\n        rgba(30, 30, 30, 0.03) 63%,\n        rgba(124, 124, 124, 0.03) 63%,\n        rgba(124, 124, 124, 0.03) 73%,\n        rgba(195, 195, 195, 0.03) 73%,\n        rgba(195, 195, 195, 0.03) 84%,\n        rgba(187, 187, 187, 0.03) 84%,\n        rgba(187, 187, 187, 0.03) 100%\n      ),\n      linear-gradient(\n        79deg,\n        rgba(254, 254, 254, 0.03) 0%,\n        rgba(254, 254, 254, 0.03) 27%,\n        rgba(180, 180, 180, 0.03) 27%,\n        rgba(180, 180, 180, 0.03) 33%,\n        rgba(167, 167, 167, 0.03) 33%,\n        rgba(167, 167, 167, 0.03) 34%,\n        rgba(68, 68, 68, 0.03) 34%,\n        rgba(68, 68, 68, 0.03) 63%,\n        rgba(171, 171, 171, 0.03) 63%,\n        rgba(171, 171, 171, 0.03) 100%\n      ),\n      linear-gradient(\n        109deg,\n        rgba(71, 71, 71, 0.03) 0%,\n        rgba(71, 71, 71, 0.03) 3%,\n        rgba(97, 97, 97, 0.03) 3%,\n        rgba(97, 97, 97, 0.03) 40%,\n        rgba(40, 40, 40, 0.03) 40%,\n        rgba(40, 40, 40, 0.03) 55%,\n        rgba(5, 5, 5, 0.03) 55%,\n        rgba(5, 5, 5, 0.03) 73%,\n        rgba(242, 242, 242, 0.03) 73%,\n        rgba(242, 242, 242, 0.03) 100%\n      ),\n      linear-gradient(\n        271deg,\n        rgba(70, 70, 70, 0.03) 0%,\n        rgba(70, 70, 70, 0.03) 11%,\n        rgba(178, 178, 178, 0.03) 11%,\n        rgba(178, 178, 178, 0.03) 23%,\n        rgba(28, 28, 28, 0.03) 23%,\n        rgba(28, 28, 28, 0.03) 72%,\n        rgba(152, 152, 152, 0.03) 72%,\n        rgba(152, 152, 152, 0.03) 86%,\n        rgba(43, 43, 43, 0.03) 86%,\n        rgba(43, 43, 43, 0.03) 100%\n      ),\n      linear-gradient(90deg, rgb(27, 27, 27), rgb(1, 1, 1))",
                }
          }
          className={`relative min-h-[110vh] h-full transition-all duration-300 filter bg-no-repeat bg-cover bg-center`}
        >
          <div className="min-h-[110vh] h-full flex flex-col justify-between bg-black bg-opacity-40 text-[#cccccc] px-3 md:px-7 py-10">
            <HomeSlide hoverObj={hoverObj} />

            {/* <div className=" bg-black bg-opacity-40 px-3 md:px-7 py-10"> */}
            <section>
              <div className=" flex gap-2 items-center mb-5">
                <h1 className=" whitespace-nowrap">Trending :</h1>

                {/* Movie or Tv series choose button */}
                <button
                  disabled={isLoading}
                  onMouseOver={() => {
                    setIsTypeOpen(true);
                    setIsChoseTimeOpen(false);
                  }}
                  onMouseLeave={() => setIsTypeOpen(false)}
                  className=" relative h-[40px] w-[7rem]"
                >
                  <div className="inline-flex items-center justify-center w-full gap-1">
                    <span className=" select-none cursor-pointer">
                      {type === "movie" ? "Movie" : "Tv series"}
                    </span>
                    <MdOutlineKeyboardArrowDown
                      className={`${
                        isTypeOpen && "-rotate-180"
                      } text-xl transition duration-150 mt-1`}
                    />
                  </div>

                  {/* Dropdown area  */}
                  <AnimatePresence>
                    {isTypeOpen && (
                      <motion.div
                        variants={choiceVariant}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        className={`font-1 absolute bg-glass-1 left-0 z-10 mt-2 w-56 origin-top-right rounded shadow-lg ring-1 ring-[#fffde4] ring-opacity-50 focus:outline-none`}
                      >
                        <div className="px-2 py-3  text-slate-700">
                          <button
                            value={"movie"}
                            onClick={(e) => handleTypeClick(e.target.value)}
                            className="hover:bg-black hover:bg-opacity-[0.15] hover:rounded transition duration-300 py-3 px-2 block w-full text-left cursor-pointer border-b border-gray-400 last:border-none"
                          >
                            Movie
                          </button>
                          <button
                            value={"tv"}
                            onClick={(e) => handleTypeClick(e.target.value)}
                            className="hover:bg-black hover:bg-opacity-[0.15] hover:rounded transition duration-300 py-3 px-2 block w-full text-left cursor-pointer border-b border-gray-400 last:border-none"
                          >
                            Tv series
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* day or week choose button */}
                <button
                  disabled={isTrendingTvSeriesListsDataLoading}
                  onMouseOver={() => {
                    setIsChoseTimeOpen(true);
                    setIsTypeOpen(false);
                  }}
                  onMouseLeave={() => setIsChoseTimeOpen(false)}
                  className="relative h-[40px] w-[7rem]"
                >
                  <div className="inline-flex items-center justify-center w-full gap-1">
                    <span className=" select-none cursor-pointer">
                      {choseTime === "day" ? "Today" : "This week"}
                    </span>
                    <MdOutlineKeyboardArrowDown
                      className={`${
                        isChoseTimeOpen && "-rotate-180"
                      } text-xl transition duration-150 mt-1`}
                    />
                  </div>

                  {/* Dropdown area  */}
                  <AnimatePresence>
                    {isChoseTimeOpen && (
                      <motion.div
                        variants={choiceVariant}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeIn" },
                        }}
                        className={`font-1 absolute right-0 z-10 mt-2 w-56 bg-glass-1 text-slate-800 origin-top-right rounded shadow-lg ring-1 ring-[#fffde4] ring-opacity-50 focus:outline-none`}
                      >
                        <div className="px-2 py-3  ">
                          <button
                            value={"day"}
                            onClick={(e) =>
                              handleChoseTimeClick(e.target.value)
                            }
                            className="hover:bg-black hover:bg-opacity-[0.15] rounded transition duration-300 py-3 px-2 block w-full text-left cursor-pointer border-b border-gray-400 last:border-none"
                          >
                            Today
                          </button>
                          <button
                            value={"week"}
                            onClick={(e) =>
                              handleChoseTimeClick(e.target.value)
                            }
                            className="hover:bg-black hover:bg-opacity-[0.15] rounded transition duration-300 py-3 px-2 block w-full text-left cursor-pointer border-b border-gray-400 last:border-none"
                          >
                            This week
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <div>
                <SliderCarousel
                  setHoverObj={setHoverObj}
                  setImgUrl={setImgUrl}
                  movieLists={trendingMovieLists}
                  tvSeriesLists={trendingTvSeriesLists}
                  isMovie={type === "movie" ? true : false}
                />
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TrendingAtHome;
