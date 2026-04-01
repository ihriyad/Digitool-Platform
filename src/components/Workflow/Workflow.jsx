import React from "react";

const Workflow = () => {
  return (
    <div className="text-center text-white bg-purple-500 p-10  text-[18px] space-y-4">
      <h2 className=" text-xl md:text-3xl font-bold">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-[12px] md:text-[16px]">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div className="space-x-3">
        <button className="btn btn-primary  rounded-3xl">
          Explore Products
        </button>
        <button className="btn btn-dash rounded-3xl">
          View Pricing
        </button>
      </div>
      <p className="text-[12px] md:text-[16px]">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Workflow;
