import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { isOpenSidebar } from "../redux/features/sidebarSlice";
import { useGetMovieGenresQuery } from "../redux/services/movieListApi";
import OrangeBtn from "./buttons/OrangeBtn";
import { addGenreId } from "../redux/features/genreSlice";
import InputSearch from "./navbar/InputSearch";
import { RxCrossCircled } from "react-icons/rx";
import { useGetTvGenresQuery } from "../redux/services/tvSeriesApi";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const GenreSidebar = () => {
  // * hooks
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState([]);
  const { data: movieGenreData } = useGetMovieGenresQuery();
  const { data: tvGenreData } = useGetTvGenresQuery();
  const dispatch = useDispatch();
  const location = useLocation();
  const { activeGenreIds } = useSelector((state) => state.genreSlice);
  // activeGenreIds.length > 0 && console.log(activeGenreIds);

  // * variables
  let genres;
  if (location.pathname.includes("tv")) {
    genres = tvGenreData?.genres;
  } else {
    genres = movieGenreData?.genres;
  }

  const isDetail = location.pathname.includes("detail");
  // console.log(isDetail)
  // genres && console.log(data);

  // * handles
  const handleGenreSidebarClick = () => {
    setIsOpen(true);
    dispatch(isOpenSidebar(true));
  };

  const handleGenreClick = (num) => {
    dispatch(addGenreId(num));
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    dispatch(isOpenSidebar(false));
  };

  return (
    <>
      <div
        // style={isDetail && { display: "hidden" }}
        onClick={handleGenreSidebarClick}
        className={`${
          isDetail ? "hidden" : "block"
        } z-40 active:scale-90 fixed top-[100px] left-5 opacity-50 hover:opacity-80 border border-[#ccc] rounded-full p-3 w-fit`}
      >
        <FaArrowAltCircleRight className=" text-[#ccc]" />
      </div>

      <AnimatePresence>
        {/* genre bar modal  */}
        {isOpen && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleCloseClick}
              className=" bg-black bg-opacity-40 z-10 fixed w-screen h-screen "
            ></motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              exit={{
                x: "-100vw",
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="text-[#ccc] fixed overflow-y-scroll scroll-hidden z-50 left-0 top-0 bg-opacity-90 backdrop-blur-sm pt-[120px] h-screen sm:w-[200px] md:w-[300px] w-[70vw] bg-[#25262b]"
            >
              {/* close btn  */}
              <svg
                onClick={handleCloseClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute top-[90px] right-3 active:scale-90 text-[#fffde4] rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <div className=" pb-5">
                <InputSearch placeholderText={"Search"} />
              </div>

              {/* content  */}
              <div className=" border-t-2 border-opacity-30 pt-10 mt-5 border-white text-2xl mb-5 text-center font-serif font-bold text-gray-300">
                <h3>Genres</h3>
              </div>
              {/* <RxCrossCircled
                onClick={() => handleGenreClick(0)}
                className=" mb-3 ml-2 active:scale-90 text-2xl text-[#ccc]"
              /> */}

              {/* <div
                onClick={() => handleGenreClick(0)}
                className="text-sm mb-3 mx-2 border w-fit transition duration-300 rounded-full px-2 py-1 select-none cursor-pointer"
              >
                Clear Filters
              </div> */}
              <ul className=" flex flex-wrap gap-3 text-sm px-2 pb-10">
                {genres?.map((genre, index) => (
                  <li
                    onClick={() => handleGenreClick(genre.id)}
                    className={` ${
                      activeGenreIds.includes(genre.id) &&
                      "border-2 border-[#3da2f1]"
                    } active:scale-90 border w-fit transition duration-300 rounded-full px-2 py-1 select-none cursor-pointer`}
                    key={index}
                  >
                    #{genre.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </>
  );
};

export default GenreSidebar;
