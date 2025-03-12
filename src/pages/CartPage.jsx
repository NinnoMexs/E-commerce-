import React from 'react'
import { useCart } from '../components/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
    
    console.log("Cart in CartPage:", cart)
    return (
      <div className="container mx-auto px-4 py-7">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
              <Link
                to="/"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default CartPage;