import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch("/pricingData.json")
      .then((res) => res.json())
      .then((data) => setPricingData(data));
  }, []);

  return (
    <div className="max-w-10/12 md:max-w-9/12 mx-auto mb-8 space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-[18px] md:text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
        <p className="text-[14px] md:text-[16px]">Choose the plan that fits your needs.</p>
      </div>

      <div>
        <PricingCard pricingData={pricingData} />
      </div>
    </div>
  );
};

export default Pricing;
