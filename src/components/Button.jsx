// src/components/Button.jsx
import React from "react";

function Button({ children, variant = "primary", onClick }) {
  const baseClasses = "py-2 w-40 px-4 rounded-full font-medium";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-secondary"
      : "bg-accent text-white hover:bg-yellow-500";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}

export default Button;
