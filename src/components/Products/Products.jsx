import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "./Toggle";
import ProductsCards from "./ProductsCards";
import Cart from "./Cart";

import { useEffect, useState } from "react";

const ProductCards = () => {
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

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
    <div className="p-4 space-y-3">
      <ToastContainer />
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-5 mb-2">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

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
       <div className="text-center mt-16">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get Started in 3 Steps
              </h2>
              <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
    </div>
  );
};

export default ProductCards;
