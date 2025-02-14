import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const SmartWatches = () => {
  const allProducts = useLoaderData();

  const smartwatch = allProducts.filter(
    (product) => product.category === "smartwatch"
  );

  return (
    <>
      {smartwatch.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </>
  );
};

export default SmartWatches;
