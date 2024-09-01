import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductCategorySection = ({ category, products }) => {
  const navigate = useNavigate();
  return (
    <section className="relative px-10 py-5 w-screen">
      <h2 className="text-3xl text-">{category.name}</h2>
      <p className="text-lg text-textMuted max-w-[70rem]">
        {category.description}
      </p>
      <p
        className="hidden md:block lg:block absolute right-20 text-white top-[60px] cursor-pointer"
        onClick={() => navigate(`/categories/${category._id}`)}
      >
        See All
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductCategorySection;
