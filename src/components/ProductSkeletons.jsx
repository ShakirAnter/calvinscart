import React from "react";
import ProductSkeleton from "./ProductSkeleton"; // Adjust the import path as necessary

const ProductSkeletons = ({ count }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-5 gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductSkeletons;