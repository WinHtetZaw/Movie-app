import React, { useEffect, useState } from "react";
import PopularAtHome from "../components/Home/PopularAtHome";
import MovieCarousel from "../components/MovieCarousel";

const Dashboard = () => {
  return (
    <div className=" text-slate-50 pt-5">
      <div className="">
        <PopularAtHome />
      </div>
    </div>
  );
};

export default Dashboard;
