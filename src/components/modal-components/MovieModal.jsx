import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const MovieModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    navigate("/movie/popular?page=1");
  };

  return (
    <div
      className=" relative py-5 select-none cursor-pointer"
      onMouseLeave={() => setIsOpen(false)}
      onMouseOver={() => setIsOpen(true)}
    >
      <h1 className="text-lg font-4 font-[500]">Movie</h1>

      {/* dropdown modal  area*/}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-container"
          >
            {/* <Link to={"/movie/popular"}> */}
            <li onClick={handleLinkClick} className="modal-item">
              Popular
            </li>
            {/* </Link> */}
            <Link to={"/movie/now-playing"}>
              <li onClick={handleLinkClick} className="modal-item">
                Now Playing
              </li>
            </Link>
            <Link to={"/movie/upcoming"}>
              <li onClick={handleLinkClick} className="modal-item">
                Up Coming
              </li>
            </Link>
            <Link to={"movie/top-rated"}>
              <li onClick={handleLinkClick} className="modal-item">
                Top Rated
              </li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieModal;
