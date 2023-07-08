import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TvModal = () => {
      // * hooks
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // handles
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  return (
    <div
      className=" relative py-5"
      onMouseLeave={handleMouseLeave}
      onMouseOver={() => setIsOpen(true)}
      //   onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="text-lg font-semibold">Tv Series</h1>

      {/* dropdown area  */}
      <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{opacity : 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
          transition={{ duration: 0.2 }}
          className={` font-1 origin-top absolute bg-glass-1 -right-[4rem]  z-10 py-3 px-2 mt-2 w-44 text-slate-800 rounded-md shadow-lg ring-1 ring-[#fffde4] ring-opacity-50  focus:outline-none`}
        >
          <Link to={"/tv/popular"}>
            <li className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3 border-b border-gray-400">
              Popular
            </li>
          </Link>
          <Link to={"/tv/airing-today"}>
            <li className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3 border-b border-gray-400">
              Airing Today
            </li>
          </Link>
          <Link to={"tv/on-the-air"}>
            <li className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3 border-b border-gray-400">
             On The Air
            </li>
          </Link>
          <Link to={"/tv/top-rated"}>
            <li className="hover:bg-black hover:bg-opacity-[0.15] select-none cursor-pointer py-2 px-3">
              Top Rated
            </li>
          </Link>
        </motion.ul>
      )}
      </AnimatePresence>
    </div>
  )
}

export default TvModal