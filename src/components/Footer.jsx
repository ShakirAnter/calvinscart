import React from "react";

import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="w-full border-b flex flex-col md:flex-row items-center justify-between p-5">
        <p>Get connected with us on social networks:</p>
        <div className="flex items-center mt-3 md:mt-0 justify-between gap-4 p-2">
          <i className="fa-brands fa-facebook cursor-pointer"></i>
          <i className="fa-brands fa-instagram cursor-pointer"></i>
          <i className="fa-brands fa-linkedin cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter cursor-pointer"></i>
        </div>
      </div>
      <div className="px-20 py-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo */}
        <div className="col-span-1 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
          {/* <p>Shop with ease, smile with joy!</p> */}
        </div>
        {/* Column 2: Products */}
        <div className="col-span-1">
          <h5>Products</h5>
          <ul>
            <li>
              <Link>Product 1</Link>
            </li>
            <li>
              <Link>Product 2</Link>
            </li>
            <li>
              <Link>Product 3</Link>
            </li>
          </ul>
        </div>
        {/* Column 3: Links */}
        <div className="col-span-1">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <Link>Link 1</Link>
            </li>
            <li>
              <Link>Link 2</Link>
            </li>
            <li>
              <Link>Link 3</Link>
            </li>
          </ul>
        </div>
        {/* Column 4: Contact */}
        <div className="col-span-1">
          <h5>Contact Us</h5>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: 555-555-5555</p>
          <p>
            Email: <Link to="mailto:info@example.com">info@example.com</Link>
          </p>
        </div>
      </div>

      <div className="w-screen bg-primary p-5">
        <p>
          &copy; Copyright 2024.{" "}
          <strong className="underline">Calvin's Cart</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
