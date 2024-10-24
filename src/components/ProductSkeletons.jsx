import React from "react";
import ProductSkeleton from "./ProductSkeleton"; // Adjust the import path as necessary

const ProductSkeletons = ({ count }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductSkeletons;