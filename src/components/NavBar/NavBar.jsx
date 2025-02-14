import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();

  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#7b27c0" : "",
    color: isActive ? "white" : "",
  });

  const isHomePage = location.pathname === "/";
  const links = (
    <>
      <li>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" style={navLinkStyles}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactus" style={navLinkStyles}>
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className={`rounded-2xl ${isHomePage ? "text-white" : "text-black"}`}>
      <div className="navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="text-xl font-bold">Gadget Heaven</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <IoCartOutline className="text-4xl bg-white text-black p-2 rounded-4xl cursor-pointer border border-gray-300" />
          <FaRegHeart className="text-4xl bg-white text-black p-2 rounded-4xl cursor-pointer border border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
