import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Product from "../Product/Product";

const Home = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#9538E2" : "",
    color: isActive ? "white" : "",
  });
  const allProducts = useLoaderData();
  const location = useLocation();

  return (
    <>
      <Header></Header>
      <div className="pt-[380px] pb-12 mb-16 max-w-[1240px] mx-auto">
        <h2 className="text-center font-bold text-4xl mb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex gap-4">
          <div className="w-1/6 flex">
            <div className="w-full bg-white flex flex-col gap-4 items-center py-8 h-fit font-semibold rounded-lg">
              <NavLink
                to="/"
                style={navLinkStyles}
                className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full"
              >
                All Products
              </NavLink>
              <NavLink
                to="/laptops"
                style={navLinkStyles}
                className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full"
              >
                Laptops
              </NavLink>
              <NavLink
                to="/phones"
                style={navLinkStyles}
                className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full"
              >
                Phones
              </NavLink>
              <NavLink
                to="/smartwatches"
                style={navLinkStyles}
                className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full"
              >
                SmartWatches
              </NavLink>
              <NavLink
                to="/accessories"
                style={navLinkStyles}
                className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full"
              >
                Accessories
              </NavLink>
            </div>
          </div>
          <div className="w-5/6 grid lg:grid-cols-3 gap-4">
            {location.pathname === "/" &&
              allProducts.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
