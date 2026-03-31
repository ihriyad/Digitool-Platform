import React from "react";

const FooterSocial = () => {
  return (
    <div>
      <h2>Social Links</h2>
      <ul className="flex gap-4 mt-3">
        <li>
          <a href="">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-instagram text-2xl"></i>{" "}
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-twitter text-2xl"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
