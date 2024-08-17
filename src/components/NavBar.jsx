import React, { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="bg-[#0F172A] w-screen">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex flex-col justify-center flex-shrink-0">
            {/* Replace with your logo */}
            <Link to="/">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:hidden md:flex lg:flex sm:space-x-8">
            <Link
              to="/"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/company"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Company
            </Link>
          </div>
          <div className="hidden sm:hidden md:flex lg:flex sm:items-center  ">
            <Link
              to="/login"
              className="text-white inline-flex gap-2 items-center px-3 py-2 text-sm font-medium rounded-lg"
            >
              Log in
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div
            className="md:hidden lg:hidden cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          >
            <i className="fa-solid fa-bars text-3xl"></i>
          </div>
          {showNav && (
            <div
              className="absolute top-16 right-0 w-full bg-secondary shadow-md py-4 md:hidden lg:hidden"
              style={{ animation: "slideIn 0.5s" }}
            >
              <Link
                to="/"
                className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
              >
                Contact
              </Link>
              <Link
                to="/company"
                className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
              >
                Company
              </Link>
              <Link
                to="/login"
                className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
              >
                Log in
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
