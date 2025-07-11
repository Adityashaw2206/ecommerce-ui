import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Collections from "../pages/Collection/Collections.jsx";
import { ShopContextProvider } from "../Context/ShopContextProvider.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link to='/'><img src={assets.logo} alt="" className="w-25" /></Link>

      {/* search bar */}


      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collections"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex item-center gap-5">
        <img onClick={() => setShowSearch(true)} className="w-6 cursor-pointer" src={assets.search_icon} alt="" />
        <div className="group relative">
          <Link to='/login'>
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute right-0 top-8 bg-white shadow-lg rounded">
            <div className="flex flex-col text-sm gap-2 w-36 py-3 px-5 text-gray-700 rounded">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Orders
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[5px] bottom-[-5px] leading-4 text-center bg-red-500 text-white rounded-full text-[8px] w-4 aspect-square">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)} 
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 h-full bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-64" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img
                src={assets.cross_icon}
                alt="" 
                className="w-5 cursor-pointer hover:bg-gray-400 rounded-full rotate-180"
              />
            </div>
            <NavLink className='border py-2 pl-6 text-gray-600 hover:text-black' to="/" onClick={() => setVisible(false)}>
              Home
            </NavLink>
            <NavLink className='border py-2 pl-6 text-gray-600  hover:text-black ' to="/collections" onClick={() => setVisible(false)}>
              Collections
            </NavLink>
            <NavLink className='border py-2 pl-6 text-gray-600  hover:text-black' to="/about" onClick={() => setVisible(false)}>
              About
            </NavLink>
            <NavLink className='border py-2 pl-6 text-gray-600  hover:text-black' to="/contact" onClick={() => setVisible(false)}>
              Contact
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
