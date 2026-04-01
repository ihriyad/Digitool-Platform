import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "./Toggle";
import ProductsCards from "./ProductsCards";
import Cart from "./Cart";

const productsData = [
  {
    id: 1,
    name: "AI Writing Pro",
    price: 29,
    type: "monthly",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Design Templates Pack",
    price: 49,
    type: "one-time",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    price: 19,
    type: "monthly",
    badge: "New",
  },
  {
    id: 4,
    name: "Automation Toolkit",
    price: 79,
    type: "monthly",
    badge: "Popular",
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    price: 15,
    type: "one-time",
    badge: "New",
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    price: 39,
    type: "monthly",
    badge: "Best Seller",
  },
  {
    id: 7,
    name: "SEO Booster",
    price: 25,
    type: "monthly",
    badge: "Popular",
  },
  {
    id: 8,
    name: "UI Kit Pro",
    price: 45,
    type: "one-time",
    badge: "New",
  },
  {
    id: 9,
    name: "Video Editing Pack",
    price: 59,
    type: "one-time",
    badge: "Best Seller",
  },
  {
    id: 10,
    name: "Marketing Toolkit",
    price: 35,
    type: "monthly",
    badge: "Popular",
  },
];

const ProductCards = () => {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item, i) => i !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <ToastContainer />

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <Toggle setView={setView} cart={cart} view={view}></Toggle>
      </div>

      {/* Products */}
      {view === "products" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <ProductsCards
              product={product}
              handleAddToCart={handleAddToCart}
            ></ProductsCards>
          ))}
        </div>
      )}

      {/* Cart */}

      <Cart
        view={view}
        total={total}
        handleRemove={handleRemove}
        cart={cart}
      ></Cart>
    </div>
  );
};

export default ProductCards;
