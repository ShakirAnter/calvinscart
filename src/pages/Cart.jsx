import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(cartCount);
  }, [cart]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="h-screen bg-gray-900">
      <NavBar />
      <div className={`${cartCount > 0 ? "p-10" : ""}`}>
        <div
          className={`${
            cartCount > 0 ? "w-[80%] p-4 border" : "w-screen p-40 flex flex-col items-center"
          } rounded-lg`}
        >
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-screen h-full">
              <h2 className="text-3xl">Your Cart Is Empty.</h2>
              <p className="text-lg text-gray-400 mb-2 mt-2">
                All your cart items will be displayed here, seems like you don't
                have any item in your cart yet.
              </p>
              <Button text="Start Shopping" onClick={() => navigate("/")} />
            </div>
          ) : (
            <>
              <table className="table-auto w-full text-gray-400 ">
                <thead className="border-b">
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Subtotal</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="border-b border-gray-700">
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={`data:image/jpeg;base64,${item.image}`}
                          alt={item.name}
                          className="w-12 h-12 mr-5"
                        />
                        <span className="text-start">{item.name}</span>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={item.quantity}
                          min={0}
                          max={item.quantity_left_in_stock}
                          onChange={(e) =>
                            handleUpdateQuantity(
                              item._id,
                              parseInt(e.target.value, 10)
                            )
                          }
                          className="w-12 pl-2 text-gray-700"
                        />
                      </td>
                      <td className="px-4 py-2">${item.price}</td>
                      <td className="px-4 py-2">
                        ${item.price * item.quantity}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleRemoveFromCart(item._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <p className="text-lg text-gray-400">
                  Total Quantity: <span>{cartCount}</span>
                </p>
                <p className="text-lg text-gray-400">
                  Total Price:
                  <span>
                    $
                    {cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </span>
                </p>
                <button
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
