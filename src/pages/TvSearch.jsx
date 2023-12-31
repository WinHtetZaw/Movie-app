import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import StartBtn from "../components/pagination.jsx/StartBtn";
import PrevBtn from "../components/pagination.jsx/PrevBtn";
import NextBtn from "../components/pagination.jsx/NextBtn";
import EndBtn from "../components/pagination.jsx/EndBtn";
import { useSearchTvQuery } from "../redux/services/tvSeriesApi";
import NotMatch from "../components/NotMatch";
import { useSelector } from "react-redux";

const TvSearch = () => {
  // * hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(0);
  const navigate = useNavigate();
  const pageNum = useRef(1);
  const searchQuery = localStorage.getItem("searchInput");
  const location = useLocation();
  const { activeGenreIds } = useSelector((state) => state.genreSlice);


  // localStorage.getItem("searchInput") && searchQuery( localStorage.getItem("searchInput"))

  const { data, isLoading, isSuccess } = useSearchTvQuery({
    query: searchQuery,
    page: pageNum.current,
  });
  //   isSuccess && console.log(data);

  // if (!searchParams.get("query")) {
  //   return navigate({
  //     pathname: "/movie",
  //     search: { page: 1 },
  //   });
  // }

  const lists = data?.results;

  //* variables define
  const totalPages = data?.total_pages;
  const currentPage = pageNum.current;

  //* effects
  // useEffect(() => {
  //   setSearchParams({
  //     query: searchQuery,
  //     page: pageNum.current,
  //   });
  // }, [pageNum.current]);
  let filterLists;
  if (activeGenreIds.length > 0) {
    filterLists = lists?.filter((list) => {
      // const arr = list.genre_ids;
      return list.genre_ids.toString().includes(activeGenreIds.toString());
    });
  }

  // * looping movie lists
  const looping = (filterLists?.length > 0 ? filterLists : lists)?.map((list, index) => (
    <div key={index} className={`${!list.poster_path && "hidden"}`}>
      <MovieCard key={list.id} {...list} isLoading={isLoading} isMovie={true} />
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
      setSearchParams({ query: searchQuery, page: pageNum.current });
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
    if (lists.length === 0) {
      pageNum.current = 0;
    } else {
      pageNum.current = input;
    }
    setSearchParams({ page: pageNum.current });
  };

  return (
    <div className="content-container">
      {/* pagination  */}
      <div className="pagination-top">
        <div className=" flex gap-3 justify-evenly items-center min-[400px]:justify-start">
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

      {/*  lists show  */}
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
  );
};

export default TvSearch;
