import React, { useState } from "react";

import API_BASE_URL from "../config/apiConfig";

const fetchProductsCategory = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/products/all-products/66d1f8fe82923b7c905e6ad3`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      setProductsData(data);
      console.log(data);
    } else {
      console.error("Failed to fetch products: ", data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

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
      console.log(data);
    } else {
      console.error("Failed to fetch products: ", data.message);
    }
  } catch (error) {
    console.error("Failed to fetch products: ", error);
  }
};

export default fetchProductsCategory;
