import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

function LogiIDDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Icon */}
      <button
        onClick={toggleDropdown}
        className="text-gray-800 hover:text-blue-500 focus:outline-none"
      >
        <AiOutlineUser className="w-6 h-6" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute -right-8 top-12 mt-2 w-64 bg-white rounded-lg shadow-xl py-4 px-6">
          {/* Header Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              One account is enough
            </h3>
            <p className="text-sm text-gray-600 mt-1 font-semibold">
              With Mexs ID, you get access to your Logitech account and much more.
            </p>
          </div>

          {/* Buttons */}
          <button
            className="w-full bg-green-600 font-semibold text-white py-2 rounded-full hover:bg-green-400 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              alert('Register clicked');
              setIsDropdownOpen(false); // Close dropdown after clicking
            }}
          >
            REGISTER
          </button>

          <button
            className="w-full bg-black font-semibold text-white py-2 rounded-full hover:bg-stone-800 transition-colors duration-300 mt-3 cursor-pointer"
            onClick={() => {
              alert('Create Account clicked');
              setIsDropdownOpen(false); // Close dropdown after clicking
            }}
          >
            CREATE ACCOUNT
          </button>

          {/* Secondary Link */}
          <a
            href="/logi-id-info"
            className="block text-center text-sm text-blue-500 hover:text-blue-700 mt-3 cursor-pointer"
            onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking
          >
            INFO ABOUT LOGI ID
          </a>
        </div>
      )}
    </div>
  );
}

export default LogiIDDropdown;