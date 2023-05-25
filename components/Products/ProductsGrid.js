import React from "react";
import { ProductBox } from "./ProductBox";

export const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-40 md:gap-4 md:grid-cols-6 mt-1 p-5 pl-20 overflow-auto">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </div>
  );
};
