import React from "react";

const NavLinks = ({route}) => {
  return (
    <div className="list-none">
      {
        <li>
          <a href={route.path}>{route.name}</a>
        </li>
      }
    </div>
  );
};

export default NavLinks;
