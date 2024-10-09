import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

import userProfileImage from "../assets/images/user-profile-man.png";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isLoggedIn = localStorage.getItem("token");
  const currentUser = localStorage.getItem("currentUser");
  JSON.parse(currentUser);

  const AccountDropDown = () => {
    return (
      <div className="relative rounded-lg">
        {/* <button
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
        </button> */}

        {isLoggedIn && (
          <div
            onClick={() => setShowAccountOptions(!showAccountOptions)}
            className="border rounded-full w-[50px] h-[50px] bg-textMuted flex items-center justify-center cursor-pointer ml-2"
          >
            {currentUser.profilePicture ? (
              <img
                src={`data:image/jpeg;base64,${currentUser.profilePicture}`}
                className="w-full rounded-full"
                alt="Profile Picture"
              />
            ) : (
              <i className="fa-regular fa-user text-[20px]"></i>
            )}
          </div>
        )}

        {!isLoggedIn && (
          <Button
            text="Get Started"
            onClick={() => (window.location.href = "/signup")}
          />
        )}

        {showAccountOptions && (
          <div className="flex flex-col items-center absolute right-[-50%] bg-white shadow-md py-4 w-[200px] rounded-lg">
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
    <nav className="bg-[#0F172A] w-screen sticky-nav">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex flex-col items-center justify-center flex-shrink-0">
            {/* Replace with your logo */}
            <a href="/">
              <img className="h-[120px] w-[120px]" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden sm:hidden md:flex sm:space-x-8 border px-5 py-3 bg-textMuted rounded-full">
            <a
              href="/"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium  hover:text-inherit"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-inherit"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-inherit"
            >
              Contact
            </a>
            <a
              href="/company"
              className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-inherit"
            >
              Company
            </a>
          </div>
          <div className="hidden sm:hidden md:flex lg:flex sm:items-center gap-2">
            <div className="relative">
              <a href="/cart" className="text-white inline-flex">
                <i className="fa-solid fa-bag-shopping text-xl transition-none"></i>
              </a>
              {cartCount > 0 && (
                <span className="absolute top-0 right-[-13px] text-xs bg-red-500 text-white rounded-full px-1 py-0.5">
                  {cartCount}
                </span>
              )}
            </div>
            <AccountDropDown />
          </div>

          <div className="flex items-center justify-between gap-4 md:hidden lg:hidden">
            <div className="relative">
              <a href="/cart" className="text-white inline-flex">
                <i className="fa-solid fa-bag-shopping text-xl transition-none"></i>
              </a>
              {cartCount > 0 && (
                <span className="absolute top-0 right-[-13px] text-xs bg-red-500 text-white rounded-full px-1 py-0.5">
                  {cartCount}
                </span>
              )}
            </div>

            <div
              className="md:hidden lg:hidden cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              <i className="fa-solid fa-bars text-3xl"></i>
            </div>

            <AccountDropDown />

            {showNav && (
              <div
                className="absolute top-16 right-0 w-full bg-secondary shadow-md py-4 md:hidden lg:hidden"
                style={{ animation: "slideIn 0.5s" }}
              >
                <a
                  href="/"
                  className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
                >
                  Contact
                </a>
                <a
                  href="/company"
                  className="block text-white px-4 py-2 text-sm font-medium hover:text-black"
                >
                  Company
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
