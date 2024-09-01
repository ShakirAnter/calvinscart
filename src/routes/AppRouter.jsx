import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"; // Optional: a 404 page
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import SignleCategory from "../pages/SignleCategory";
import SignleProduct from "../pages/SignleProduct";
import Cart from "../pages/Cart";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories/:categoryId" element={<SignleCategory />} />
        <Route path="/products/:productId" element={<SignleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
