import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { Menu, ShoppingCart, X } from "lucide-react";

const navItems = [
  {
    id: 1,
    name: "Products",
    path: "/",
  },
  {
    id: 2,
    name: "Features",
    path: "/",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/",
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/",
  },
  {
    id: 5,
    name: "FAQ",
    path: "/",
  },
];
const Links = navItems.map((route) => (
  <Navlinks route={route} key={route.id}></Navlinks>
));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div
            className="cursor-pointer md:hidden relative"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}

            {open && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg p-4 space-y-3 w-40">
                {Links}
              </ul>
            )}
          </div>
        </div>
        <h2
          className={`${open ? "hidden" : "block"} text-[#4f39f6] text-2xl md:text-3xl font-bold`}
        >
          DigiTools
        </h2>
      </div>
      <div className="hidden md:block md:flex gap-5">{Links}</div>
      <div className="flex items-center gap-4">
        <ShoppingCart></ShoppingCart>
        <h2 className="font-bold">Login</h2>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
