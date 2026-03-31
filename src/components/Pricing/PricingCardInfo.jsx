
import React from "react";
import PricingCardFeatures from "./PricingCardFeatures";

const PricingCardInfo = ({ data }) => {
  const {
    name,
    description,
    price,
    billing,
    features,
    badge,
    buttonText,
    highlight,
  } = data;
  return (
    <div
      className={`
        ${highlight ==true?
            'bg-[#4F39F6] text-white': 'bg-gray-50'
        }
        rounded-md
        p-6
        relative
        flex flex-col
        space-y-5`}
    >
      <div
        className={`${highlight == true ? "block" : "hidden"}
          badge badge-warning absolute -top-3 left-23 md:left-24 lg:left-20`}
      >
        {badge}
      </div>
     
         <div>
        <h2 className="font-bold text-[20px]">{name}</h2>
        <p className="h-8 text-justify">{description}</p>
      </div>
      <p className="font-bold text-2xl">
        ${price}/<span className="text-[18px] text-gray/50">{billing}</span>
      </p>
      <div className="flex-1">
        {
            features.map(data=><PricingCardFeatures data={data}></PricingCardFeatures>)
        }
      </div>
      <div>
        <button className={`${highlight==true?"bg-white text-[#4F39F6]":'bg-[#4F39F6] text-white'} btn btn-primary w-full rounded-3xl`}>{buttonText}</button>
      </div>
     
    </div>
  );
};

export default PricingCardInfo;
