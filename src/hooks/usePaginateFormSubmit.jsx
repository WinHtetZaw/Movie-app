import { linkToString, pathnameFilter } from "../data/share";
import { useLocation, useSearchParams } from "react-router-dom";
import { useRef } from "react";
import useSetActiveNum from "./useSetActiveNum";

const usePaginateFormSubmit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setActiveNum = useSetActiveNum();
  const location = useLocation();
  const activeNum = useRef();

  const paginateFormSubmit = (e, currentPage, totalPages) => {
    e.preventDefault();

    const value = e.target[0].value; // select input element value

    // validate input number between 1 and max number
    if (value < 1 || value > totalPages) {
      return;
    }

    currentPage = parseFloat(value);
    activeNum.current = currentPage;
    setSearchParams({ page: currentPage });
    e.target.reset();

    const type1 = pathnameFilter(location.pathname)[0];
    const type2 = linkToString(pathnameFilter(location.pathname)[1]);
    // dispatch(setActivePaginateNumber({ type1, type2, num: currentPage }));
    setActiveNum(currentPage);
  };

  return [paginateFormSubmit, activeNum];
};

export default usePaginateFormSubmit;
