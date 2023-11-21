import React from "react";
import Link from "next/link";


export const ProductBox = ({ _id, title, description, price, images }) => {
  const url = "/product/" + _id;

  return (
    <div className="px-10 card-container">
      <div className="card h-[18rem] w-[50rem]">
        <div className="card-icon rounded-xl">
          <Link href={url}>
            <img
              className="max-w-full rounded-lg max-h-40"
              src={images?.[0]}
              alt=""
            />
          </Link>
        </div>
        <div className="card-body">
          <p className="text-lg uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};