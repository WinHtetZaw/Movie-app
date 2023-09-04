import { Outlet } from "react-router-dom";
import GenreSidebar from "../components/GenreSidebar";

const MovieLayout = () => {


  return (
    <div className="relative min-h-screen max-w-[1280px] overflow-x-hidden">
      <GenreSidebar />
      <Outlet />
    </div>
  );
};

export default MovieLayout;
