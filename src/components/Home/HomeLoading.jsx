const HomeLoading = () => {
  return (
    <>
      <section className="flex mb-10 flex-col gap-5 w-full mt-8">
        <h2 className=" w-2/3 skeleton rounded-full h-[24px] mb-5"></h2>
        <p className=" skeleton rounded-full h-[16px] w-[100px]"></p>
        <p className=" w-full skeleton rounded-full h-[16px]"></p>
        <p className=" w-full sm:w-[70%] skeleton rounded-full h-[16px]"></p>
        <p className=" w-full sm:w-[30%] skeleton rounded-full h-[16px]"></p>
        <div className="flex sm:flex-row gap-3">
          <div className="skeleton rounded-md w-[120px] h-[30px]"></div>
          <div className="skeleton rounded-md w-[120px] h-[30px]"></div>
        </div>
      </section>

      <section>
        <div className="flex gap-3 mb-5">
          <div className="skeleton rounded-full h-[20px] w-[100px]"></div>
          <div className="skeleton rounded-full h-[20px] w-[100px]"></div>
        </div>
        <div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 mb-3">
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
            <div className="hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
            <div className="hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
            <div className=" hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[16px] my-3 rounded-full"></p>
              <p className="skeleton h-[16px] rounded-full"></p>
            </div>
          </div>
        </div>
        <div className="skeleton rounded-md w-[150px] h-[10px] mx-auto"></div>
      </section>
    </>
  );
};

export default HomeLoading;
