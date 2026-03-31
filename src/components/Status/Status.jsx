import React from "react";

const Status = () => {
  return (
    <div className="bg-linear-to-r from-purple-500 to-indigo-500 status-section mt-4">
      {" "}
      <div className="max-w-6/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-10 text-white">
        <div>
          <h2>50K+</h2>
          <p>Active Users</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Premium Tools</p>
        </div>
        <div>
          <h2>4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
