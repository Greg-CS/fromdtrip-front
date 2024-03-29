import { ProductsGridAnim } from './ProductsGridAnim';
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <section
      className="text-m text-[#EAAC8B] pt-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(53,80,112,1) 0%, rgba(109,89,122,1) 50%)",
      }}
    >
      <h1 className="ml-12 text-5xl font-extrabold lg:ml-36">New Products</h1>
      <ProductsGridAnim products={products} />
    </section>
  );
};

