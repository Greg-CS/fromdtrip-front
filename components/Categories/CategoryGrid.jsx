import React from "react";
import { CatBox } from "./CatBox";

export const CategoryGrid = ({ categories }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-60 md:gap-80 sm:gap-20 md:grid-cols-3 mt-1 mx-10 p-5 overflow-auto justify-items-center">
        {categories?.length > 0 &&
          categories.map((category) => (
            <CatBox key={category.id} {...category} />
          ))}
      </div>
    </>
  );
};
