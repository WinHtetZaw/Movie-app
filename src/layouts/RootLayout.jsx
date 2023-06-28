import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const { isPageLoading } = useSelector((state) => state.generalSlice);
  console.log(isPageLoading);

  return (
    <div
      className={`relative max-w-[1280px] mx-auto ${
        openSidebar ? " h-screen overflow-hidden" : ""
      }`}
    >
      <nav>
        <Navbar />
      </nav>
      <main className="mt-[80px] min-h-screen bg-transparent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
