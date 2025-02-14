const Footer = () => {
  return (
    <div className="max-w-[1540px] mx-auto bg-white mb-10 pt-10">
      <div className="text-center mb-10">
        <h2 className="mb-4 text-3xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-500 font-semibold border-b border-gray-300 w-3/4 mx-auto pb-10">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <div className="w-3/4 mx-auto flex justify-between text-center">
        <ul className="flex flex-col gap-2 font-semibold text-gray-500">
          <li className="font-bold text-xl text-black">Services</li>
          <li>Product Support</li>
          <li>Order Tracking</li>
          <li>Shipping & Delivery</li>
          <li>Returns</li>
        </ul>

        <ul className="flex flex-col gap-2 font-semibold text-gray-500">
          <li className="font-bold text-xl text-black">Company</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <ul className="flex flex-col gap-2 font-semibold text-gray-500">
          <li className="font-bold text-xl text-black">Legal</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
