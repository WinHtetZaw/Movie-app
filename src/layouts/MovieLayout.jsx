import { Outlet, useLocation } from "react-router-dom";
import GenreSidebar from "../components/GenreSidebar";
import GenresCard from "../components/GenresCard";
import { useEffect, useRef } from "react";
import useIsDetail from "../hooks/useIsDetail";

const MovieLayout = () => {
  const isDetail = useIsDetail();
  return (
    <div
      className={`relative min-h-screen max-w-[1280px] overflow-x-hidden ${
        !isDetail && "pt-[80px]"
      }`}
    >
      <GenresCard />
      <Outlet />
    </div>
  );
};

export default MovieLayout;
