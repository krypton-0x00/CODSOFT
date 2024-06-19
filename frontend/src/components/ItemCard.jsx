import { FaHeart, FaCartPlus } from "react-icons/fa";

const ItemCard = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-transparent  border border-blue-600 shadow-blue-600 p-2  duration-150 hover:scale-105 ">
          <img
            className="w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-white">Product Name</p>
          <p className="mb-4 ml-4 text-xl font-semibold text-white">$399</p>
          <div className="flex justify-evenly text-3xl">
            <div className="hover:text-pink-600">
              <FaCartPlus />
            </div>
            <div className="hover:text-pink-600">
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
