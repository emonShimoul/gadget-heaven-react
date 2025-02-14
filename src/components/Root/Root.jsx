import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <div className="bg-[#09080F0D]">
      <div
        className={`max-w-[1240px] mx-auto pt-2 mt-2 px-6 rounded-t-2xl ${
          isHomePage ? "bg-[#9538E2]" : ""
        }`}
      >
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
