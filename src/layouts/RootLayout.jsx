import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const { scrollable } = useSelector((state) => state.generalSlice);
  const { isPageLoading } = useSelector((state) => state.generalSlice);
  const location = useLocation();

  return (
    <div
      className={`relative ${
        (openSidebar || !scrollable) && " h-screen overflow-hidden"
      }`}
    >
      {/* {location.pathname !== "/" && <Navbar />} */}
      <Navbar/>
      <main className=" min-h-[80vh] bg-transparent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
