import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-4 flex justify-between items-center bg-gradient-to-r from-white/30 via-blue-100/30 to-white/20 backdrop-blur-lg shadow-md z-50">
      
      {/* Logo Section */}
      <Link to="/">
        <img src="/Logo.png" alt="Cervify Logo" className="h-12 w-auto object-contain"/>
        </Link>

      {/* Center Nav Links */}
      <div className="flex-1 flex justify-center items-center space-x-8 text-gray-800 font-medium">
        <Link to="/" className="hover:text-blue-700 hover:drop-shadow-md transition duration-200">Home</Link>
        <Link to="/about" className="hover:text-blue-700 hover:drop-shadow-md transition duration-200">About</Link>
        <Link to="/faq" className="hover:text-blue-700 hover:drop-shadow-md transition duration-200">FAQs</Link>
      </div>

      {/* User Dropdown Menu */}
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center gap-2 text-gray-800 hover:text-blue-700 hover:drop-shadow-md transition duration-200">
          <UserCircleIcon className="h-6 w-6 text-purple-600" />
          <span>USER</span>
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-sm rounded ${active ? "bg-blue-100" : ""}`}
                >
                  Login
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/signup"
                  className={`block px-4 py-2 text-sm rounded ${active ? "bg-blue-100" : ""}`}
                >
                  Sign Up
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </nav>
  );
};

export default Navbar;
