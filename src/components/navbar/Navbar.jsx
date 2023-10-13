import { useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isOpenSidebar } from "../../redux/features/sidebarSlice";
import InputSearch from "./InputSearch";
import { AnimatePresence, motion } from "framer-motion";
import { toggleShowNavbar } from "../../redux/features/generalSlice";
import { BsPerson } from "react-icons/bs";
import { toast } from "react-hot-toast";
import MenuModal from "./MenuModal";
import MovieModal from "../modal-components/MovieModal";
import TvModal from "../modal-components/TvModal";
import LinkModal from "../modal-components/LinkModal";
import { modalPopupVariant, movieDataPathnames, tvDataPathnames } from "../../data/data";

const Navbar = () => {
  // * hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrink, setIsShrink] = useState(false);
  const [isProfileModelOpen, setIsProfileModelOpen] = useState(false);
  const [useInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const location = useLocation();

  // * rtk
  const { scrollable } = useSelector((state) => state.generalSlice);
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const { showNavbar } = useSelector((state) => state.generalSlice);
  const dispatch = useDispatch();

  // * useEffects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
  }, [location.pathname]);

  useEffect(() => {
    // when scroll navbar show and hide
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      dispatch(toggleShowNavbar(isScrollingUp || currentScrollPos < 1));
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // * handles
  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileModelOpen(!isProfileModelOpen);
  };

  const handleLogoutClick = () => {
    useInfo.success = false;
    localStorage.setItem("userInfo", JSON.stringify(useInfo));
    toast.success("Successfully Log out!");
    setIsProfileModelOpen(false);
  };

  const handleMouseLeave = () => {
    setIsProfileModelOpen(false);
  };

  return (
    <>
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
            className={`${
              location.pathname === "/"
                ? "bg-opacity-20  bg-black"
                : "bg-[#25262b]"
            }  z-[1000] h-[80px] fixed top-0 max-w-[1280px] w-full mx-auto`}
          >
            <div className=" font-sans w-full flex items-center z-50 h-full text-[#ccc]">
              {/* logo  */}
              <Link to={"/"}>
                <h3 className=" ml-5 text-lg sm:text-2xl flex items-center justify-center font-semibold font-serif">
                  <span className=" text-neon text-rose-500 uppercase font-2">
                    movie
                  </span>
                </h3>
              </Link>

              <section className=" flex items-center w-full justify-end">
                {/* burger menu  */}
                <div className="absolute z-[100] top-0 right-0 h-[80px] flex items-center justify-center mr-5">
                  <button
                    onClick={() => {
                      dispatch(isOpenSidebar(!openSidebar));
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`menu ${
                      isMenuOpen && "opened"
                    }  w-9 h-9 ml-auto md:hidden`}
                  >
                    <svg className=" w-full h-full" viewBox="0 0 100 100">
                      <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                      />
                      <path className="line line2" d="M 20,50 H 80" />
                      <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                      />
                    </svg>
                  </button>
                </div>
                <AnimatePresence>
                  {isMenuOpen && (
                    <div className=" absolute z-50 top-0 h-screen w-full bg-black bg-opacity-80">
                      <MenuModal
                        setIsMenuOpen={setIsMenuOpen}
                        isProfileModelOpen={isProfileModelOpen}
                        useInfo={useInfo}
                        handleLogoutClick={handleLogoutClick}
                        isShrink={isShrink}
                        handleProfileClick={handleProfileClick}
                        handleMouseLeave={handleMouseLeave}
                        setIsProfileModelOpen={setIsProfileModelOpen}
                      />
                    </div>
                  )}
                </AnimatePresence>
                <div className=" flex items-center gap-8">
                  {/* search  */}
                  <span className=" mr-16">
                    <InputSearch placeholderText={"Type to search"} />
                  </span>

                  {/* menu links  */}
                  <div
                    className={` hidden h-14 md:flex items-center gap-5 md:mr-5`}
                  >
                    <div className=" flex flex-row items-center gap-5 h-full">
                      <LinkModal data={movieDataPathnames} />

                      <LinkModal data={tvDataPathnames} />
                    </div>

                    {/* profile  */}
                    <div
                      onMouseLeave={handleMouseLeave}
                      onMouseOver={() => setIsProfileModelOpen(true)}
                      className={` relative w-12 p-2 border border-[#cccccc] rounded-full mr-5`}
                    >
                      {/* profile icon  */}
                      <BsPerson className=" w-full h-full text-[#cccccc] shadow-1 rounded-full" />

                      {/* profile dropdown area  */}
                      <AnimatePresence>
                        {isProfileModelOpen && (
                          <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={modalPopupVariant}
                            className="modal-container right-0"
                          >
                            <Link to={"/favorite"}>
                              <li className="modal-item">Favorite</li>
                            </Link>
                            <li className="modal-item">
                              {useInfo?.success ? (
                                <span onClick={handleLogoutClick}>Log out</span>
                              ) : (
                                <Link to={"/sign-in"}>
                                  <span className="w-full block">Sing in</span>
                                </Link>
                              )}
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
