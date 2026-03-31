import { Check } from "lucide-react";
import React from "react";

const PricingCardFeatures = ({ data , highlight }) => {
  return (
    <div>
      <p className="flex">
        <Check className={`${highlight == true? 'text-white':'text-green-500'}`}></Check>
        {data}
      </p>
    </div>
  );
};

export default PricingCardFeatures;
