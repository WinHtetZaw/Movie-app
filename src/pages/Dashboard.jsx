import PopularAtHome from "../components/Home/PopularAtHome";
import TrendingAtHome from "../components/Home/TrendingAtHome";

const Dashboard = () => {
  return (
    <>
      {/* <HomeCard /> */}
      <div className="text-slate-50">
        <div className="relative">
          <PopularAtHome />
        </div>
        {/* <div className="flex py-5 px-3 bg-[#25262b] overflow-hidden">
          <div className=" flex w-full">
            <div className=" w-full italic">
              <p className="">Explore unlimited movies and tv series.</p>
              <p className="hidden sm:block  text-center">
                Explore unlimited movies and tv series.
              </p>
              <p className="  text-right">
                Explore unlimited movies and tv series.
              </p>
            </div>

            <div className=" w-full italic hidden sm:block">
              <p className="">Explore unlimited movies and tv series.</p>
              <p className=" text-center">
                Explore unlimited movies and tv series.
              </p>
              <p className=" text-right">
                Explore unlimited movies and tv series.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <TrendingAtHome />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
