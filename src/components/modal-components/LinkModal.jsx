import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stringToLink } from "../../data/share";
import { useDispatch } from "react-redux";
import { setActivePaginateNumber } from "../../redux/features/paginationSlice";

const LinkModal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLinkClick = (el) => {
    navigate(`/${data?.title.pathname}/${stringToLink(el)}?page=1`);

    const type1 = data?.title.pathname;
    const type2 = el;
    dispatch(setActivePaginateNumber({ type1, type2, num: 1 }));
  };

  return (
    <div
      className=" relative py-5 select-none cursor-pointer"
      onMouseLeave={() => setIsOpen(false)}
      onMouseOver={() => setIsOpen(true)}
    >
      <h1 className="text-lg capitalize font-4 font-[500]">
        {data?.title.name}
      </h1>

      {/* dropdown modal  area*/}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="modal-container"
            >
              {data?.links.map((el, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleLinkClick(el)}
                    className="modal-item"
                  >
                    {el}
                  </li>
                );
              })}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkModal;
