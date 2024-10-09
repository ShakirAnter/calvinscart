// src/pages/Contact.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar";

import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { toast } from "react-toastify";
import { API_BASE_URL } from "../config/apiConfig";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      toast.error("Please fill in all fields!");
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      toast.error("Invalid email address!");
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      toast.error("Invalid phone number! Please enter a 10-digit number.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/email/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "We have recieved your message and we shall reply to you as soon as possible."
        );
      } else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div>
      <NavBar />

      <div className="p-10 bg-primary">
        <h1 className="text-4xl font-bold">#Contact Us</h1>
        <p>Get in touch with us by contacting us through the form below.</p>
      </div>

      <div className="flex flex-col py-20 md:flex-row">
        <div className="w-full px-10 py-10">
          <p className="text-start mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic
            tempora eos sit distinctio quidem pariatur quas ab! Nesciunt,
            blanditiis.
          </p>

          <div className="flex flex-row items-start">
            <ul className="flex flex-col items-start text-start leading-10">
              <li>
                <i className="fa-solid fa-envelope"></i> shakiranter@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +256 778401610
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i> 77 Massachusetts
                Ave, Cambridge MA 02139, United States
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full px-10">
          <form
            onSubmit={sendEmail}
            className="flex flex-col items-start leading-10"
          >
            <label htmlFor="">Your Name</label>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              divClassName="w-full"
              // inputclassName="border"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="">Email</label>
            <CustomInput
              type="email"
              placeholder="Eg. johndoe@gmail.com"
              divClassName="w-full"
              className="w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="">Phone Number</label>
            <CustomInput
              type="tel"
              placeholder="Eg. 0712345678"
              divClassName="w-full"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <label htmlFor="">Message</label>
            <CustomInput
              type="textarea"
              placeholder="Enter Your Message"
              divClassName="w-full"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <Button text="Send Message" type="submit" className="mt-5 w-full" />
          </form>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
