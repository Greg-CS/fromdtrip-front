import React from "react";
import { CatBox } from "./CatBox";

export const CategoryGrid = ({ categories }) => {
  console.log(categories)
  return (
    <>
      <div className="grid grid-cols-1 gap-60 md:gap-4 md:grid-cols-3 mt-1 p-5 overflow-auto justify-items-center">
        {categories?.length > 0 &&
          categories.map((category) => (
            <CatBox key={category.id} {...category} />
          ))}
      </div>
    </>
  );
};
