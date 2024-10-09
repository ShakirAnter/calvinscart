import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../config/apiConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUserSignIn = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please type in your email address");
    } else if (!password) {
      toast.error("Please type in your password");
    } else {
      try {
        const response = await fetch(`${API_BASE_URL}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
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
        toast.error("Server error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="md:border max-w-md md:max-w-500 p-5 rounded-xl w-full md:w-auto">
        <h2 className="text-2xl">Sign In To Your Account</h2>
        <p className="text-sm">Sign In To Your Account In A Few Seconds</p>

        <form onSubmit={handleUserSignIn} className="">
          {/* <div className="flex flex-col justify-between mb-4 gap-3 md:flex-row"> */}
          <div className="flex flex-col items-start mb-4">
            <label className="text-base mb-2">Email</label>
            <CustomInput
              type="email"
              icon="fa-solid fa-envelope"
              placeholder="Enter Your Email Address"
              divClassName="w-full"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col items-start mb-4">
            <label className="text-base mb-2">Password</label>
            <CustomInput
              type="password"
              icon="fa-solid fa-lock"
              placeholder="Enter Password"
              divClassName="w-full"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" text="Sign In" className="w-full mb-2" />

          <Link to="/signup" className="text-white hover:text-white">
            Don't have an account? <strong className="">Sign Up</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
