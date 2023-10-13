import { useRef } from "react";
import "./inputSearch.css";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

import { useLocation, useNavigate } from "react-router-dom";

const InputSearch = ({ placeholderText }) => {
  const inputRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    localStorage.setItem("searchInput", inputRef.current);
    if (location.pathname.includes("tv")) {
      navigate({
        pathname: `/tv/search`,
        search: `?query=${inputRef.current}&page=1`,
      });
    } else {
      navigate({
        pathname: `/movie/search`,
        search: `?query=${inputRef.current}&page=1`,
      });
    }
  };
  return (
    <div className="font-4 flex justify-center items-center mx-auto w-[150px] md:w-[200px] lg:w-[250px]">
      <form
        onSubmit={handleSubmit}
        className=" flex items-center border-b border-gray-300"
      >
        <input
          onChange={(e) => (inputRef.current = e.target.value)}
          className=" py-1 pr-3 w-full text-slate-200 tracking-wider outline-none bg-transparent placeholder:tracking-wider"
          type="text"
          placeholder={`${placeholderText} . . . `}
        />

        <span className="opacity-80">
          <BsSearch />
        </span>
      </form>
    </div>
  );
};

export default InputSearch;
