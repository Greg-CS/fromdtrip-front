import React from "react";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;

  return (
    <div className="min-w-fit box-border w-48 h-64 bg-gray-200 border border-white shadow-md backdrop-filter backdrop-blur-lg rounded-lg cursor-pointer transition-all duration-500 grid place-items-center select-none font-bold text-black hover:border-black transform hover:scale-105 active:scale-95 active:rotate-1 md:shadow-lg">
      <Link href={url} replace>
        <div className="p-4 h-32 flex items-center justify-center">
          <img
            className="max-w-full max-h-40 border-1 border-gray-300 rounded-lg"
            src={images?.[0]}
            alt=""
          />
        </div>
      </Link>
      <div className="mt-2">
        <div className="grid gap-1">
          <Link href={url}>
            <h2 className="text-sm capitalize text-center">{title}</h2>
          </Link>
          <div className="flex justify-around">
            <span className="items-center">Price</span>
            <span className="text-sm font-medium items-center">${price}</span>
          </div>
        </div>
        <div className="flex items-center justify-around mt-2">
          <button
            className="flex border-2 border-[#50514F] rounded-lg p-2 bg-[#CBD4C2]"
            onClick={() => addProduct(_id)}
          >
            <CartIcon className="h-5 mr-1" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
