import { ProductsGridAnim } from './ProductsGridAnim';
import React from "react";

export const NewProducts = ({ products }) => {
  return (
    <section
      className="text-m text-[#71948D] pt-24 min-h-screen grid items-center justify-center place-items-center"
      style={{
        background: "#07100B",
      }}
    >
      {products.length === 0 && (
       <>
       <h1 className="text-5xl font-extrabold">No products are currently listed check back later...</h1>
       </>
      )}
      {products.length > 0 && (
        <>
          <h1 className="text-5xl font-extrabold">New Products</h1>
          <ProductsGridAnim products={products} />
        </>
      )}
    </section>
  );
};

