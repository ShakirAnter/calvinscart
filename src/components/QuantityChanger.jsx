import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const QuantityChanger = ({ selectedProduct }) => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const productInCart = cart.find((item) => item._id === selectedProduct._id);
  const [quantity, setQuantity] = useState(
    productInCart ? productInCart.quantity : 1
  );  

  const handleIncreaseQuantity = () => {
    if (quantity < selectedProduct.quantity_left_in_stock) {
      setQuantity((prev) => prev + 1);
      addToCart(selectedProduct);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      updateQuantity(selectedProduct._id, quantity - 1);
    } else {
      removeFromCart(selectedProduct._id);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleDecreaseQuantity} className="p-2 border rounded-l">
        <i className="fa-solid fa-minus"></i>
      </button>
      <span className="mx-2">{quantity}</span>
      <button onClick={handleIncreaseQuantity} className="p-2 border rounded-r">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityChanger;
