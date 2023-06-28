import { useEffect, useRef, useState } from "react";
import { useGetTrendingMoviesQuery } from "../../redux/services/movieListApi";
import { useGetTrendingTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";
import "@lottiefiles/lottie-player";

const TrendingAtHome = () => {
  // * hooks
  const [type, setType] = useState("movie");
  const [choseTime, setChoseTime] = useState("day");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isChoseTimeOpen, setIsChoseTimeOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");

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
  trendingMovieLists &&
    console.log("trendingMovieLists - ", trendingMovieLists);

  // * get trending tv-series lists from data fetching
  const trendingTvSeriesLists = trendingTvSeriesListsData?.results;
  trendingTvSeriesLists &&
    console.log("trendingTvSeriesLists - ", trendingTvSeriesLists);

  // const url = `https://image.tmdb.org/t/p/original${trendingTvSeriesLists[0]?.backdrop_path}`
  //  isSuccess && console.log(url)

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
        <img
          className=" rounded mb-5"
          src={
            trendingMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {trendingMovieList.title}
        </h2>
        <p className=" text-slate-400">{trendingMovieList.release_date}</p>
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
        <img
          className=" rounded mb-5"
          src={
            trendingTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${trendingTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {trendingTvSeriesList.name}
        </h2>
        <p className=" text-slate-400">{trendingTvSeriesList.release_date}</p>
      </div>
    )
  );

  return (
    <>
    {isLoading ? (
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

      <div
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
        {/* md:px-7 py-10 mb-16 */}
        <div className=" bg-black bg-opacity-40 md:px-7 py-10">
          <div>
            <div className=" flex gap-2 sm:gap-5 items-center font-semibold mb-5">
              <h1 className=" font-serif text-lg sm:text-xl whitespace-nowrap">
                Trending :{" "}
              </h1>

              {/* Movie or Tv series choose button */}
              <div className="font-sans group text-gray-800 relative text-left w-[7rem]">
                <button
                  disabled={isLoading}
                  onClick={() => {
                    setIsTypeOpen(!isTypeOpen);
                    setIsChoseTimeOpen(false);
                  }}
                  type="button"
                  className="inline-flex items-center w-full bg-[#1CB5E0] group-hover:bg-[#005C97] group-hover:text-slate-200 transition duration-300 text-gray-800 disabled:opacity-60 justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold "
                >
                  {type === "movie" ? "Movie" : "Tv series"}
                  <svg
                    className={`-mr-1 h-5 w-5 text-gray-800 group-hover:text-slate-200 ${
                      isTypeOpen && " rotate-180"
                    } transition duration-300`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown area  */}
                <div
                  className={` ${
                    isTypeOpen ? "block" : "hidden"
                  } absolute bg-dark-4 left-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className="px-2 py-3  rounded  text-slate-200 border border-[#fffde4]">
                    <button
                      value={"movie"}
                      onClick={(e) => handleTypeClick(e.target.value)}
                      className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                    >
                      Movie
                    </button>
                    <button
                      value={"tv"}
                      onClick={(e) => handleTypeClick(e.target.value)}
                      className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                    >
                      Tv series
                    </button>
                  </div>
                  <svg
                    onClick={() => {
                      setIsTypeOpen(!isTypeOpen);
                      setIsChoseTimeOpen(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-3 right-3 active:scale-90 text-slate-200 bg-gray-800 hover:bg-gray-700 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>

              {/* day or week choose button */}
              <div className="relative group text-left w-[7rem]">
                <button
                  disabled={isTrendingTvSeriesListsDataLoading}
                  onClick={() => {
                    setIsChoseTimeOpen(!isChoseTimeOpen);
                    setIsTypeOpen(false);
                  }}
                  type="button"
                  className="inline-flex w-full transition duration-300  bg-[#1CB5E0] group-hover:bg-[#005C97] group-hover:text-slate-200 disabled:opacity-60 justify-center gap-x-1.5 rounded-md text-gray-800 px-3 py-2 text-sm font-semibold "
                >
                  {choseTime === "day" ? "Today" : "This week"}
                  <svg
                    className={`-mr-1 h-5 w-5 text-gray-800 group-hover:text-slate-200 ${
                      isChoseTimeOpen && " rotate-180"
                    } transition duration-300`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown area  */}
                <div
                  className={` ${
                    isChoseTimeOpen ? "block" : "hidden"
                  } absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className="px-2 py-3  rounded bg-dark-4 text-slate-200 border border-[#fffde4]">
                    <button
                      value={"day"}
                      onClick={(e) => handleChoseTimeClick(e.target.value)}
                      className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                    >
                      Today
                    </button>
                    <button
                      value={"week"}
                      onClick={(e) => handleChoseTimeClick(e.target.value)}
                      className=" py-3 px-2 block w-full text-left cursor-pointer border-b last:border-b-0 border-b-[#25262b]"
                    >
                      This week
                    </button>
                  </div>
                  <svg
                    onClick={() => {
                      setIsChoseTimeOpen(!isChoseTimeOpen);
                      setIsTypeOpen(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-3 right-3 active:scale-90 text-slate-200 bg-gray-800 hover:bg-gray-700 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {windowWidth > 640 ? (
            <div className=" popularAtHome overflow-x-scroll flex gap-7 px-3 pb-5">
              {type === "movie"
                ? trendingMovieListsLooping
                : trendingTvSeriesListsLooping}
            </div>
          ) : (
            <div>
              <SliderCarousel
                setImgUrl={setImgUrl}
                movieLists={trendingMovieLists}
                tvSeriesLists={trendingTvSeriesLists}
                isMovie={type === "movie" ? true : false}
              />
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default TrendingAtHome;
