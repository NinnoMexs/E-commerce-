import React, { useState } from 'react';
import { IoLogoElectron } from 'react-icons/io5';
import { TiWorld } from 'react-icons/ti';
import { FaBars, FaRegHeart, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import MegaMenu4 from './Megamenu4';
import SearchInput from './SearchInput'
import { AiOutlineUser } from 'react-icons/ai';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import LogiIDDropdown from './LogIDDropdown';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import Megamenu2 from './Megamenu2';
import Megamenu3 from './Megamenu3';
import Megamenu2mobile from './Megamenu2mobile';
import Megamenu3mobile from './Megamenu3mobile';

function Navbar() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Upper Navbar */}
      <div className="flex justify-between bg-gray-100 px-4 sm:px-11 py-3 text-sm font-semibold text-gray-500 ">
        {/* Left Side: Navigation Links */}
        <ul className="hidden sm:flex">
          <li className="px-3 text-black cursor-pointer">GevMexs</li>
          <li className="flex items-center px-3 border-x-1 hover:text-black cursor-pointer">
            GevMexs
            <IoLogoElectron className="text-xl" />
          </li>
          <li className="px-3 border-r-1 hover:text-black cursor-pointer">Business</li>
          <li className="px-3 hover:text-black cursor-pointer">Education</li>
        </ul>

        {/* Right Side: Support and Language */}
        <ul className="flex">
          <li className="px-3 border-r-2 cursor-pointer hover:text-black">Support</li>
          <li
            className="flex items-center px-3 cursor-pointer relative"
            onClick={toggleLanguageDropdown}
          >
            <span className="pr-2 text-xl">
              <TiWorld />
            </span>
            CH, DE
            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-42 w-24 bg-white rounded-lg shadow-lg py-2 z-2">
                <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  English
                </div>
                <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  Deutsch
                </div>
                <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  Français
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-blue-500 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li className="text-black cursor-pointer">GevMexs</li>
            <li className="flex items-center cursor-pointer">
              GevMexs
              <IoLogoElectron className="text-xl" />
            </li>
            <li className="cursor-pointer">Business</li>
            <li className="cursor-pointer">Education</li>
          </ul>
        </div>
      )}

<div>
      <div className="flex justify-between items-center p-4 shadow">
        {/* Logo and Hamburger Menu (Mobile) */}
        <div className="flex items-center">
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <Link to={"/"}>
          <h1 className="px-7 font-semibold text-5xl cursor-pointer">GevMexs</h1>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex text-xl items-center">
          <li className="px-3 text-center cursor-pointer"><Megamenu2/></li>
          <li className="px-3 cursor-pointer"><Megamenu3 /></li>
          <li className="px-3 cursor-pointer">Offers</li>
        </ul>

        {/* Right Side Icons (Desktop) */}
        <ul className="hidden md:flex text-md items-center">
          <li className="px-5 bg-slate-200 pl-20 py-2 rounded-full">
            <SearchInput />
          </li>
          <li className="px-5">
            <FaRegHeart />
          </li>
          <li className="px-3 z-1">
            <LogiIDDropdown />
          </li>
           <Link to="/cart" className="relative text-3xl hover:text-gray-300">
        🛒
        {/* Cart Badge */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cart.length}
        </span>
      </Link>
        </ul>

        {/* Right Side Icons (Mobile) */}
        <ul className="flex md:hidden text-md items-center">
        <Link to="/cart" className="relative text-3xl hover:text-gray-300">
        🛒
        {/* Cart Badge */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cart.length}
        </span>
      </Link>
        </ul>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-lg`}
      >
        <ul className="flex flex-col text-xl p-4 ">
          <li className="py-2"><Megamenu2mobile /></li>
          <li className="py-2"><Megamenu3mobile /></li>
          <li className="py-2">Offers</li>
          <li className="py-2 px-5 bg-slate-200 rounded-full">
            <SearchInput />
          </li>
          <li className="py-2">
            <FaRegHeart />
          </li>
          <li className="py-2 z-1">
            <LogiIDDropdown />
          </li>
        </ul>
      </div>
      <MegaMenu4 />
    </div>
    </div>
    
  );
}

export default Navbar;