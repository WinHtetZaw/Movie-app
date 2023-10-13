import { useEffect, useRef } from "react";
import { useGetPopularMoviesQuery } from "../redux/services/movieListApi";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PrevBtn from "../components/pagination.jsx/PrevBtn";
import StartBtn from "../components/pagination.jsx/StartBtn";
import NextBtn from "../components/pagination.jsx/NextBtn";
import EndBtn from "../components/pagination.jsx/EndBtn";
import NotMatch from "../components/NotMatch";
import PaginationSearch from "../components/pagination.jsx/PaginationSearch";
import usePaginateFormSubmit from "../hooks/usePaginateFormSubmit";
import useSetActiveNum from "../hooks/useSetActiveNum";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movie } = useSelector((state) => state.paginationSlice);
  const setActiveNum = useSetActiveNum();
  const dispatch = useDispatch();
  const pageNum = useRef(movie.popular);
  const [paginateFormSubmit, activeNum] = usePaginateFormSubmit();

  const { activeGenreIds } = useSelector((state) => state.genreSlice);

  // * data fetching
  const { data, isLoading, isSuccess, status } = useGetPopularMoviesQuery(
    pageNum.current
  );
  const totalPages = 500;
  const currentPage = pageNum.current;
  
  // type in url bar make pagination work
  useEffect(() => {
    const query = parseFloat(searchParams.get("page"));
    const fun = (number) => {
      pageNum.current = number;
      setSearchParams({ page: number });
      setActiveNum(number);
    };
    if (!isNaN(query)) {
      const paramChange = () => {
        if (query > 1 && query < totalPages) {
          fun(parseFloat(query));
        } else {
          fun(1);
        }
      };
      paramChange();
    } else if (isNaN(query)) {
      fun(1);
    }
  }, [pageNum.current]);

  const popularMovieLists = data?.results;

  // * looping movie lists by genre
  let filterLists;
  if (activeGenreIds.length > 0) {
    filterLists = popularMovieLists?.filter((popularMovieList) => {
      // const arr = popularMovieList.genre_ids;
      return popularMovieList.genre_ids
        .toString()
        .includes(activeGenreIds.toString());
    });
  }
  // * looping movie lists
  const looping = (
    filterLists?.length > 0 ? filterLists : popularMovieLists
  )?.map((popularMovieList, index) => (
    <div key={index} className={`${!popularMovieList.poster_path && "hidden"}`}>
      <MovieCard {...popularMovieList} isLoading={isLoading} isMovie={true} />
    </div>
  ));

  const handlePaginationBtnClick = (type) => {
    const fun = (number) => {
      setSearchParams({ page: number });
      setActiveNum(number);
    };
    switch (type) {
      case "start":
        pageNum.current = 1;
        fun(pageNum.current);
        break;

      case "next":
        if (pageNum.current === totalPages) return;
        pageNum.current += 1;
        fun(pageNum.current);
        break;

      case "prev":
        pageNum.current <= 1 ? (pageNum.current = 1) : (pageNum.current -= 1);
        fun(pageNum.current);
        break;

      case "end":
        pageNum.current = totalPages;
        fun(pageNum.current);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    paginateFormSubmit(e, currentPage, 500);
    pageNum.current = activeNum.current;
  };

  return (
    <>
      {isLoading || !popularMovieLists || !isSuccess || status === "pending" ? (
        <PageLoading />
      ) : (
        <div className="content-container">
          {/* pagination  */}
          <div className="pagination-top">
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

            <PaginationSearch
              pageNum={pageNum.current}
              totalPages={500}
              handleFormSubmit={handleFormSubmit}
              // input={input}
              // handleInputOnChange={()=>{}}
            />
          </div>

          {/* movie lists show  */}
          {filterLists?.length == 0 && activeGenreIds?.length > 0 ? (
            <div className=" tracking-wider flex flex-col gap-3 py-5 items-center h-[50vh] text-lg font-1 text-slate-200">
              <NotMatch />
            </div>
          ) : (
            <div className="grid-1">{looping}</div>
          )}

          <div className="pagination-bottom">
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

export default Movies;
