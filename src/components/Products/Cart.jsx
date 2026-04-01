import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cart, view, handleRemove, total}) => {
    return (
     <>
      {view === "cart" && (
        <div className="bg-base-200 p-6 rounded-xl">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Cart is empty</div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-base-100 p-4 rounded-lg mb-4"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-between font-bold mt-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>

              <button
                onClick={() => toast.success("Proceeding to checkout")}
                className="btn w-full mt-4 bg-linear-to-r from-purple-500 to-pink-500 text-white"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
     </>
    );
};

export default Cart;