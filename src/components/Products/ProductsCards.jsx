import React from "react";
import CardFeatures from "./CardFeatures";
import CardImg from "./CardImg";

const ProductsCards = ({ product, handleAddToCart }) => {
  const { id, badge, image, name, description, price, type, features } =
    product;

  return (
    <div
      key={id}
      className="card space-y-3 bg-base-100  shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4"
    >
      <div className="flex items-center justify-between">
        <CardImg img={image} name={name}></CardImg>

        <span
          className={`${
            badge == "Popular"
              ? "bg-purple-100 text-purple-600"
              : badge == "New"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
          } badge  p-3 font-medium`}
        >
          {badge}
        </span>
      </div>
      <div className="card-start flex-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{description}</p>
      </div>

      <p className="mt-2 text-xl md:text-2xl font-bold">
        ${price} / {type}
      </p>
      <div className="flex-1">
        <CardFeatures features={features}></CardFeatures>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn mt-4 bg-linear-to-r from-purple-500 to-indigo-500 rounded-4xl text-white p-6"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductsCards;
