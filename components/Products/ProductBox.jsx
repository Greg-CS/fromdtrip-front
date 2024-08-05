import React from "react";
import Link from "next/link";


export const ProductBox = ({ _id, title, description, price, images }) => {
  const url = "/product/" + _id;

  return (
    <div className="grid items-center justify-center p-10 border-2 border-[#354A4B] bg-[#1F3C2A] rounded-lg h-auto w-[15dvw]">
      <div className="grid items-center justify-center place-items-center">
        <div className="rounded-xl">
          <Link href={url}>
            <img
              className="max-w-full rounded-lg max-h-40"
              src={images?.[0]}
              alt=""
            />
          </Link>
        </div>
        <div className="text-center">
          <p className="text-lg uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};