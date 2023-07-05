import React from "react";
import { CatBox } from "./CatBox";

export const CategoryGrid = ({ categories }) => {
  return (
    <>
      <div className="flex overflow-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 place-items-center">
        {categories?.length > 0 &&
          categories.map((category) => (
            <CatBox key={category.id} {...category} />
          ))}
      </div>
    </>
  );
};
