import { ProductsGrid } from './ProductsGrid';
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <div className="text-m text-white py-10" style={{ background: 'linear-gradient(180deg, #12664F 0%, rgba(255, 255, 255, 0.00) 100%), white' }}>
      <h1 className="text-[28px] font-mono font-bold w-full lg:w-6/12 text-center">Get your groove on with eco-friendly upcycled goodies that perfectly match the streetwear vibes</h1>
      <ProductsGrid products={products} />
    </div>
  );
};

