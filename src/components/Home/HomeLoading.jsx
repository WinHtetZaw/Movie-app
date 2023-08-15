
const HomeLoading = () => {
  return (
    <>
      <section className="flex mb-10 flex-col gap-5 w-full">
        <h2 className=" w-1/2 skeleton rounded-full h-[12px]"></h2>
        <p className=" skeleton rounded-full h-[12px] w-[50px]"></p>
        <p className=" w-full skeleton rounded-full h-[12px]"></p>
        <p className=" w-[70%] skeleton rounded-full h-[12px]"></p>
        <p className=" w-[30%] skeleton rounded-full h-[12px]"></p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="skeleton rounded-md w-[100px] h-[30px]"></div>
          <div className="skeleton rounded-md w-[100px] h-[30px]"></div>
        </div>
      </section>

      <section className="">
        <div className="flex gap-3 mb-5">
          <div className="skeleton rounded-full h-[14px] w-[80px]"></div>
          <div className="skeleton rounded-full h-[14px] w-[80px]"></div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
            <div className="col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
            <div className="hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
            <div className="hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
            <div className=" hidden sm:block col-span-1">
              <div className="skeleton aspect-[2/3] rounded-lg"></div>
              <p className="skeleton h-[12px] my-3 rounded-full"></p>
              <p className="skeleton h-[12px] rounded-full"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLoading;
