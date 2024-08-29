// src/pages/NotFound.jsx (Optional)
import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-2xl">
        Looks like the page you are looking for doesn't exist.
      </p>
      <h1 className="text-9xl">404</h1>
      <Button text="Back home" className="w-40 mt-3" onClick={() => navigate("/")} />
    </div>
  );
}

export default NotFound;
