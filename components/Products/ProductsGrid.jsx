import React from "react";
import { ProductBox } from "./ProductBox";

export const ProductsGrid = ({ products }) => {
  return (
    <div className="flex overflow-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 place-items-center">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </div>
  );
};
