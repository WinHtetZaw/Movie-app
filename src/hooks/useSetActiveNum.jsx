import { useDispatch } from "react-redux";
import { setActivePaginateNumber } from "../redux/features/paginationSlice";
import { useLocation } from "react-router-dom";
import { linkToString, pathnameFilter } from "../data/share";

const useSetActiveNum = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const setActiveNum = (num) => {
    const type1 = pathnameFilter(location.pathname)[0];
    const type2 = linkToString(pathnameFilter(location.pathname)[1]);
    dispatch(setActivePaginateNumber({ type1, type2, num }));
  };
  return setActiveNum;
};

export default useSetActiveNum;
