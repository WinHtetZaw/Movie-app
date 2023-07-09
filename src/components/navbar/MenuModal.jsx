import { AnimatePresence, motion } from "framer-motion";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isOpenSidebar } from "../../redux/features/sidebarSlice";
import TvModal from "../modal-components/TvModal";
import MovieModal from "../modal-components/MovieModal";

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

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.01,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const childVariant = {
    hidden: { y: 20 },
    show: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const handleCloseBurgerMenu = () => {
    dispatch(isOpenSidebar(false));
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e) => {
    // e.stopPropagation();
    dispatch(isOpenSidebar(false));
    setIsMenuOpen(false);
  };
  return (
    <div className=" flex mt-20 h-screen items-center flex-col">
      {/* right bar  */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onMouseLeave={handleMouseLeave}
        onMouseOver={() => setIsProfileModelOpen(true)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={` relative w-16 p-2 ${
          !isShrink ? "text-[#2f274d]" : "text-[#005C97]"
        }  border border-white border-opacity-40 cursor-pointer rounded-full mb-5`}
      >
        {/* profile icon  */}
        <BsPersonCircle className=" w-full h-full shadow-1 rounded-full" />

        {/* profile dropdown area  */}
        <AnimatePresence>
          {isProfileModelOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`font-1 absolute bg-glass-1 -right-[3.6rem] z-10 py-3 px-2 mt-2 w-44 text-slate-700 origin-top-right rounded-md shadow-lg ring-1 ring-[#fffde4] ring-opacity-50  focus:outline-none`}
            >
              {/* <span className="triangle absolute -top-[14.5px] left-[5rem]"></span> */}
              {/* <svg
              onClick={handleProfileClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 right-2 active:scale-90 text-slate-200 bg-gray-800 hover:bg-gray-700 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
              <Link to={"/favorite"}>
                <li
                  onClick={handleCloseBurgerMenu}
                  className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3 border-b border-gray-400 last:border-none"
                >
                  Favorite
                </li>
              </Link>
              <li className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer w-full py-2 px-3 border-b border-gray-400 last:border-none">
                {useInfo?.success ? (
                  <span onClick={handleLogoutClick}>Log out</span>
                ) : (
                  <Link to={"/sign-in"}>
                    <span
                      onClick={handleCloseBurgerMenu}
                      className="w-full block"
                    >
                      Sing in
                    </span>
                  </Link>
                )}
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="show"
        className=" flex items-center justify-center flex-col text-slate-200"
      >
        <Link to={"/"}>
          <motion.h3
            variants={childVariant}
            onClick={() => handleLinkClick()}
            className=" py-5 px-4 w-[10rem] text-center rounded-md text-lg font-semibold"
          >
            Home
          </motion.h3>
        </Link>

        <motion.span
          variants={childVariant}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <MovieModal handleLinkClick={handleLinkClick} />
        </motion.span>

        <motion.span
          variants={childVariant}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <TvModal handleLinkClick={handleLinkClick} />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default MenuModal;
