import React from 'react';
import Logo from "../assets/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart}=useSelector((state)=>state);

  return (
    <div className="bg-slate-100 shadow-lg font-extrabold">
      <div className="flex flex-row justify-between items-center px-6 py-4">
        
        
        
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>






        {/* Navigation Links */}
        <div className="flex items-center space-x-6">



          {/* Home Link */}
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-lg font-medium ${isActive ? 'text-black' : 'text-gray-500'} hover:text-black transition duration-200`
            }
          >
            Home
          </NavLink>





          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <div className="text-gray-500 hover:text-black transition duration-200 text-xl">
              <FaShoppingCart />
            </div>




            {/* Cart Badge */}
            <span className="absolute top-0 right-0  text-white text-xs rounded-full h-4 w-4 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
               {
                 cart.length>0 &&
                 (
                  <span 
                  className="absolute top-0 right-0  text-white  bg-red-400 text-xs rounded-full h-4 w-4 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                   {cart.length}
                  </span>
                 )
                 
               }
            </span>
          </NavLink>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
