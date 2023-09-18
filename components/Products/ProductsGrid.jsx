import React from "react";
import { ProductBox } from "./ProductBox";

export const ProductsGrid = ({ products }) => {
  return (
    <div className="overflow-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 gap-10 place-items-center">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </div>
  );
};
