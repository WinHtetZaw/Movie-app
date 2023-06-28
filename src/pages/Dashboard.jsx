import PopularAtHome from "../components/Home/PopularAtHome";
import TrendingAtHome from "../components/Home/TrendingAtHome";

const Dashboard = () => {
  return (
    <div className="text-slate-50 pt-10 md:pt-16">
      <div className="relative mb-10 md:mb-16">
        <PopularAtHome />
      </div>
      <div className=" mb-10 md:mb-16">
        <TrendingAtHome />
      </div>
    </div>
  );
};

export default Dashboard;
