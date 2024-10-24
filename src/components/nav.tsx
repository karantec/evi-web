import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white   shadow-xl mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-17 w-17"
              src="/logo.svg" // Replace this with your logo's path
              alt="Logo"
            />
          </div>

          {/* Centered Menu */}
          <div className="flex-grow">
            <div className="flex justify-center space-x-8">
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/product-page"
              >
                Products
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/privacy"
              >
                Policy
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
              href="/contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
