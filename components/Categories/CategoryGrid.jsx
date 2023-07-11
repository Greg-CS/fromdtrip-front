import React from "react";
import { CatBox } from "./CatBox";

export const CategoryGrid = ({Category}) => {
  return (
    <>
      <div className="grid sm:flex overflow-x-auto gap-10 p-10 place-items-center justify-around">
        {Category?.length > 0 &&
          Category.map((obj) => (
            <CatBox key={obj.id} categories={obj} />
          ))}
      </div>
    </>
  );
};
