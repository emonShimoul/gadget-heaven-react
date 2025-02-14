import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getCartList, getStoredWishList } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const allProducts = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartList = getCartList();

    const cartProduct = allProducts.filter((product) =>
      storedCartList.includes(product.product_id)
    );
    setCartList(cartProduct);

    // Calculate total price
    const total = cartProduct.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    );
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();

    const wishlistProduct = allProducts.filter((product) =>
      storedWishList.includes(product.product_id)
    );
    setWishList(wishlistProduct);
  }, []);

  // sorting by price
  const handleSort = () => {
    const sortedList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedList);
  };

  return (
    <div>
      <Tabs className="mb-12">
        <div className="bg-[#9538E2] py-10 my-4">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <p className="w-1/2 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <TabList className=" flex justify-center items-center gap-6">
            <Tab className="border border-white text-white px-10 py-1 rounded-full cursor-pointer font-bold">
              Cart
            </Tab>
            <Tab className="border border-white text-white px-10 py-1 rounded-full cursor-pointer font-bold">
              WishList
            </Tab>
          </TabList>
        </div>

        <div className="w-2/3 mx-auto">
          <TabPanel>
            <div className="flex justify-between items-center mt-10">
              <h4 className="text-lg font-bold">Cart</h4>
              <div className="flex gap-4 items-center">
                <h4 className="text-lg font-bold">Total Cost: {totalPrice}</h4>
                <button
                  onClick={handleSort}
                  className="border border-[#9538E2] px-4 py-2 rounded-full text-[#9538E2] font-bold cursor-pointer"
                >
                  Sort by Price
                </button>
                <button className="px-6 py-2 rounded-full bg-[#9538E2] text-white cursor-pointer">
                  Purchase
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {cartList.map((item) => (
                <div
                  key={item.product_id}
                  className="flex justify-between bg-white p-4 rounded-xl"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.product_image}
                      className="w-[200px] h-[124px] rounded-xl"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-xl">
                        {item.product_title}
                      </h4>
                      <p className="text-lg text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-md font-semibold">
                        Price: {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="border p-1 text-red-500 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer">
                    <span>X</span>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between items-center mt-10">
              <h4 className="text-lg font-bold">WishList</h4>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {wishList.map((item) => (
                <div
                  key={item.product_id}
                  className="flex justify-between bg-white p-4 rounded-xl"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.product_image}
                      className="w-[200px] h-[124px] rounded-xl"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-lg">
                        {item.product_title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold">Description: </span>{" "}
                        {item.description}
                      </p>
                      <p className="text-md font-semibold">
                        Price: {item.price}
                      </p>
                      <div>
                        <button className="px-4 py-1 rounded-full bg-[#9538E2] text-white text-sm cursor-pointer">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border p-1 text-red-500 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer">
                    <span>X</span>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Dashboard;
