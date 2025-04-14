import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '/Logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-3 backdrop-blur-md bg-white/30 shadow-md z-50 rounded-b-xl font-poppins">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Cervify Logo" className="h-12 w-auto object-contain" />
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-8 text-base font-semibold text-gray-700">
        <a href="/" className="hover:text-blue-600 transition-all">Home</a>
        <a href="/about" className="hover:text-blue-600 transition-all">About</a>
        <a href="/faqs" className="hover:text-blue-600 transition-all">FAQs</a>
      </div>

      {/* Right: Upload + User dropdown */}
      <div className="flex items-center gap-4 relative">
        <button 
          onClick={() => navigate('/upload')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow"
        >
          Upload Photo
        </button>

        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)} 
          className="flex items-center gap-2 bg-white text-gray-800 px-3 py-1.5 rounded-full text-sm border border-gray-300 hover:shadow transition"
        >
          <FaUserCircle className="text-lg text-blue-500" />
          <span className="font-semibold">USER</span>
          <IoIosArrowDown className="text-gray-500" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-14 bg-white border border-gray-200 rounded-md shadow-md py-1 z-50 w-28">
            <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
