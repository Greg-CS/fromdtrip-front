import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";

export const Featured = ({product}) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + product._id;
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <div className="grid justify-between gap-4 md:gap-32 lg:flex w-auto md:w-[75vw]">
      <div className="mr-auto lg:w-6/12 place-self-center">
        <h1 className="text-[#EAAC8B] text-shadow max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl">Checkout our new product</h1>
        <p className="max-w-2xl p-2 mb-6 bg-[#355070] font-semibold border-2 border-[#B56576] lg:mb-8 md:text-lg lg:text-xl rounded-2xl" style={{wordSpacing: "4px"}}>a stylish and comfortable shirt that&apos;s perfect for any occasion! This premium-quality shirt is crafted with care, using soft and breathable fabric to ensure maximum comfort throughout the day.</p>
        <div className="flex gap-5">
          <Link href={url}>
            <button className="flex gap-3 font-bold bg-[#6D597A] hover:bg-[#B56576] hover:border-[#E56B6F] border-2 border-[#E56B6F] btn">
              <span>
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-[70vw] p-2 mb-10 border-2 lg:w-6/12 lg:mb-0 rounded-2xl" style={{ backgroundImage: "url(/img/topography.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Link href={url}>
          <img
            src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1684115693368.jpg"
            alt="featured"
            className="mx-auto h-[40vh] lg:h-[50vh] w-[90vw] rounded-2xl"
          />
        </Link>
      </div>
    </div>
  );
};