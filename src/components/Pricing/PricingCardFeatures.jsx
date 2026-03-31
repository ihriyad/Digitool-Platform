import { Check } from "lucide-react";
import React from "react";

const PricingCardFeatures = ({ data }) => {
  return (
    <div>
      <p className="flex">
        <Check></Check>
        {data}
      </p>
    </div>
  );
};

export default PricingCardFeatures;
