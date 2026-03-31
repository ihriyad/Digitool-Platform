import React from "react";

const Workflow = () => {
  return (
    <div className="text-center bg-linear-to-r from-purple-500 to-indigo-500 p-10  text-[18px] space-y-4">
      <h2 className="text-white text-3xl font-bold">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-white/70">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div className="space-x-3">
        <button className="btn btn-primary bg-white text-blue-600  rounded-3xl">
          Explore Products
        </button>
        <button className="btn btn-dash text-white rounded-3xl">
          View Pricing
        </button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Workflow;
