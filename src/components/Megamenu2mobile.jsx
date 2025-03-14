import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { RiExchangeDollarLine, RiShieldCheckLine, RiShipLine } from "react-icons/ri";

const Megamenu2mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Navbar Item */}
      <button className="text-black font-semibold px-4 py-2 hover:text-orange-600 transition duration-300">
        Trade Assurance
      </button>

      {/* Mega Menu */}
      {isOpen && (
        <div className="absolute left-1/2 top-full w-full max-w-4xl bg-white shadow-lg border-t z-50 
        transform -translate-x-1/2 rounded-lg mt-2">
          <div className="px-6 py-6 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            
            {/* Left Side: Trade Assurance Info */}
            <div className="w-full md:w-1/3 flex flex-col items-start text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Trade Assurance</h3>
              <p className="text-gray-600 mb-6">Enjoy protection from payment to delivery.</p>
              <button className="bg-orange-500 text-sm font-semibold text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Learn more
              </button>
            </div>

            {/* Right Side: Grid Layout */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: RiShieldCheckLine, text: "Safe & easy payments" },
                { icon: RiExchangeDollarLine, text: "Money-back policy" },
                { icon: RiShipLine, text: "Shipping & logistics services" },
                { icon: LiaToolsSolid, text: "After-sales protections" },
              ].map((item, index) => (
                <div key={index} className="p-4 py-6 bg-gray-100 rounded-lg flex items-center hover:bg-gray-200 transition cursor-pointer">
                  <span className="bg-yellow-400 p-3 rounded-full mr-4 text-white text-lg">
                    {React.createElement(item.icon)}
                  </span>
                  <h4 className="font-semibold flex-1">{item.text}</h4>
                  <FaArrowRight className="text-gray-600" />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Megamenu2mobile;
