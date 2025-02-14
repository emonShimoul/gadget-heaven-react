import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-6 pt-6 pb-4">
        <img
          className=" rounded-lg w-[282px] h-[182px]"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col gap-2 ps-4 pb-8">
        <h2 className="text-xl font-semibold">{product_title}</h2>
        <p className="text-base text-gray-500 font-semibold">
          Price: <span>{price}</span>K
        </p>
        <div className="mt-4">
          <Link to={`/product/${product_id}`}>
            <button className="border-2 border-[#9538E2] text-[#9538E2] text-base font-semibold py-1 px-3 rounded-full cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
