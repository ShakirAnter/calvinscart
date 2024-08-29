import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import Button from "./Button";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const AccountDropDown = () => {
    return (
      <div className="relative rounded-lg">
        <button
          className="inline-flex items-center text-sm gap-2 bg-primary"
          onClick={() => setShowAccountOptions(!showAccountOptions)}
        >
          {isLoggedIn ? "Hello" : "Account"}
          <i
            className={`fa-solid ${
              showAccountOptions
                ? "fa-solid fa-caret-up"
                : "fa-solid fa-caret-down"
            }`}
          ></i>
        </button>

        {showAccountOptions && (
          <div className="flex flex-col items-center absolute top-10 right-[-50%] bg-white shadow-md py-4 w-48">
            {!isLoggedIn && (
              <Button
                text="Sign In"
                className="rounded-lg mb-2"
                onClick={() => navigate("/login")}
              />
            )}
            {/* <Link to="/my-account">My Account</Link> */}
            <button className="w-full rounded-none bg-white text-textMuted flex gap-2 items-center ">
              <i className="fa-solid fa-user"></i> My Account
            </button>
            <button className="w-full rounded-none bg-white text-textMuted flex gap-2 items-center ">
              <i className="fa-solid fa-box"></i> Orders
            </button>
            <button className="w-full rounded-none bg-white text-textMuted flex gap-2 items-center ">
              <i className="fa-solid fa-heart"></i> Saved Items
            </button>
            {isLoggedIn && (
              <Button
                text="Log Out"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="mt-2"
              />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-[#0F172A] w-screen">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex flex-col items-center justify-center flex-shrink-0">
            {/* Replace with your logo */}
            <Link to="/">
              <img className="h-[120px] w-[120px]" src={logo} alt="Logo" />
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
          <div className="hidden sm:hidden md:flex lg:flex sm:items-center gap-2  ">
            <AccountDropDown />

            <div className="relative">
              <Link to="/cart" className="text-white inline-flex">
                <i className="fa-solid fa-bag-shopping text-xl transition-none"></i>
              </Link>
              {cartCount > 0 && (
                <span className="absolute top-0 right-[-13px] text-xs bg-red-500 text-white rounded-full px-1 py-0.5">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 md:hidden lg:hidden">
            <AccountDropDown />

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
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
