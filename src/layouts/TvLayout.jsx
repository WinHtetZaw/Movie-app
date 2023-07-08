import React from "react";
import { Outlet } from "react-router-dom";
import GenreSidebar from "../components/GenreSidebar";

const TvLayout = () => {
  return (
    <div className=" min-h-screen max-w-[1280px]">
      <GenreSidebar />
      <Outlet />
    </div>
  );
};

export default TvLayout;
