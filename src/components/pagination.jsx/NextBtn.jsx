import React from 'react'
import { useSelector } from 'react-redux';

const NextBtn = ({pageNum,handlePaginationBtnClick,totalPages}) => {

  const { isImgLoading } = useSelector((state) => state.generalSlice);

  return (
    <button
    disabled={pageNum === totalPages || isImgLoading}
    onClick={() => handlePaginationBtnClick("next")}
    className={`${
      pageNum !== totalPages && "group"
    } paginate-btn`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 md:w-7 md:h-7 md:pb-2 absolute translate-x-0 group-hover:translate-x-7 transition-all duration-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 md:w-7 md:h-7 md:pb-2 absolute -translate-x-7 group-hover:translate-x-0 transition-all duration-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>
  )
}

export default NextBtn