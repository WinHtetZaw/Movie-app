import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@mantine/core";
// linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228))
const RootLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // console.dir(window);

  useEffect(() => {
    // start - when scroll navbar show and hide
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // console.log(currentScrollPos);
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setShowNavbar(isScrollingUp || currentScrollPos < 1);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    // end - when scroll navbar show and hide

    return () => {
      window.removeEventListener("scroll", handleScroll); // when scroll navbar show and hide
    };
  }, [prevScrollPos]);
  return (
    <div className="">
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
            className=" bg-[#032541] z-[1000] h-[80px] fixed top-0 w-full"
          >
            <Navbar />
          </motion.nav>
        )}
      </AnimatePresence>
      <main className=" mt-[80px] min-h-screen bg-transparent">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
