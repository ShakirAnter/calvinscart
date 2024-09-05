import React, { useState } from "react";
import logo from "../assets/images/logo1.png";
import CustomInput from "./CustomInput";
import Button from "./Button";

import { API_BASE_URL } from "../config/apiConfig";

import { ToastContainer, toast } from "react-toastify";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const subscribeToNewsLetter = async (e) => {
    // Function to subscribe to NewsLetter

    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    const ACC_TOKEN = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACC_TOKEN}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-[#28292b] w-screen items-center flex-col md:flex-row md:justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-[200px] h-[200px] md:w-[150px] md:h-[150px] mb-5 md:mb-0"
      />
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h2 className="text-3xl">Stay Updated with Our Latest News!</h2>
        <p className="text-lg md:text-base text-textMuted">
          Join our newsletter to receive exclusive promotions, new product
          releases, and early access to sales.
        </p>
        <form
          onSubmit={subscribeToNewsLetter}
          className="w-full flex flex-col items-center justify-center"
        >
          <CustomInput
            type="email"
            icon="fa-solid fa-envelope"
            placeholder="Please type in your email address"
            divClassName="mt-2 w-full"
            inputclassName="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text="Subscribe"
            variant="primar"
            className="mt-3 w-full md:w-3/4"
            onClick={subscribeToNewsLetter}
          />
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
