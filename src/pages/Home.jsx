// src/pages/Home.jsx
import React from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import hero_bg from "../assets/images/hero_bg.png";
import ProductCategorySection from "../components/ProductCategorySection";
import productsData from "../data/products";

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProductCategorySection
        category={{
          name: "Sneakers",
          description: "Explore our latest sneakers collection",
        }}
        products={productsData.filter((product) => product.category === "Sneakers")}
      />
      {/* <ProductCategorySection
        category={{
          name: "Pants",
          description: "Explore our latest pants collection",
        }}
        products={productsData.filter((product) => product.category === "Pants")}
      />
      <ProductCategorySection
        category={{
          name: "Jackets",
          description: "Explore our latest jackets collection",
        }}
        products={productsData.filter((product) => product.category === "Jackets")}
      /> */}
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      className="hero-section w-screen flex flex-col items-start px-20 gap-3 justify-center"
      style={{
        height: `calc(100vh - 64px)`,
        backgroundImage: `url(${hero_bg})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="text-lg font-bold">Trade-in-offer</h4>
      <h2 className="text-3xl">Super Value Deals</h2>
      <h1 className="text-5xl text-primary">On All Products</h1>
      <p className="text-lg">Explore our latest collection of products</p>
      <Button children="Shop Now" />
    </section>
  );
};

export default Home;
