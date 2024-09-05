// src/components/Button.jsx
import React from "react";

function Button({ type, text, variant = "primary", onClick, className }) {
  const baseClasses = `py-2 w-40 px-4 rounded-full font-medium ${className}`;
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-secondary"
      : "bg-accent text-white hover:bg-yellow-500";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {/* <i className="fa-solid fa-shopping-cart"></i> */}
      {text}
    </button>
  );
}

export default Button;
