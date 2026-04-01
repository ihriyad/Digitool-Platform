import React from "react";

const CardImg = ({ image, name }) => {
  return (
    <div className="">
      <img
        src={image}
        alt={name}
        className="hover:scale-105 transition duration-300"
      />
    </div>
  );
};

export default CardImg;