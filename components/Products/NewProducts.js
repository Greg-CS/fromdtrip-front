import { ProductsGrid } from './ProductsGrid';
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <>
      <div className="divider-new text-white py-10">
        <h1 className="pl-5 text-4xl font-mono font-bold relative">New Arrivals</h1>
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

