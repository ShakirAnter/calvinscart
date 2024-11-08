// src/components/ProductCard.jsx
import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import QuantityChanger from "./QuantityChanger";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const productInCart = cart.find((item) => item._id === product._id);

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
    <div
      className="bg-[#c7bcbb] cursor-pointer border border-gray-200 shadow-sm p-4 rounded-3xl"
      onClick={() => (window.location.href = `/products/${product._id}`)}
    >
      <img
        src={`data:image/jpeg;base64,${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg text-black font-semibold mb-2">{truncatedName}</h3>
      <p className="text-textMuted mb-4">{truncatedDescription}</p>
      <p className="text-xl text-black font-bold mb-4">{formattedPrice}</p>

      {productInCart ? (
        <div
          className="flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <QuantityChanger selectedProduct={product} />
        </div>
      ) : (
        <Button
          text="Add To Cart"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        />
      )}
    </div>
  );
}

export default ProductCard;
