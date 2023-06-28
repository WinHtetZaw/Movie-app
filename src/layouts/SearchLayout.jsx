import { Outlet } from "react-router-dom";

const SearchLayout = () => {
  return (
    <div className=" min-h-screen">
      <Outlet />
    </div>
  );
};

export default SearchLayout;
