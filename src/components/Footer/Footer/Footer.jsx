import React from "react";
import FooterProduct from "./FooterProduct";
import FooterCompany from "./FooterCompany";
import FooterResource from "./FooterResource";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white p-10">
      <div
        className="grid place-items-center
        grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        gap-10 border-2 border-gray-500 rounded-2xl p-4"
      >
        <div className="footer-start">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">
            DigiTools
          </h1>
          <p className="text-white/50 text-[14px]">
            Premium digital tools for creators, professionals, and
            businesses.Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <FooterProduct></FooterProduct>
        </div>
        <div>
          <FooterCompany></FooterCompany>
        </div>
        <div>
          <FooterResource></FooterResource>
        </div>
        <div className="footer-end">
          <FooterSocial></FooterSocial>
        </div>
      </div>
      <FooterBottom></FooterBottom>
    </div>
  );
};

export default Footer;
