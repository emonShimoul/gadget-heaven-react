import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Accessories = () => {
  const allProducts = useLoaderData();

  const accessory = allProducts.filter(
    (product) => product.category === "accessory"
  );

  return (
    <>
      {accessory.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </>
  );
};

export default Accessories;
