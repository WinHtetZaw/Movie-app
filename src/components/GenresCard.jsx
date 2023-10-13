import { useEffect, useRef, useState } from "react";
import { useGetMovieGenresQuery } from "../redux/services/movieListApi";
import { useGetTvGenresQuery } from "../redux/services/tvSeriesApi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addGenreId } from "../redux/features/genreSlice";
import useIsDetail from "../hooks/useIsDetail";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const GenresCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: movieGenreData } = useGetMovieGenresQuery();
  const { data: tvGenreData } = useGetTvGenresQuery();
  const dispatch = useDispatch();
  const location = useLocation();
  const { activeGenreIds } = useSelector((state) => state.genreSlice);
  const isDetail = useIsDetail();

  // * variables
  let genres;
  if (location.pathname.includes("tv")) {
    genres = tvGenreData?.genres;
  } else {
    genres = movieGenreData?.genres;
  }

  const handleGenreClick = (num) => {
    dispatch(addGenreId(num));
  };

  return (
    <>
      {!isDetail && (
        // bg-[#34495e]
        <>
          <div className="text-[#eee] max-sm:hidden text-sm h-fit pt-5 sm:mt-10 padding-x">
            <section className="bg-slate-700 rounded-md p-2">
              <div className=" py-5 sm:py-10 padding-x h-[140px] sm:h-fit overflow-x-auto">
                <ul className=" flex items-center flex-wrap gap-3">
                  <li
                    onClick={() => handleGenreClick(0)}
                    className={`genre-tag-item hvr-wobble-top ${
                      activeGenreIds.length === 0 && "border-2 border-[#3da2f1]"
                    }`}
                  >
                    all
                  </li>
                  {genres?.map((genre, index) => (
                    <li
                      onClick={() => handleGenreClick(genre.id)}
                      className={` ${
                        activeGenreIds.includes(genre.id) &&
                        "border-2 border-[#3da2f1]"
                      } genre-tag-item hvr-wobble-top`}
                      key={index}
                    >
                      #{genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
          <div className="text-[#eee] text-sm h-fit pt-5 sm:mt-10 padding-x sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex gap-2 items-center justify-between bg-slate-700 hover:bg-slate-400 hover:text-black transition-all duration-200 text-[#eee] py-2 px-5 rounded-md mx-auto w-full whitespace-nowrap"
            >
              <h2 className=" tracking-widest uppercase">genres</h2>
              <MdOutlineKeyboardArrowDown className=" text-xl mb-[2px]" />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.section
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: 1,
                    transition: {
                      type: "spring",
                      duration: 0.5,
                      ease: "easeOut",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  exit={{
                    scaleY: 0,
                    transition: { duration: 0.3, ease: "easeIn" },
                  }}
                  className="bg-slate-700 rounded-md p-5 mt-3 origin-top"
                >
                  <div className=" ">
                    <ul className=" flex items-center flex-wrap gap-3">
                      <li
                        onClick={() => handleGenreClick(0)}
                        className={`genre-tag-item hvr-wobble-top ${
                          activeGenreIds.length === 0 &&
                          "border-2 border-[#3da2f1]"
                        }`}
                      >
                        all
                      </li>
                      {genres?.map((genre, index) => (
                        <li
                          onClick={() => handleGenreClick(genre.id)}
                          className={` ${
                            activeGenreIds.includes(genre.id) &&
                            "border-2 border-[#3da2f1]"
                          } genre-tag-item hvr-wobble-top`}
                          key={index}
                        >
                          #{genre.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};

export default GenresCard;
