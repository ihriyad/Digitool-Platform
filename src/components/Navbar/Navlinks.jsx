import React from "react";

const Navlinks = ({route}) => {
  return (
    <div className="flex gap-6 list-none text-[16px] md:text-[18px] font-semibold">
      {
        <li>
          <a href={route.path}>{route.name}</a>
        </li>
      }
    </div>
  );
};

export default Navlinks;
