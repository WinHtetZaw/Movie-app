import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GenreSidebar from "../components/GenreSidebar";
import GenresCard from "../components/GenresCard";
import useIsDetail from "../hooks/useIsDetail";

const TvLayout = () => {
  const isDetail = useIsDetail();
  return (
    <div
      className={`min-h-screen max-w-[1280px] ${
        !isDetail && "pt-[80px]"
      }`}
    >
      <GenresCard />
      <Outlet />
    </div>
  );
};

export default TvLayout;
