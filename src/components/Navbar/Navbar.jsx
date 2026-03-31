import NavLinks from "./Navlinks";
import { Menu, ShoppingCart } from "lucide-react";

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
  <NavLinks route={route} key={route.id}></NavLinks>
));
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Menu></Menu>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <h1 className="text-[20px] md:text-3xl font-bold bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>
      <div className="navbar-center hidden md:flex gap-4">{Links}</div>
      <div className="navbar-end space-x-2">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCart />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">Login</button>
        <button className="btn btn-primary bg-linear-to-r from-purple-500 to-indigo-500">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
