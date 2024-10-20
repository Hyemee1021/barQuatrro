import React from "react";
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="flex flex-col h-[50vh] border-t border-t-solid border-t-grey mt-20">
      {/* Upper Section */}
      <div className="bg-white text-black flex-grow p-6 overflow-hidden">
        <div className="flex justify-between items-center h-full">
          {/* Left Side */}
          <div className="flex flex-col justify-center items-center w-1/2">
            <img
              src={logo} 
              alt="Icon"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full mb-10"
            />
            <p className="mb-10 text-center">Stay Updated with Bar Quattro!</p>
           
            <a href="#subscribe" className="flex items-center mb-4 border-b-2 border-b-black">
              Subscribe Now
              <span className="ml-2">&#8594;</span> 
            </a>
            
          </div>
          {/* Right Side */}
          <div className="flex flex-col justify-center items-center w-1/2">
            <ul className="space-y-4 text-center">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/menu" className="hover:underline">Menu</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-black text-white py-4 flex items-center justify-center flex-none">
        <p className="text-sm">&copy; 2024 Bar Quattro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
