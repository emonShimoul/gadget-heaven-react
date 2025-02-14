import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Laptops = () => {
  const allProducts = useLoaderData();

  const laptops = allProducts.filter(
    (product) => product.category === "laptop"
  );

  return (
    <>
      {laptops.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </>
  );
};

export default Laptops;
