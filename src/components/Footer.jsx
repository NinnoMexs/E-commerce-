import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { TiWorld } from 'react-icons/ti';

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-10">
          
          {/* Left Section (Logo & Socials) */}
          <div>
            <div className="flex gap-2  flex-col">
              <div className="text-black font- text-4xl w-15 h-12 flex items-center justify-center rounded-full">
                Mexs
              </div>
              <span className="flex items-center text-gray-600 text-sm"><TiWorld className='text-lg'/> CH, DE</span>
            </div>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="#" className="hover:text-gray-600"><IoLogoInstagram /></a>
              <a href="#" className="hover:text-gray-600"><FaXTwitter /></a>
              <a href="#" className="hover:text-gray-600"><FaFacebook /></a>
            </div>
          </div>
  
          {/* Middle Sections (Links) */}
          <div>
            <h3 className="font-bold">GevMexs</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Job offers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">People</a></li>
              <li><a href="#">Planet</a></li>
              <li><a href="#">Recycling</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold">Buy Products</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">Mice</a></li>
              <li><a href="#">Keyboards</a></li>
              <li><a href="#">Headsets & Earbuds</a></li>
              <li><a href="#">Webcams</a></li>
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Gaming Mice</a></li>
              <li><a href="#">Gaming Keyboards</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold">For Productivity</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">Master Series</a></li>
              <li><a href="#">Ergo Series</a></li>
            </ul>
            <h3 className="font-bold mt-4">For Gaming</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">Astro Gaming</a></li>
              <li><a href="#">Pro Gaming</a></li>
              <li><a href="#">SIM Racing</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold">Support</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">Individual Support</a></li>
              <li><a href="#">Gaming Support</a></li>
              <li><a href="#">Business Support</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <h3 className="font-bold mt-4">Software</h3>
            <ul className="text-gray-600 text-sm space-y-1 mt-2">
              <li><a href="#">GHub for Gaming</a></li>
              <li><a href="#">Options+ for Performance</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm mt-10 border-t pt-6">
          <p>© 2025 GevMexs. All rights reserved</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-black">Terms of Use</a>
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Cookie Settings</a>
            <a href="#" className="hover:text-black">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  