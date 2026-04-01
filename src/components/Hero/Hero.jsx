import React from "react";
import banner from '../../assets/banner.png';
import dot from '../../assets/dot.png';
import play from '../../assets/Play.png';
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
      <div className="hero-left text-center pl-3 md:pl-0 md:max-w-3/6 space-y-4">
        <div class="badge badge-info text-blue-900 border-none p-4 font-bold bg-indigo-100">
          <img src={dot} alt="" />
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-2xl md:text-6xl font-extrabold">
          Supercharge Your<br />
          Digital Workflow
        </h1>
        <p className="max-w-7/8 mx-auto text-justify">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products.
        </p>
        <div className="space-x-3">
          <button className="btn btn-primary bg-linear-to-r from-purple-500 to-indigo-500 rounded-3xl">
            Explore Products
          </button>
          <button className="btn btn-dash text-[bg-linear-to-r from-purple-500 to-indigo-500] rounded-3xl">
            <img src={play} alt="" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
