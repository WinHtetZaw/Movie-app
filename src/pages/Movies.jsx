import { useEffect, useRef, useState } from "react";
import { useGetPopularMoviesQuery } from "../redux/services/movieListApi";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import ImageCard from "../components/ImageCard";
import { motion } from "framer-motion";

const Movies = () => {
  // * hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(0);
  const [inputError, setInputError] = useState("");
  const location = useLocation();
  const pageNum = useRef(1);

  // * if click Movie to set page number 1
  if (location?.state?.page) {
    pageNum.current = location?.state?.page;
    setSearchParams({ page: pageNum.current });
  }

  // * data fetching
  const { data, isLoading, isSuccess } = useGetPopularMoviesQuery(
    pageNum.current
  );
  // data && console.log(data);

  useEffect(() => {
    setSearchParams({ page: pageNum.current });
  }, []);

  // * get data globally
  const { genreNum } = useSelector((state) => state.genreSlice);

  // * variables define
  const popularMovieLists = data?.results;
  // isSuccess && console.log(popularMovieLists);

  const totalPages = 500;
  const currentPage = pageNum.current;

  // * looping movie lists by genre
  let filter;
  if (genreNum != 0) {
    filter = popularMovieLists?.filter((popularMovieList) =>
      popularMovieList.genre_ids.includes(genreNum)
    );
  }

  // * looping movie lists
  const looping = (genreNum == 0 ? popularMovieLists : filter)?.map(
    (popularMovieList) => (
      <MovieCard
        {...popularMovieList}
        key={popularMovieList.id}
        isLoading={isLoading}
        isMovie={true}
      />
    )
  );

  // * handle functions
  const handlePaginationBtnClick = (type) => {
    if (type === "prev") {
      if (pageNum.current === 1) {
        return;
      }
      pageNum.current -= 1;
      setSearchParams({ page: pageNum.current });
    } else if (type === "next") {
      if (pageNum.current === totalPages) {
        return;
      }
      pageNum.current += 1;
      setSearchParams({ page: pageNum.current });
    } else if (type === "start") {
      pageNum.current = 1;
      setSearchParams({ page: pageNum.current });
      return;
    } else if (type === "end") {
      pageNum.current = totalPages;
      setSearchParams({ page: pageNum.current });
      return;
    }
    setInput("");
  };

  const handleInputOnChange = (e) => {
    if (e.target.value.length > 3) {
      // console.log(e.target.value.length)
      return;
    } else if (e.target.value > 500 || e.target.value == 0) {
      setInputError("Number must be between 1 and 500");
      return;
    }
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    pageNum.current = input;
    setSearchParams({ page: pageNum.current });
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="px-3 sm:px-5 min-[1281px]:px-0">
          {/* pagination  */}
          <div className=" flex sm:justify-between gap-5 py-5 sm:py-7 flex-col-reverse sm:flex-row">
            <div className=" flex gap-3 justify-evenly items-center min-[400px]:justify-start">
              {/* start  */}
              <button
                disabled={pageNum.current === 1}
                onClick={() => handlePaginationBtnClick("start")}
                className={`${
                  pageNum.current !== 1 && "hvr-radial-in"
                } w-16 h-8 disabled:opacity-50 flex items-center  bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* previous  */}
              <button
                disabled={pageNum.current === 1}
                onClick={() => handlePaginationBtnClick("prev")}
                className={`${
                  pageNum.current !== 1 && "hvr-radial-in"
                } w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* next  */}
              <button
                disabled={pageNum.current === totalPages}
                onClick={() => handlePaginationBtnClick("next")}
                className={`${
                  pageNum.current !== totalPages && "hvr-radial-in"
                }  w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              {/* end  */}
              <button
                disabled={pageNum.current === totalPages}
                onClick={() => handlePaginationBtnClick("end")}
                className={`${
                  pageNum.current !== totalPages && "hvr-radial-in"
                } w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="text-slate-200 flex items-center justify-between">
              <div className=" flex items-center">
                <h1 className=" mr-3">page : </h1>
                <form
                  onSubmit={handleFormSubmit}
                  className="border-b-2 border-[#fffde4] overflow-hidden bg-[#25262b]  w-20  flex items-center rounded-sm"
                >
                  <input
                    onChange={handleInputOnChange}
                    className=" w-full outline-none bg-transparent p-2"
                    type="number"
                    maxLength={3}
                    placeholder="0"
                  />
                  <button
                    disabled={input === 0}
                    type="submit"
                    className="p-2 bg-gray-600 disabled:opacity-50"
                  >
                    Go
                  </button>
                </form>
                {/* <p>{inputError && inputError}</p> */}
              </div>
              <div className=" whitespace-nowrap w-[4rem] sm:w-[7rem] py-3 mr-5 text-center sm:text-end">
                {pageNum.current} \ {totalPages}
              </div>
            </div>
          </div>

          {/* movie lists show  */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-5 min-[500px]:gap-y-10 sm:gap-7">
            {looping}
          </div>

          <div className=" flex gap-3 py-10 justify-evenly items-center min-[400px]:justify-end">
            {/* start  */}
            <button
              disabled={pageNum.current === 1}
              onClick={() => handlePaginationBtnClick("start")}
              className={`${
                pageNum.current !== 1 && "hvr-radial-in"
              } w-16 h-8 disabled:opacity-50 flex items-center  bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* previous  */}
            <button
              disabled={pageNum.current === 1}
              onClick={() => handlePaginationBtnClick("prev")}
              className={`${
                pageNum.current !== 1 && "hvr-radial-in"
              } w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* next  */}
            <button
              disabled={pageNum.current === totalPages}
              onClick={() => handlePaginationBtnClick("next")}
              className={`${
                pageNum.current !== totalPages && "hvr-radial-in"
              }  w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* end  */}
            <button
              disabled={pageNum.current === totalPages}
              onClick={() => handlePaginationBtnClick("end")}
              className={`${
                pageNum.current !== totalPages && "hvr-radial-in"
              } w-16 h-8 disabled:opacity-50 flex items-center bg-[#1CB5E0] py-2 text-sm rounded cursor-pointer transition duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
