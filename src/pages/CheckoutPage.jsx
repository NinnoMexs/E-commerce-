import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FinishedCheckout from '../components/FinishedCheckout'; // Import the FinishedCheckout component

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // State to track if order is placed

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal Code is required';
    }
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card Number is required';
    }
    if (!formData.expirationDate.trim()) {
      newErrors.expirationDate = 'Expiration Date is required';
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Set isOrderPlaced to true to display the FinishedCheckout component
      setIsOrderPlaced(true);

      // Display "Checkout Complete" message after 5 seconds
      setTimeout(() => {
        toast.success('Checkout Complete!', {
          position: 'top-right',
          autoClose: 3000, // Closes after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        // Redirect to the home page after the toast notification
        setTimeout(() => {
          navigate('/'); 
        }, 4000); 
      }, 5000); 
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        {/* Toast Container for Notifications */}
        <ToastContainer />

        {/* Display FinishedCheckout component if order is placed */}
        {isOrderPlaced && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
            <FinishedCheckout />
          </div>
        )}

        {/* Display the form only if the order is not placed */}
        {!isOrderPlaced && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>
              {/* Display Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 pb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">x{item.quantity}</p>
                  </div>
                ))}
              </div>
              {/* Total Price */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold text-gray-800">Total</p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Customer Information
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                {/* City and Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="10001"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                    )}
                  </div>
                </div>

                {/* Card Number */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                  )}
                </div>

                {/* Expiration Date and CVV */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Expiration Date</label>
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="MM/YY"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.expirationDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.expirationDate}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;