import { AnimatePresence, motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isOpenSidebar } from "../../redux/features/sidebarSlice";
import TvModal from "../modal-components/TvModal";
import MovieModal from "../modal-components/MovieModal";
import { setActivePaginateNumber } from "../../redux/features/paginationSlice";
import { movieDataPathnames, tvDataPathnames } from "../../data/data";
import { stringToLink } from "../../data/share";

const MenuModal = ({
  setIsProfileModelOpen,
  handleMouseLeave,
  isShrink,
  isProfileModelOpen,
  useInfo,
  handleLogoutClick,
  setIsMenuOpen,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = (e, el) => {
    const pathname = e.target.type;
    navigate(`/${pathname}/${stringToLink(el)}?page=1`);

    const type1 = pathname;
    const type2 = el;
    dispatch(setActivePaginateNumber({ type1, type2, num: 1 }));

    dispatch(isOpenSidebar(false));
    setIsMenuOpen(false);
  };

  const containerVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  const parentVariant = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  const childVariant = {
    hide: { opacity: 0 },
    show: {
      duration: 1,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  const titleVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleCloseBurgerMenu = () => {
    dispatch(isOpenSidebar(false));
    setIsMenuOpen(false);
  };

  const handleNavigateToHome = () => {
    dispatch(isOpenSidebar(false));
    setIsMenuOpen(false);
    navigate("/");
  };
  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="exit"
      variants={containerVariant}
      className=" bg-[#25262b] flex flex-col gap-y-5 pt-7 px-10 h-screen font-3 "
    >
      <motion.h1
        variants={titleVariant}
        onClick={handleNavigateToHome}
        className="text-lg uppercase w-fit select-none cursor-pointer"
      >
        home
      </motion.h1>

      {/* profile  */}
      <div>
        <motion.h2 variants={titleVariant} className="text-lg uppercase">
          profile
        </motion.h2>
        <motion.ul variants={parentVariant} className="pl-5 max-w-[200px]">
          <Link to={"/favorite"} className="">
            <motion.li
              variants={childVariant}
              onClick={handleCloseBurgerMenu}
              className="burger-menu-item"
            >
              Favorite
            </motion.li>
          </Link>
          <li className="burger-menu-item">
            {useInfo?.success ? (
              <span onClick={handleLogoutClick}>Log out</span>
            ) : (
              <Link to={"/sign-in"}>
                <span onClick={handleCloseBurgerMenu} className="w-full block">
                  Sing in
                </span>
              </Link>
            )}
          </li>
        </motion.ul>
      </div>

      {/* movies  */}
      <div>
        <motion.h2 variants={titleVariant} className="text-lg uppercase">
          movies
        </motion.h2>
        <motion.ul variants={parentVariant} className="pl-5 max-w-[200px]">
          {movieDataPathnames.links.map((el, index) => {
            return (
              <motion.li
                variants={childVariant}
                onClick={(e) => handleLinkClick(e, el)}
                key={index}
                type="movie"
                className="burger-menu-item"
              >
                {el}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* tv series  */}
      <div>
        <motion.h2 variants={titleVariant} className="text-lg uppercase">
          tv series
        </motion.h2>
        <motion.ul variants={parentVariant} className="pl-5 max-w-[200px]">
          {tvDataPathnames.links.map((el, index) => {
            return (
              <motion.li
                variants={childVariant}
                onClick={(e) => handleLinkClick(e, el)}
                key={index}
                type="tv"
                className="burger-menu-item"
              >
                {el}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default MenuModal;
