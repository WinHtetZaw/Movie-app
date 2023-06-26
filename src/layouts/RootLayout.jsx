import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@mantine/core";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
// linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228))
const RootLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const location = useLocation();

  const { openSidebar } = useSelector((state) => state.sidebarSlice);

  useEffect(() => {
    // when scroll navbar show and hide
    const handleScroll = () => {
      // if (location.pathname.includes("/movie/detail")) {
      //   return;
      // }
      const currentScrollPos = window.scrollY;
      // console.log(currentScrollPos);
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setShowNavbar(isScrollingUp || currentScrollPos < 1);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div
      className={`relative max-w-[1280px] mx-auto ${
        openSidebar ? " h-screen overflow-hidden" : " h-auto"
      }`}
    >
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{
              y: -80,
              transition: { duration: 0.4, delay: 0.2, ease: "easeIn" },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" bg-dark-5 z-[1000] h-[80px] fixed top-0 max-w-[1280px] w-full mx-auto"
          >
            <Navbar />
          </motion.nav>
        )}
      </AnimatePresence>
      <main className="mt-[80px] bg-transparent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
