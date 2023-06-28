import { useRef } from "react";
import "./inputSearch.css";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const inputRef = useRef("");
  const navigate = useNavigate();

  const { showNavbar } = useSelector((state) => state.generalSlice);

  // * handles
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    localStorage.setItem("searchInput", inputRef.current);
    navigate({
      pathname: `/search`,
      search: `?query=${inputRef.current}&page=1`,
    });
  };
  return (
    <div className=" mr-16 md:mr-0 w-[150px] md:w-[200px] lg:w-[250px]">
      <form
        onSubmit={handleSubmit}
        className=" flex items-center border-b border-gray-300"
      >
        <input
          onChange={(e) => (inputRef.current = e.target.value)}
          className=" py-2 pr-3 w-full outline-none bg-transparent placeholder:tracking-wider"
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
