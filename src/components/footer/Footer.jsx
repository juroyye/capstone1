import '../footer/Footer.css'

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white p-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
       
        <div className="text-lg font-bold">En Masse</div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="text-sm text-gray-400">
          © 2024 En Masse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;