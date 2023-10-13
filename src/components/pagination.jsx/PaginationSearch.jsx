const PaginationSearch = (props) => {
  const { handleFormSubmit, pageNum, totalPages } = props;
  return (
    <div className="text-slate-50 flex items-center justify-between">
      <div className=" flex items-center">
        <h1 className=" mr-3">page : </h1>
        <form
          onSubmit={handleFormSubmit}
          className="border-b-2 border-white overflow-hidden bg-[#25262b]  w-20  flex items-center rounded-sm"
        >
          <input
            className=" w-full outline-none bg-transparent p-2"
            type="number"
            min={1}
            max={totalPages}
            maxLength={4}
            placeholder="0"
          />
          <button
            disabled={pageNum === 0}
            type="submit"
            className="py-2 px-3 bg-gray-600 disabled:opacity-50"
          >
            Go
          </button>
        </form>
        {/* <p>{inputError && inputError}</p> */}
      </div>
      <div className=" whitespace-nowrap w-[4rem] sm:w-[7rem] py-3 mr-5 text-center sm:text-end">
        {pageNum} \ {totalPages}
      </div>
    </div>
  );
};

export default PaginationSearch;
