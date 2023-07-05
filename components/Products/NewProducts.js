import { ProductsGrid } from './ProductsGrid';
import { Title } from '../Title'
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <>
      <div class="custom-shape-divider-top-1688535057">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#474A48">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
      </div>
      <div className="bg-[#909590] text-white py-10">
        <h1 className="pl-5 text-4xl font-mono font-bold">New Arrivals</h1>
        <ProductsGrid products={products} />
      </div>
    </>    
  );
};

