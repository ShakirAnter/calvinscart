import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const SignleProduct = () => {
  const { productId } = useParams();

  const products = JSON.parse(localStorage.getItem("productsData"));

  const selectedProduct = products.filter(
    (product) => product._id === productId
  );

  return (
    <div>
      <NavBar />

      
    </div>
  );
};

export default SignleProduct;
