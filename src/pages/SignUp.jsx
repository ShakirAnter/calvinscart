import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { API_BASE_URL } from "../config/apiConfig";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: {
      street: "",
      city: "",
      district: "",
      postalCode: "",
    },
    gender: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const handleUserSignUp = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      gender,
      password,
      confirmPassword,
      profilePicture,
    } = userData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          gender,
          password,
          profilePicture,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // User registered successfully

        // Set the current user data in localStorage for future use
        const userData = data.user;
        localStorage.setItem("currentUser", JSON.stringify(userData));

        // Set the JSON WEB TOKEN in localStorage for Authorization
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address")) {
      const addressField = name.split(".")[1];
      setUserData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          [addressField]: value,
        },
      }));
    } else {
      setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64String = await convertImageToBase64(file);

    setUserData((prevUserData) => ({
      ...prevUserData,
      profilePicture: base64String,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen py-0 px-0 md:px-20 md:py-20">
      <div className="border max-w-md md:max-w-500 p-5 rounded-xl w-full md:w-auto">
        <h2 className="text-2xl">Create An Account</h2>
        <p className="text-sm">Create An Account With Us In A Few Minutes</p>

        <form onSubmit={handleUserSignUp} className="">
          <div className="flex flex-col justify-between mb-4 gap-3 md:flex-row">
            <div className="flex flex-col items-start">
              <label className="text-base mb-2">First Name</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-user"
                placeholder="Enter First Name"
                divClassName="w-full"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-base mb-2">Last Name</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-user"
                placeholder="Enter Last Name"
                divClassName="w-full"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between mb-4 gap-3 md:flex-row">
            <div className="flex flex-col items-start">
              <label className="text-base mb-2">Email</label>
              <CustomInput
                type="email"
                icon="fa-solid fa-envelope"
                placeholder="Enter Your Email Address"
                divClassName="w-full"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-base mb-2">Phone Number</label>
              <CustomInput
                type="number"
                icon="fa-solid fa-phone"
                placeholder="Enter Phone Number"
                divClassName="w-full"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-4 gap-4">
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">Street</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-location-dot"
                placeholder="Enter Your street name"
                divClassName="w-full"
                name="address.street"
                value={userData.address.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">City</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-location-dot"
                placeholder="Enter Your City Name"
                divClassName="w-full"
                name="address.city"
                value={userData.address.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">District</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-location-dot"
                placeholder="Enter Your District Name"
                divClassName="w-full"
                name="address.district"
                value={userData.address.district}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">Postal Code</label>
              <CustomInput
                type="text"
                icon="fa-solid fa-location-dot"
                placeholder="Enter Your Postal Code"
                divClassName="w-full"
                name="address.postalCode"
                value={userData.address.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-base mb-2">Gender</label>
            <div className="flex flex-row justify-between border px-3 rounded-xl">
              <div className="border-r flex items-center w-full h-full py-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userData.gender === "male"}
                  onChange={handleInputChange}
                />
                <label className="ml-2">Male</label>
              </div>
              <div className="w-full flex items-center h-full py-2 px-3">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userData.gender === "female"}
                  onChange={handleInputChange}
                />
                <label className="ml-2">Female</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 mb-4">
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">Password</label>
              <CustomInput
                type="password"
                icon="fa-solid fa-lock"
                placeholder="Enter Password"
                divClassName="w-full"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label className="text-base mb-2">Confirm Password</label>
              <CustomInput
                type="password"
                icon="fa-solid fa-lock"
                placeholder="Enter Password"
                divClassName="w-full"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg">Profile Picture</h3>
            <input
              type="file"
              name="profilePicture"
              className="w-full p-2 border border-gray-400"
              onChange={handleFileChange}
            />
          </div>

          <Button type="submit" text="Sign Up" className="w-full mb-2" />

          <Link to="/login" className="text-white hover:text-white">
            Already have an account? <strong className="">Sign In</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
