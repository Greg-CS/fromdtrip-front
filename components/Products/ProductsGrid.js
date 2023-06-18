import React from "react";
import { ProductBox } from "./ProductBox";

export const ProductsGrid = ({ products }) => {
  return (
    <div className=" grid justify-center sm:flex sm:justify-around gap-10 p-5 py-10 overflow-auto">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </div>
  );
};
