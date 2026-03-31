import React from "react";
import PricingCardInfo from "./PricingCardInfo";

const PricingCard = ({ pricingData }) => {
  return (
    <div
      className="grid 
    gap-6  
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3"
    >
      {pricingData.map((data) => (
        <PricingCardInfo data={data}></PricingCardInfo>
      ))}
    </div>
  );
};

export default PricingCard;
