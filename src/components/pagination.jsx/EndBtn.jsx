import React from 'react'

const EndBtn = ({pageNum,handlePaginationBtnClick,totalPages}) => {
  return (
    <button
                disabled={pageNum === totalPages}
                onClick={() => handlePaginationBtnClick("end")}
                className={`${
                  pageNum !== totalPages && "group"
                } overflow-hidden  relative justify-center w-10 h-8 active:scale-90 bg-transparent disabled:opacity-50 flex items-center border-b-2 border-[#fffde4] text-gray-200 py-2 cursor-pointer transition duration-300`}
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
  )
}

export default EndBtn