import React from "react";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;

  return (
  <div className="card-container">
    <div className="card">
      <div className="card-icon border-2 border-gray-300 rounded-xl">
      <Link href={url}>
        <img
          className="max-w-full max-h-40 border-1 border-gray-300 rounded-lg"
          src={images?.[0]}
          alt=""
        />
      </Link>
      </div>
      <div className="card-body">
        <p className="text-lg uppercase">{title}</p>
        <p className="text-md py-10">
          {description}
        </p>
      </div>
      <div className="card-footer">
        <button
          className="flex text-black border-2 border-[#50514F] rounded-lg p-2 bg-[#CBD4C2]"
        >
          <Link href={url}>
            more info
          </Link>
        </button>
        <button
          className="flex text-black border-2 border-[#50514F] rounded-lg p-2 bg-[#CBD4C2]"
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