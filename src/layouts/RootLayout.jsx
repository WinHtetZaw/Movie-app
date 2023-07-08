import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const { scrollable } = useSelector((state) => state.generalSlice);
  const { isPageLoading } = useSelector((state) => state.generalSlice);

  return (
    <div
      className={`relative max-w-[1280px] mx-auto ${
        (openSidebar || !scrollable) && " h-screen overflow-hidden"
      }`}
    >
      <nav>
        <Navbar />
      </nav>
      <main className=" min-h-[80vh] bg-transparent">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
