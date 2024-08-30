// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import hero_bg from "../assets/images/hero_bg.png";
import ProductCategorySection from "../components/ProductCategorySection";
import productsData from "../data/products";

// import sliderImage1 from "../assets/images/sliderimage1.jpg";
// import sliderImage2 from "../assets/images/sliderimage2.jpg";
// import sliderImage3 from "../assets/images/sliderimage3.jpg";
// import sliderImage4 from "../assets/images/sliderimage4.jpg";
import logo from "../assets/images/logo1.png";

import tshirt from "../assets/icons/tshirt.png";
import shorts from "../assets/icons/shorts.png";
import dress from "../assets/icons/dress.png";
import wristWatch from "../assets/icons/wristwatch.png";
import jewelry from "../assets/icons/jewelry.png";
import seeMore from "../assets/icons/more.png";
import CustomInput from "../components/CustomInput";

import { ACC_TOKEN, API_BASE_URL } from "../config/apiConfig";
import Footer from "../components/Footer";

function Home() {
  const [categories, setCategories] = useState(null);
  const [productsData, setProductsData] = useState(null);

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
      } else {
        console.error("Failed to fetch products: ", data.message);
      }
    } catch (error) {
      console.error("Failed to fetch products: ", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (productsData) {
    console.log(productsData);
  }

  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* <ProductCategorySection
        category={{
          name: "Sneakers",
          description: "Explore our latest sneakers collection",
        }}
        products={productsData.filter(
          (product) => product.category === "Sneakers"
        )}
      /> */}
      <CategoriesSelector
        categories={categories}
        setCategories={setCategories}
      />
      {categories &&
        categories
          .filter(
            (category) =>
              productsData &&
              productsData.some((product) => product.category === category._id)
          )
          .map((category) => (
            <ProductCategorySection
              key={category._id}
              category={{
                name: category.name,
                description: category.description,
              }}
              products={
                productsData &&
                productsData
                  .filter((product) => product.category === category._id)
                  .slice(0, 4)
              } // Only display four products in each category
            />
          ))}
      {/* <ProductCategorySection
        category={{
          name: "Sneakers",
          description: "Explore our latest sneakers collection",
        }}
        products={productsData.filter(
          (product) => product.category === "Sneakers"
        )}
      />

      <ProductCategorySection
        category={{
          name: "Sneakers",
          description: "Explore our latest sneakers collection",
        }}
        products={productsData.filter(
          (product) => product.category === "Sneakers"
        )}
      />

      <ProductCategorySection
        category={{
          name: "Sneakers",
          description: "Explore our latest sneakers collection",
        }}
        products={productsData.filter(
          (product) => product.category === "Sneakers"
        )}
      /> */}
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
        console.log(data.categories);
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
      >
        <img src={props.img} alt={props.name} className="w-10" />
        <span className="text-lg text-black">{props.name}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <h2 className="text-3xl">Categories</h2>
      <p className="text-lg md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, minima!
      </p>
      <div
        className="flex flex-nowrap overflow-x-auto justify-center w-screen mt-5"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc #fff" }}
      >
        {categories &&
          categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              img={`data:image/png;base64,${category.image}`}
            />
          ))}
      </div>
    </div>
  );
};

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const subscribeToNewsLetter = async (e) => {
    // Function to subscribe to NewsLetter

    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACC_TOKEN}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-[#28292b] w-screen items-center flex-col md:flex-row md:justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-[200px] h-[200px] md:w-[150px] md:h-[150px] mb-5 md:mb-0"
      />
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h2 className="text-3xl">Stay Updated with Our Latest News!</h2>
        <p className="text-lg md:text-base text-textMuted">
          Join our newsletter to receive exclusive promotions, new product
          releases, and early access to sales.
        </p>
        <form
          onSubmit={subscribeToNewsLetter}
          className="w-full flex flex-col items-center justify-center"
        >
          <CustomInput
            type="email"
            icon="fa-solid fa-envelope"
            placeholder="Please type in your email address"
            divClassName="mt-2 w-full"
            inputclassName="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text="Subscribe"
            variant="primar"
            className="mt-3 w-full md:w-3/4"
            onClick={subscribeToNewsLetter}
          />
        </form>
      </div>
    </section>
  );
};

export default Home;
