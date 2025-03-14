import React, { useState } from "react";
import AppleButton from "./AppleButton";
import GoogleButton from "./GoogleButton";

function Megamenu3mobile() {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsAppMenuOpen(!isAppMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <nav className="relative">
            {/* Megamenu Trigger */}
            <div className="relative">
              <button
                onClick={toggleMenu}
                onMouseEnter={() => setIsAppMenuOpen(true)}
                onMouseLeave={() => setIsAppMenuOpen(false)}
                className="text-black font-semibold hover:text-orange-600 transition duration-300"
              >
                Get the app
              </button>

              {/* Mega Menu Dropdown */}
              {isAppMenuOpen && (
                <div className="absolute left-2/2 top-full max-w-2xl bg-white shadow-lg border-t z-50 transform -translate-x-1/2 rounded-lg mt-2 py-6 px-6">
                  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2">
                      <h1 className="text-xl md:text-2xl font-bold mb-3">Get the GevMexs.com app</h1>
                      <p className="text-gray-700 mb-3">
                        Find products, communicate with suppliers, and manage and pay for your orders with the GevMexs.com app anytime, anywhere.
                      </p>
                      <p className="text-blue-500 cursor-pointer hover:underline">Learn more</p>
                    </div>

                    {/* Right Section: Buttons */}
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-3">
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

export default Megamenu3mobile;
