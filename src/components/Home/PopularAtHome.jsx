import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "@lottiefiles/lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import HomeSlide from "./HomeSlide";
import HomeLoading from "./HomeLoading";
import { modalPopupVariant } from "../../data/data";

const PopularAtHome = () => {
  // * data fetching
  const {
    data: popularMovieListsData,
    isLoading,
    status,
  } = useGetPopularMoviesQuery();
  const {
    data: popularTvSeriesListsData,
    isLoading: isLoadingTv,
    status: statusTv,
  } = useGetPopularTvSeriesQuery();

  // * hooks
  const [isMovie, setIsMovie] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [imgUrl, setImgUrl] = useState("");
  const [activeItem, setActiveItem] = useState([]);

  // console.log("tv", statusTv);
  // console.log("movie", status);

  // * get  popular movie lists from data fetching
  const popularMovieLists = popularMovieListsData?.results;

  // * get  popular tv-series lists from data fetching
  const popularTvSeriesLists = popularTvSeriesListsData?.results;

  const activeItemImg = `https://image.tmdb.org/t/p/original/${activeItem?.backdrop_path}`;

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
        // onMouseEnter={() => {
        //   setImgUrl(
        //     `https://image.tmdb.org/t/p/original/${popularMovieList.backdrop_path}`
        //   );
        // }}
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
        // onMouseEnter={() => {
        //   setImgUrl(
        //     `https://image.tmdb.org/t/p/original/${popularTvSeriesList.backdrop_path}`
        //   );
        // }}
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
      {isLoading ||
      isLoadingTv ||
      status === "pending" ||
      statusTv === "pending" ? (
        <div className="min-h-screen pt-[80px] flex flex-col justify-between p-5 w-full">
          <HomeLoading />
        </div>
      ) : (
        <motion.div
          variants={parentVariant}
          initial="hidden"
          animate="show"
          style={{ backgroundImage: `url(${activeItemImg})` }}
          className={`relative min-h-screen transition-all duration-300 filter bg-no-repeat bg-cover bg-center`}
        >
          <div className=" min-h-screen h-full pt-[80px] flex flex-col justify-between bg-black bg-opacity-40 text-[#cccccc] px-3 md:px-7 py-10">
            <div className="">
              <HomeSlide activeItem={activeItem} />
            </div>

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
                        initial="hidden"
                        animate="show"
                        variants={modalPopupVariant}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        className="modal-container"
                      >
                        <p
                          onClick={() => setIsMovie(true)}
                          className="modal-item"
                        >
                          Movie
                        </p>
                        <p
                          onClick={() => setIsMovie(false)}
                          className="modal-item"
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
                  setActiveItem={setActiveItem}
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
