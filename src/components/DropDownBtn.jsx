import React from "react";

const DropDownBtn = ({
  type = "Anonymous",
  isOpen,
  setIsOpen,
  onBtnClick,
  texts,
  isLoading = true,
}) => {
  console.log("key - ", texts.keys)
  console.log("value - ", texts.values)
  return (
    <div className="relative text-left">
      {/* Dropdown button */}
      <button
        disabled={isLoading}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
        className="inline-flex  capitalize w-full justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-2 ring-white ring-inset "
      >
        {type}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown area  */}
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div className="px-2 py-3  rounded bg-dark-4 text-slate-200 border border-[#fffde4]">
          {/* {texts?.map((text, index) => (
            <button
              key={index}
              onClick={() => onBtnClick(text)}
              className=" py-3 px-2 block w-full text-left cursor-pointer capitalize border-b last:border-b-0 border-b-[#25262b]"
            >
              {text}
            </button>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default DropDownBtn;
