import { useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { useGetPopularTvSeriesQuery } from "../redux/services/tvSeriesApi";
import { useSearchParams } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import StartBtn from "../components/pagination.jsx/StartBtn";
import PrevBtn from "../components/pagination.jsx/PrevBtn";
import NextBtn from "../components/pagination.jsx/NextBtn";
import EndBtn from "../components/pagination.jsx/EndBtn";
import NotMatch from "../components/NotMatch";
import PaginationSearch from "../components/pagination.jsx/PaginationSearch";
import usePaginateFormSubmit from "../hooks/usePaginateFormSubmit";
import useSetActiveNum from "../hooks/useSetActiveNum";

const TvSeries = () => {
  // * hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const [paginateFormSubmit, activeNum] = usePaginateFormSubmit();
  const { tv } = useSelector((state) => state.paginationSlice);
  const pageNum = useRef(tv.popular);
  const setActiveNum = useSetActiveNum();

  const { activeGenreIds } = useSelector((state) => state.genreSlice);

  const { data, isSuccess, isLoading, status } = useGetPopularTvSeriesQuery(
    pageNum.current
  );

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

  const popularTvSeriesLists = data?.results;
  const totalPages = 500;
  const currentPage = pageNum.current;

  // looping tv-seres lists by genre
  let filterLists;
  if (activeGenreIds.length > 0) {
    filterLists = popularTvSeriesLists?.filter((popularTvSeriesList) =>
      popularTvSeriesList.genre_ids
        .toString()
        .includes(activeGenreIds.toString())
    );
  }
  const looping = (
    filterLists?.length > 0 ? filterLists : popularTvSeriesLists
  )?.map((popularTvSeriesList, index) => (
    <div
      key={index}
      className={`${!popularTvSeriesList.poster_path && "hidden"}`}
    >
      <MovieCard {...popularTvSeriesList} isLoading={isLoading} />
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
    paginateFormSubmit(e, currentPage, totalPages);
    pageNum.current = activeNum.current;
  };

  return (
    <>
      {isLoading ||
      !popularTvSeriesLists ||
      !isSuccess ||
      status === "pending" ? (
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
              totalPages={totalPages}
              handleFormSubmit={handleFormSubmit}
            />
          </div>

          {/* tv series lists show  */}
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

export default TvSeries;
