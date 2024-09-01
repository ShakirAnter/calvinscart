import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/apiConfig";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

import bg_image from "../assets/images/hero_bg.png";
import ProductCard from "../components/ProductCard";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const SignleCategory = ({ category }) => {
  const [productsData, setProductsData] = useState(null); 
  const { categoryId } = useParams();

  const categories = JSON.parse(localStorage.getItem("categories"));

  const selectedCategory = categories.filter(
    (category) => category._id === categoryId
  );
  console.log(selectedCategory);

  const heroClassName = selectedCategory[0].name
    ? selectedCategory[0].name
        .toLowerCase()
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace("&", "and") // remove ampersands
        .replace(/[^a-z0-9-]/g, "") + // remove any non-alphanumeric characters except hyphens
      "-hero"
    : "default-hero";

  console.log(heroClassName);

  const fetchProductsByCategory = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/all-products/${categoryId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setProductsData(data.products);
      } else {
        console.error("Failed to fetch products: ", data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [API_BASE_URL]);

  return (
    <div className="w-screen h-screen">
      <NavBar />

      <div
        className="h-full"
        style={{
          height: `calc(100vh - 64px)`,
        }}
      >
        <div
          className={`single-product-hero ${heroClassName} flex flex-col items-center justify-center h-[300px]`}
        >
          <h1 className="text-4xl">{selectedCategory[0].name}</h1>
          <p className="text-lg">{selectedCategory[0].description}</p>
        </div>

        <div className="grid grid-cols-1 px-10 py-10 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {!productsData ? (
            <div>Loading products</div>
          ) : (
            productsData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default SignleCategory;
