import React from "react";
import { ProductBox } from "./ProductBox";

export const ProductsGrid = ({ products }) => {
  return (
    <div className="flex overflow-x-scroll p-10 justify-between gap-32 place-items-center">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </div>
  );
};
