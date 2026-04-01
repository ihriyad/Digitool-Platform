import React from 'react';

const Toggle = ({setView, cart, view}) => {
    return (
       <div className="bg-gray-200 rounded-full p-1 flex">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full ${
              view === "products" ? "bg-purple-600 text-white" : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full ${
              view === "cart" ? "bg-purple-600 text-white" : ""
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
    );
};

export default Toggle;