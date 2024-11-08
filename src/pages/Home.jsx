// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import NoProductsMessage from "../components/NoProductsMessage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import hero_bg from "../assets/images/hero_bg.png";
import ProductCategorySection from "../components/ProductCategorySection";
import productsData from "../data/products";
import logo from "../assets/images/logo1.png";

import tshirt from "../assets/icons/tshirt.png";
import shorts from "../assets/icons/shorts.png";
import dress from "../assets/icons/dress.png";
import wristWatch from "../assets/icons/wristwatch.png";
import jewelry from "../assets/icons/jewelry.png";
import seeMore from "../assets/icons/more.png";
import CustomInput from "../components/CustomInput";
import NewsLetter from "../components/NewsLetter";

import { ACC_TOKEN, API_BASE_URL } from "../config/apiConfig";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProductSkeletons from "../components/ProductSkeletons";

function Home() {
  const [categories, setCategories] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Add error state
  const [loading, setLoading] = useState(true);
  const [noProductsMessage, setNoProductsMessage] = useState(null); // New state for no products message

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/get-all-products`,
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
        localStorage.setItem("productsData", JSON.stringify(data.products));

        // setNoProductsMessage(null); // Reset the No products message state
      } else {
        // Handle error messages
        setError(data.message);
        if (data.message === "No products found") {
          setNoProductsMessage(
            "Sorry! We don't have any products for you now. Please check back later."
          );
        }
        console.error("Failed to fetch products: ", data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch products. Try to refresh the page.");
      setNoProductsMessage(null); // Clear message if there's an error
      console.error("Failed to fetch products: ", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <CategoriesSelector
        categories={categories}
        setCategories={setCategories}
      />

      {loading ? (
        <ProductSkeletons count={4} />
      ) : noProductsMessage ? (
        <NoProductsMessage message={noProductsMessage} />
      ) : (
        categories &&
        categories.map((category) => {
          const filteredProducts = productsData.filter(
            (product) => product.category === category._id
          );

          // Only render the category if there are products in it
          if (filteredProducts.length === 0) {
            return null; // Skip rendering this category if no products
          }

          return (
            <ProductCategorySection
              key={category._id}
              category={category}
              products={filteredProducts.slice(0, 4)} // Only display four products in each category
            />
          );
        })
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      className="hero-section w-screen flex flex-col items-start px-20 gap-3 justify-center"
      style={{
        height: `calc(100vh - 64px)`,
      }}
    >
      <h4 className="text-lg font-bold">Trade-in-offer</h4>
      <h2 className="text-3xl">Super Value Deals</h2>
      <h1 className="text-5xl text-primary">On All Products</h1>
      <p className="text-lg">Explore our latest collection of products</p>
      <Button text="Shop Now" />
    </section>
  );
};

const CategoriesSelector = ({ categories, setCategories }) => {
  const navigate = useNavigate();

  // Temporary state for empty category boxes
  const [emptyCategories, setEmptyCategories] = useState(
    new Array(5).fill(null)
  ); // Adjust the number of boxes as needed

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/categories/get-all-categories`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCategories(data.categories);
        localStorage.setItem("categories", JSON.stringify(data.categories));
      } else {
        toast.error("Failed to fetch categories: ", data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch categories");
      console.error("Failed to fetch categories: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [API_BASE_URL]);

  const CategoryCard = (props) => {
    return (
      <div
        className="flex flex-col gap-4 mx-5 border p-10 rounded-xl cursor-pointer bg-[#c7bcbb]"
        style={{
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.onClick}
      >
        <img
          src={props.img && props.img}
          alt={props.name && props.name}
          className="w-10"
        />
        <span className="text-lg text-black">{props.name && props.name}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen p-6">
      <h2 className="text-3xl">Categories</h2>
      <p className="text-lg md:text-base w-[70%]">
        Discover our curated selection of products across all categories.
        Whether you're looking for the latest trends or timeless classics, shop
        by category to find exactly what you need, effortlessly.
      </p>
      <div
        className="flex flex-nowrap overflow-x-auto justify-center w-screen mt-5"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc #fff" }}
      >
        {categories && categories.length > 0
          ? categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                img={`data:image/png;base64,${category.image}`}
                onClick={() =>
                  (window.location.href = `/categories/${category._id}`)
                }
              />
            ))
          : emptyCategories.map((_, index) => (
              <CategoryCard key={index} name="" img={null} onClick={() => {}} />
            ))}
      </div>
    </div>
  );
};

export default Home;
