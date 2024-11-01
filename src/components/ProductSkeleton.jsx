import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-[#c7bcbb] border border-gray-200 shadow-sm p-4 rounded-3xl w-full">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 fade" />

      <div className="flex flex-col gap-2">
        {/* Name placeholder */}
        <div className="bg-gray-300 h-6 rounded-md fade" />

        {/* Description placeholder */}
        <div className="bg-gray-300 w-4/5 h-4 rounded-md fade" />

        {/* Price placeholder */}
        <div className="bg-gray-300 h-6 rounded-md fade" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
