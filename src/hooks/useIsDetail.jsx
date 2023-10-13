import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIsDetail = () => {
  const [isDetail, setIsDetail] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("detail")) {
      setIsDetail(true);
    } else {
      setIsDetail(false);
    }
  }, [location.pathname]);
  return isDetail;
};

export default useIsDetail;
