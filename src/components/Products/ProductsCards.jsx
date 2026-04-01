import React from 'react';

const ProductsCards = ({product, handleAddToCart}) => {
    return (
         <div key={product.id} className="card bg-base-100 shadow-xl p-4">
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <span className="badge badge-secondary">{product.badge}</span>
              </div>

              <p className="mt-2 text-gray-500">
                ${product.price} / {product.type}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="btn mt-4 bg-linear-to-r from-purple-500 to-pink-500 text-white"
              >
                Buy Now
              </button>
            </div>
    );
};

export default ProductsCards;