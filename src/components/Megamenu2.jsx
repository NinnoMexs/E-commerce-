import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { RiExchangeDollarLine, RiShieldCheckLine, RiShipLine } from "react-icons/ri";

const Megamenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Navbar Item */}
      <button  className="text-black  font-semibold px-4 py-4 hover:text-orange-600 transition duration-300">
        Trade Assurance
      </button>

      {/* Mega Menu */}
      {isOpen && (
        <div className="absolute left-2/2 top-15 w-[2000px] bg-white shadow-lg border z-50 
        transform -translate-x-1/2">
          <div className="container mx-auto px-10 py-8 flex items-center">
            
            {/* Left Side: Trade Assurance Info */}
            <div className="w-1/3 pr-10 flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-3">Trade Assurance</h3>
              <p className="text-gray-600 mb-6 text-start text-3xl ">Enjoy protection from payment to delivery.</p>
              <button className="bg-orange-500 text-sm font-semibold text-white px-10 py-2 rounded-full hover:bg-orange-600 transition">
                Learn more
              </button>
            </div>

            {/* Right Side: Grid Layout */}
            <div className="w-2/3 grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="p-4 py-7 bg-gray-100 rounded-lg flex items-center hover:bg-gray-100 cursor-pointer">
                <span className="bg-yellow-400 p-3 rounded-full mr-4"><RiShieldCheckLine /></span>
                <h4 className="font-semibold">Safe & easy payments</h4>
                <FaArrowRight className="ml-10"/>
              </div>
              <div className="p-4 py-7 bg-gray-100 rounded-lg flex items-center hover:bg-gray-100 cursor-pointer">
                <span className="bg-yellow-400 p-3 rounded-full mr-4"><RiExchangeDollarLine /></span>
                <h4 className="font-semibold">Money-back policy</h4>
                <FaArrowRight className="ml-20"/>
              </div>
              <div className="p-4 py-7 bg-gray-100 rounded-lg flex items-center hover:bg-gray-100 cursor-pointer">
                <span className="bg-yellow-400 p-3 rounded-full mr-4"><RiShipLine /></span>
                <h4 className="font-semibold">Shipping & logistics services</h4>
                <FaArrowRight className="ml-10"/>
              </div>
              <div className="p-4 py-7 bg-gray-100 rounded-lg flex items-center hover:bg-gray-100 cursor-pointer">
                <span className="bg-yellow-400 p-3 rounded-full mr-4"><LiaToolsSolid /></span>
                <h4 className="font-semibold">After-sales protections</h4>
                <FaArrowRight className="ml-10"/>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Megamenu2;
