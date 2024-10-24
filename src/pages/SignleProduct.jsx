import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ProductCategorySection from "../components/ProductCategorySection";

import { CartContext } from "../context/CartContext";
import QuantityChanger from "../components/QuantityChanger";

const SignleProduct = () => {
  const { productId } = useParams();

  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const products = JSON.parse(localStorage.getItem("productsData"));

  const [selectedProduct] = products.filter(
    (product) => product._id === productId
  );

  const formattedPrice = selectedProduct.price.toLocaleString("en-UG", {
    style: "currency",
    currency: "UGX",
  });

  const categories = JSON.parse(localStorage.getItem("categories"));

  const [selectedCategory] = categories.filter(
    (category) => category._id === selectedProduct.category
  );

  const categoryProducts = products
    .filter((product) => product.category === selectedCategory._id)
    .slice(0, 4);

  const productInCart = cart.find((item) => item._id === selectedProduct._id);
  const [quantity, setQuantity] = useState(
    productInCart ? productInCart.quantity : 1
  );

  // 
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
  // 

  return (
    <div>
      <NavBar />

      <div className="w-screen">
        <div className="flex flex-col items-start w-[100%] md:w-[70%] h-full gap-4 px-5 md:px-20 py-10">
          <div className="relative flex flex-col items-center lg:flex-row border  w-full rounded-lg bg-[#c7bcbb] p-5">
            <div className="absolute top-2 right-5 hover:bg-textMuted p-1 rounded-full">
              <i className="fa-solid fa-heart text-lg cursor-pointer"></i>
            </div>

            <div>
              <img
                src={`data:image/jpeg;base64,${selectedProduct.image}`}
                alt={selectedProduct.name}
                className="w-[200px] cursor-zoom-in"
              />

              <div className="mt-2 flex gap-2">
                <div className="w-[50px] h-[50px] border"></div>
                <div className="w-[50px] h-[50px] border"></div>
                <div className="w-[50px] h-[50px] border"></div>
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-2 lg:ml-10">
              <h1 className="text-lg text-left text-[#272928] lg:max-w-[90%]">
                {selectedProduct.name}
              </h1>
              <span className="text-xl text-black font-bold">
                {formattedPrice}
              </span>
              <p className="text-textSec">
                {selectedProduct.quantity_left_in_stock} units left
              </p>

              <div className="flex items-center justify-center gap-1">
                <i className="fa-solid fa-star text-[orange]"></i>
                <i className="fa-solid fa-star text-[orange]"></i>
                <i className="fa-solid fa-star text-[orange]"></i>
                <i className="fa-solid fa-star text-[orange]"></i>
                <i className="fa-regular fa-star"></i>
                <span className="text-sm text-primary">
                  (6 verified ratings)
                </span>
              </div>

              {productInCart ? (
                <QuantityChanger
                  selectedProduct={selectedProduct}
                />
              ) : (
                <Button
                  text="Add To Cart"
                  className="w-full rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(selectedProduct);
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col items-start border w-full rounded-lg bg-[#c7bcbb] p-5">
            <h2 className="text-textSec font-bold">Product Details</h2>
            <p className="text-left text-textSec mt-5">
              {selectedProduct.description}
            </p>
          </div>
        </div>

        <ProductCategorySection
          category={selectedCategory}
          customTitle="You May Also Like"
          products={categoryProducts}
        />

        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default SignleProduct;
