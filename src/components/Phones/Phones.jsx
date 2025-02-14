import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Phones = () => {
  const allProducts = useLoaderData();

  const phones = allProducts.filter((product) => product.category === "phone");

  return (
    <>
      {phones.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </>
  );
};

export default Phones;
