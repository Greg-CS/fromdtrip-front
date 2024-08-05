import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";

export const Featured = ({product}) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + product?._id || "6695f733a73b4f8c2a34a9d1";
  // function addFeaturedToCart() {
  //   addProduct(product._id);
  // }

  return (
    <div className="grid justify-between place-items-center gap-4 md:gap-32 lg:flex w-[90dvw] md:w-[d75vw]">
      <div className="mr-auto lg:w-6/12 place-self-center">
        <h1 className="text-[#71948D] text-shadow max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl">
          Checkout our new product
        </h1>
        <p
          className="max-w-2xl p-2 mb-6 text-[#71948D] bg-[#07100B] font-semibold border-2 border-[#1F3C2A] lg:mb-8 md:text-lg lg:text-xl rounded-2xl"
          style={{ wordSpacing: "4px" }}
        >
          a stylish and comfortable shirt that&apos;s perfect for any occasion!
          This premium-quality shirt is crafted with care, using soft and
          breathable fabric to ensure maximum comfort throughout the day.
        </p>
        <div className="flex gap-5">
          <Link href={"/products"}>
            <button className="ui-btn">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>
      <div
        // href={url}
        className="border-2 border-[#354A4B] rounded-xl w-auto md:w-6/12 lg:w-4/12"
      >
        <img
          src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1721104122936.jpg"
          alt="featured"
          className="mx-auto h-[40dvh] lg:h-[d50vh] w-[80dvw] rounded-xl"
        />
      </div>
    </div>
  );
};