import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/services/movieListApi";
import { useGetPopularTvSeriesQuery } from "../../redux/services/tvSeriesApi";
import SliderCarousel from "../SliderCarousel";


const PopularAtHome = () => {
  // data fetching
  const { data: popularMovieListsData, isLoading } = useGetPopularMoviesQuery();
  const { data: popularTvSeriesListsData } = useGetPopularTvSeriesQuery();

  // states
  const [isMovie, setIsMovie] = useState(true);
  const [isCarousel, setIsCarousel] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // get  popular movie lists from data fetching
  const popularMovieLists = popularMovieListsData?.results;
  popularMovieLists && console.log("popularMovieLists - ", popularMovieLists);

  // get  popular tv-series lists from data fetching
  const popularTvSeriesLists = popularTvSeriesListsData?.results;
  popularTvSeriesLists &&
    console.log("popularTvSeriesLists - ", popularTvSeriesLists);

  // looping movie lists
  const popularMovieListsLooping = popularMovieLists?.map(
    (popularMovieList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            popularMovieList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularMovieList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {popularMovieList.title}
        </h2>
        <p className=" text-slate-400">{popularMovieList.release_date}</p>
      </div>
    )
  );



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowWidth);

  // looping movie lists
  const popularTvSeriesListsLooping = popularTvSeriesLists?.map(
    (popularTvSeriesList, index) => (
      <div className=" min-w-[200px] my-yellow" key={index}>
        <img
          className=" rounded mb-5"
          src={
            popularTvSeriesList.poster_path
              ? `https://image.tmdb.org/t/p/w500${popularTvSeriesList.poster_path}`
              : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
          }
          alt=""
        />
        <h2 className=" w-full line-clamp-2 text-slate-50">
          {popularTvSeriesList.name}
        </h2>
        <p className=" text-slate-400">{popularTvSeriesList.release_date}</p>
      </div>
    )
  );

  return (
    <div className="bg-dark-1 px-3 md:px-7 py-10">
      <div className="">
        <h1 className=" text-xl font-semibold mb-5">
          <span>Popular : </span>
          <button
            onClick={() => setIsMovie(true)}
            className={`mr-3 border-2 py-1 px-2 rounded cursor-pointer transition duration-300 ${
              !isMovie && "opacity-60"
            }`}
          >
            Movie
          </button>
          <button
            onClick={() => setIsMovie(false)}
            className={`mr-3 border-2 py-1 px-2 rounded cursor-pointer transition duration-300 ${
              isMovie && "opacity-60"
            }`}
          >
            Tv series
          </button>
        </h1>
      </div>
      {windowWidth > 640 ? (
        <div className=" popularAtHome overflow-x-scroll flex gap-7 pb-5">
        {isMovie ? popularMovieListsLooping : popularTvSeriesListsLooping}
      </div>
      ) : (
        <div className="">
          <SliderCarousel popularMovieLists={popularMovieLists} popularTvSeriesLists={popularTvSeriesLists} isMovie={isMovie}/>
        </div>
      )}
    </div>
  );
};

export default PopularAtHome;
