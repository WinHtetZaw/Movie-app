import PopularAtHome from "../components/Home/PopularAtHome";
import TrendingAtHome from "../components/Home/TrendingAtHome";

const Dashboard = () => {
  return (
    <div className="text-slate-50 pt-5">
      <div className="mb-5 md:mb-16">
        <PopularAtHome />
      </div>
      <div className=" mb-16">
        <TrendingAtHome />
      </div>
    </div>
  );
};

export default Dashboard;
