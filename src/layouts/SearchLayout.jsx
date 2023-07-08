import { Outlet } from "react-router-dom";
import GenreSidebar from "../components/GenreSidebar";

const SearchLayout = () => {
  return (
    <div className=" min-h-screen">
      <GenreSidebar/>
      <Outlet />
    </div>
  );
};

export default SearchLayout;
