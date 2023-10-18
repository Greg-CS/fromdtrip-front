import React from "react";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


export const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  
  function truncateDescription(description, limit) {
    const words = description.split(' ');
    if (words.length > limit) {
      const truncatedWords = words.slice(0, limit);
      return truncatedWords.join(' ') + '...';
    }
    return description;
  }

  const descriptionLimit = 20;
  
  const truncatedDescription = truncateDescription(description, descriptionLimit || 50);

  return (
    <div className="card-container">
      <div className="card h-[650px] w-[400px] lg:h-[100%] lg:w-[100%]">
        <div className="border-2 border-gray-300 card-icon rounded-xl">
        <Link href={url}>
          <img
            className="max-w-full border-gray-300 rounded-lg max-h-40 border-1"
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