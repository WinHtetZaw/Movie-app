import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const { isPageLoading } = useSelector((state) => state.generalSlice);

  return (
    <div
      className={`relative max-w-[1280px] mx-auto bg-dark-1 ${
        openSidebar ? " h-screen overflow-hidden" : ""
      }`}
    >
      <nav>
        <Navbar />
      </nav>
      <main className="mt-[80px] min-h-screen bg-transparent">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
