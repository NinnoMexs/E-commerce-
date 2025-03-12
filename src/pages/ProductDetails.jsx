import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../components/products";
import { useCart } from "../components/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); // Use the addToCart function
  
    const product = products.find((p) => p.id === parseInt(id));
  
    if (!product) {
      return <div className="text-center py-8">Product not found.</div>;
    }
  
    const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value);
      if (value > 0) {
        setQuantity(value);
      }
    };
  
    const handleAddToCart = () => {
      addToCart({ ...product, quantity }); // Add product to cart
      alert(`Added ${quantity} ${product.name}(s) to the cart!`);
    };
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">
              {product.description || "No description available."}
            </p>
            <p className="text-xl font-semibold text-gray-900">${product.price}</p>
  
            <div className="mt-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
  
            <Link
              to="/cart"
              className="mt-4 inline-block text-center w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  