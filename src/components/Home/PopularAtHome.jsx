import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import "@lottiefiles/lottie-player";
import { motion } from "framer-motion";

const PopularAtHome = () => {
  // * data fetching
  const { data: popularMovieListsData, isLoading } = useGetPopularMoviesQuery();
  const { data: popularTvSeriesListsData } = useGetPopularTvSeriesQuery();

  // * hooks
  const [isMovie, setIsMovie] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");

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
          {popularTvSeriesList.release_date ?? popularTvSeriesList.first_air_date}
        </motion.p>
      </div>
    )
  );

  return (
    <>
      {isLoading || !popularMovieLists ? (
        <div className=" w-[100px] md:w-[150px] mx-auto">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_a2chheio.json"
            style={{ width: "100%" }}
          ></lottie-player>
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
          className={` transition-all duration-300 filter bg-no-repeat bg-cover bg-center`}
        >
          <div className=" bg-black bg-opacity-40 px-3 md:px-7 py-10">
            <div>
              <div className=" flex gap-2 sm:gap-5 items-center text-xl font-semibold mb-5">
                <h2 className=" font-serif text-lg sm:text-xl whitespace-nowrap">
                  Popular :{" "}
                </h2>
                <button
                  onClick={() => setIsMovie(true)}
                  className={`hvr-radial-in active:scale-90 font-sans text-gray-800 relative w-[7rem] flex items-center  py-2 text-sm rounded cursor-pointer transition duration-300 `}
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
                  className={`hvr-radial-in active:scale-90 font-sans text-gray-800 relative w-[8rem]  py-2 text-sm rounded cursor-pointer transition duration-300 `}
                >
                  <span
                    className={`${
                      isMovie ? " opacity-0" : "opacity-100"
                    } w-3 h-3 bg-[#E0AB18] rounded-full transition duration-300 absolute top-0 bottom-0 my-auto left-3`}
                  ></span>
                  <span className="w-full h-full text-center">Tv series</span>
                </button>
              </div>
            </div>
            {windowWidth > 640 ? (
              <div className=" popularAtHome overflow-x-scroll flex gap-7 pb-5">
                {isMovie && popularMovieListsLooping}
                {!isMovie && popularTvSeriesListsLooping}
              </div>
            ) : (
              <div>
                <SliderCarousel
                  setImgUrl={setImgUrl}
                  movieLists={popularMovieLists}
                  tvSeriesLists={popularTvSeriesLists}
                  isMovie={isMovie}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PopularAtHome;
