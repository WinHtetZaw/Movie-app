import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetNowPlayingMoviesQuery } from "../redux/services/movieListApi";
import MovieCard from "../components/MovieCard";
import PageLoading from "../components/PageLoading";
import StartBtn from "../components/pagination.jsx/StartBtn";
import PrevBtn from "../components/pagination.jsx/PrevBtn";
import NextBtn from "../components/pagination.jsx/NextBtn";
import EndBtn from "../components/pagination.jsx/EndBtn";
import { useSelector } from "react-redux";
import OrangeBtn from "../components/buttons/OrangeBtn";

const NowPlayingMovies = () => {
  // * hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(0);
  const [inputError, setInputError] = useState("");
  const location = useLocation();
  const pageNum = useRef(1);

  // * get data globally
  const { activeGenreIds } = useSelector((state) => state.genreSlice);

  // * if click Movie to set page number 1
  if (location?.state?.page) {
    pageNum.current = location?.state?.page;
    setSearchParams({ page: pageNum.current });
  }

  // * data fetching
  const { data, isLoading, isSuccess } = useGetNowPlayingMoviesQuery(
    pageNum.current
  );
  // data && console.log(data);

  useEffect(() => {
    setSearchParams({ page: pageNum.current });
  }, []);

  // * variables define
  const lists = data?.results;
  // isSuccess && console.log(lists);

  const totalPages = data?.total_pages;
  const currentPage = pageNum.current;

  // * looping movie lists by genre
  let filterLists;
  if (activeGenreIds.length > 0) {
    filterLists = lists?.filter((list) =>
      list.genre_ids
        .toString()
        .includes(activeGenreIds.toString())
    );
  }

  // * looping movie lists
  const looping = (
    filterLists?.length > 0 ? filterLists : lists
  )?.map((list, index) => (
    <div
      key={index}
      className={`${!list.poster_path && "hidden"}`}
    >
      <MovieCard
        {...list}
        isLoading={isLoading}
        isMovie={true}
      />
    </div>
  ));

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
    if (e.target.value.length > 3) return;
    if (
      e.target.value.length > 3 ||
      e.target.value > 500 ||
      e.target.value == 0
    ) {
      // console.log(e.target.value.length)
      setInputError("Number must be between 1 and 500");
      return;
    }
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      return;
    }
    pageNum.current = input;
    setSearchParams({ page: pageNum.current });
    console.dir(e.target[0].value);
  };
  return (
    <>
      {isLoading || !lists ? (
        <PageLoading />
      ) : (
        <div className="px-3 sm:px-5 pt-10 mt-[80px] min-[1281px]:px-0">
          {/* pagination  */}
          <div className=" flex sm:justify-between gap-5 py-5 sm:py-7 flex-col-reverse sm:flex-row">
            <div className=" flex gap-5 justify-evenly items-center min-[400px]:justify-start">
              {/* start  */}
              <StartBtn
                pageNum={pageNum.current}
                handlePaginationBtnClick={handlePaginationBtnClick}
              />

              {/* previous  */}
              <PrevBtn
                pageNum={pageNum.current}
                handlePaginationBtnClick={handlePaginationBtnClick}
              />

              {/* next  */}
              <NextBtn
                totalPages={totalPages}
                pageNum={pageNum.current}
                handlePaginationBtnClick={handlePaginationBtnClick}
              />

              {/* end  */}
              <EndBtn
                totalPages={totalPages}
                pageNum={pageNum.current}
                handlePaginationBtnClick={handlePaginationBtnClick}
              />
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
                    min={1}
                    max={500}
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
          {filterLists?.length == 0 && activeGenreIds?.length > 0 ? (
            <div className=" flex flex-col gap-5 py-5 items-center h-[50vh] text-xl font-1 font-semibold text-slate-200">
              <h3>No match movie found in this page.</h3>
              <h3>Go to another page or remove some genres.</h3>
              <OrangeBtn />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-5 min-[500px]:gap-y-10 sm:gap-7">
              {looping}
            </div>
          )}

          <div className=" flex gap-5 my-10 justify-evenly items-center min-[400px]:justify-end">
            {/* start  */}
            <StartBtn
              pageNum={pageNum.current}
              handlePaginationBtnClick={handlePaginationBtnClick}
            />

            {/* previous  */}
            <PrevBtn
              pageNum={pageNum.current}
              handlePaginationBtnClick={handlePaginationBtnClick}
            />

            {/* next  */}
            <NextBtn
              totalPages={totalPages}
              pageNum={pageNum.current}
              handlePaginationBtnClick={handlePaginationBtnClick}
            />

            {/* end  */}
            <EndBtn
              totalPages={totalPages}
              pageNum={pageNum.current}
              handlePaginationBtnClick={handlePaginationBtnClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NowPlayingMovies;