import { ProductsGrid } from './ProductsGrid';
import { Title } from '../Title'
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <div className="bg-[#909590] text-white py-10">
      <Title>
        <span className="pl-5">New Arrivals</span>
      </Title>
      <ProductsGrid products={products} />
    </div>
  );
};

