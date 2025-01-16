import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state); // Accessing cart data
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }
  }, [cart]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Left Column: Cart Items */}
          <div className="space-y-8">
            <h1 className="text-4xl  text-center font-bold text-gray-900">Your Cart</h1>
            {cart.map((item, index) => (
              <CartItem key={item.id || index} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Column: Summary */}
          <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 w-full max-w-md mx-auto lg:mx-0 self-start border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Order Summary</h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="flex justify-between">
                <span className="text-lg">Total Items:</span> 
                <span className="font-medium">{cart.length}</span>
              </p>
              <p className="flex justify-between text-xl font-semibold text-gray-900">
                <span>Total Amount:</span> 
                <span className="text-green-500">${totalAmount.toFixed(2)}</span>
              </p>
            </div>

            <button 
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <div className="text-center mt-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-6">Looks like you haven't added anything yet!</p>
          <NavLink to="/">
            <button 
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 text-lg"
            >
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
