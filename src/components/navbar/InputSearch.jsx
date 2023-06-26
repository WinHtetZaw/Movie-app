import React, { useRef, useState } from "react";
import "./inputSearch.css";
import { useSearchMovieQuery } from "../../redux/services/movieListApi";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies } from "../../redux/features/searchSlice";

const InputSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const { searchMovies } = useSelector((state) => state.searchSlice);
  searchMovies.length > 0 && console.log("searchMovies", searchMovies);

  const { data, isLoading, isSuccess } = useSearchMovieQuery(searchQuery);
  isSuccess && console.log(data);

  const searchMovieLists = data?.results;
  searchMovieLists?.length > 0 && console.log(searchMovieLists);

  // handles
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchQuery(input);
    // console.log("input", input);
    // console.log("state", searchQuery);
    // if (searchMovieLists.length > 0) {
    //   dispatch(addSearchMovies(searchMovieLists));
    //   console.log("successfully added");
    // }
    dispatch(addSearchMovies(data?.results))
    console.log(searchMovies)
  };
  return (
    <div className=" mr-16 sm:mr-0">
      {/* <div className="search-box flex items-center justify-center">
        <button className="btn-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          type="text"
          className="input-search bg-sky-700"
          placeholder="Type to Search..."
        />
      </div> */}

      <form
        onSubmit={handleSubmit}
        className=" flex items-center border-b border-gray-300"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" py-2 px-3 outline-none bg-transparent placeholder:tracking-wider"
          type="text"
          placeholder="Type to search ..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </div>
  );
};

export default InputSearch;
