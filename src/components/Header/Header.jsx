import { Link } from "react-router-dom";
import BannerImage from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="bg-[#09080F0D]">
      <div className="max-w-[1240px]  mx-auto bg-[#9538E2] rounded-b-2xl relative">
        <div className="text-center text-white flex flex-col gap-8 pt-6 pb-56">
          <h2 className="text-6xl font-bold w-4/5 mx-auto leading-18">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="w-1/2 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div>
            <Link to="/dashboard">
              <button className="bg-white text-[#9538E2] font-bold py-2 px-6 rounded-4xl cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1065px] absolute top-90 left-40">
          <div className="border-2 rounded-xl border-gray-200 bg-[#FFFFFF4D]">
            <div className="p-4">
              <img
                src={BannerImage}
                alt=""
                className="rounded-xl w-[900px] h-[465px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
