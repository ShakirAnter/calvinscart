import React from "react";
import ProductCard from "./ProductCard";

const ProductCategorySection = ({ category, products }) => {
  return (
    <section className="relative px-10 py-5 w-screen">
      <h2 className="text-3xl text-">{category.name}</h2>
      <p className="text-lg text-textMuted w-[70rem]">{category.description}</p>
      <p className="hidden md:block lg:block absolute right-20 text-white top-[60px] cursor-pointer">
        See All
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductCategorySection;
