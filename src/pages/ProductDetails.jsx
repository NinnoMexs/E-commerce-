import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../components/products";
import { useCart } from "../components/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-8">Product not found.</div>;
  }

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Handle Add to Cart action
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });

    // Use toast notification
    toast.success(`Added ${quantity} ${product.name}(s) to the cart!`, {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ToastContainer /> {/* This is required for toasts to work */}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Information Section */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description || "No description available."}</p>
            <p className="text-xl font-semibold text-gray-900">${product.price}</p>
          </div>

          {/* Quantity and Buttons */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="block w-24 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Add to Cart
            </button>

            {/* View Cart Button */}
            <Link
              to="/cart"
              className="mt-4 w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex justify-center items-center"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Products Button */}
      <div className="mt-8 text-center">
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
        >
          &larr; Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
