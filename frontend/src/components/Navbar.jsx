import { FaHome, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="text-[0.8rem] font-poppins flex justify-center items-center py-8 font-semibold">
      <div className="relative ">
        <div className="absolute inset-0 bg-blue-600 rounded-xl blur opacity-75 bg-gradient-to-r from-blue-600 to-pink-600 hover:opacity-100 transition duration-200"></div>
        <div className="relative text-3xl flex bg-black rounded-xl gap-3 h-12 w-[70vw]   items-center justify-evenly px-2 ">
          <Link to="/">
            <div
              id="nav-item"
              className="hover:text-pink-600 transition-all cursor-pointer"
            >
              <FaHome />
            </div>
          </Link>
          <div
            id="nav-item"
            className="hover:text-pink-600 transition-all cursor-pointer"
          >
            <FaHeart />
          </div>
          <Link to="/cart">
            <div
              id="nav-item"
              className="hover:text-pink-600 transition-all cursor-pointer"
            >
              <FaShoppingCart />
            </div>
          </Link>
          {isLoggedIn ? (
            <div
              id="nav-item"
              className="hover:text-pink-600 transition-all cursor-pointer"
            >
              <FaUserCircle />
            </div>
          ) : (
            <Link to="/login">
              <button className="text-sm font-normal transition-all rounded-md px-2 py-1 border border-pink-600 text-white   hover:bg-pink-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
