import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const TvModal = ({ handleLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className=" relative py-5 select-none cursor-pointer"
      onMouseLeave={handleMouseLeave}
      onMouseOver={() => setIsOpen(true)}
    >
      <h1 className="text-lg font-4 font-[500]">Tv Series</h1>

      {/* dropdown modal area */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-container"
          >
            <Link to={"/tv/popular"}>
              <li onClick={handleLinkClick} className="modal-item">
                Popular
              </li>
            </Link>
            <Link to={"/tv/airing-today"}>
              <li onClick={handleLinkClick} className="modal-item">
                Airing Today
              </li>
            </Link>
            <Link to={"tv/on-the-air"}>
              <li onClick={handleLinkClick} className="modal-item">
                On The Air
              </li>
            </Link>
            <Link to={"/tv/top-rated"}>
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

export default TvModal;
