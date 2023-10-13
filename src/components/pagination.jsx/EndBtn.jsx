import React from "react";

const EndBtn = ({ pageNum, handlePaginationBtnClick, totalPages }) => {
  return (
    <button
      disabled={pageNum >= totalPages}
      onClick={() => handlePaginationBtnClick("end")}
      className={`${pageNum < totalPages && "group"} paginate-btn`}
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
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
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
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default EndBtn;
