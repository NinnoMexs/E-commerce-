import React, { useState } from "react";
import AppleButton from "./AppleButton";
import GoogleButton from "./GoogleButton";

function Megamenu3() {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsAppMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsAppMenuOpen(false);
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <nav className="relative">
            {/* Megamenu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-black font-semibold hover:text-orange-600 transition duration-300 py-8">
                Get the app
              </a>

              {/* Mega Menu Dropdown */}
              {isAppMenuOpen && (
                <div className="absolute -left-2 top-15 w-screen bg-white shadow-lg border z-50 transform -translate-x-1/2 py-8">
                  <div className="container mx-auto flex justify-between px-10">
                    {/* Left Section */}
                    <div className="w-1/2 pr-8">
                      <h1 className="text-2xl font-bold mb-4">Get the GevMexs.com app</h1>
                      <p className="text-gray-700 mb-4">
                        Find products, communicate with suppliers, and manage and pay for your orders with the GevMexs.com app anytime, anywhere.
                      </p>
                      <p className="text-blue-500 cursor-pointer ">Learn more</p>
                    </div>

                    {/* Right Section: Buttons */}
                    <div className="w-1/2 flex flex-col items-start space-y-4">
                      <GoogleButton />
                      <AppleButton />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Megamenu3;
