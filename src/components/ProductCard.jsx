// src/components/ProductCard.jsx
import React from "react";
import Button from "./Button";

function ProductCard({ product }) {
  const truncatedName =
    product.name.length > 25
      ? product.name.substring(0, 25) + "..."
      : product.name;
  const truncatedDescription =
    product.description.length > 50
      ? product.description.substring(0, 50) + "..."
      : product.description;

  const formattedPrice = product.price.toLocaleString("en-UG", {
    style: "currency",
    currency: "UGX",
  });

  return (
    <div className="bg-[#c7bcbb] cursor-pointer border border-gray-200 shadow-sm p-4 rounded-3xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg text-black font-semibold mb-2">{truncatedName}</h3>
      <p className="text-textMuted mb-4">{truncatedDescription}</p>
      <p className="text-xl text-black font-bold mb-4">{formattedPrice}</p>
      <Button text="Add To Cart" />
    </div>
  );
}

export default ProductCard;
