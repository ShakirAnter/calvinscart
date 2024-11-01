// src/components/NoProductsMessage.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import an icon from react-icons

const NoProductsMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-300 rounded-md shadow-md">
      <FaShoppingCart className="text-6xl text-red-600 mb-4" />
      <h2 className="text-lg font-semibold text-red-600">{message}</h2>
      <p className="text-gray-600 mt-2">Please check back later or explore other categories!</p>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
        onClick={() => window.location.reload()} // Optional: Reload the page
      >
        Refresh
      </button>
    </div>
  );
};

export default NoProductsMessage;