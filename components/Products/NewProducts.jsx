import { ProductsGrid } from './ProductsGrid';
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <div className="text-m text-black py-10 bg-white">
      <h1 className="text-5xl font-extrabold text-left m-36">New Products</h1>
      <ProductsGrid products={products} />
    </div>
  );
};

