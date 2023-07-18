import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";

export const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <>
      <div className="custom-shape-divider-top-1688534628 bg-[#474A48]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2C302E">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <section className="bg-[#474A48]">
        <div className="grid gap-5 md:gap-0 md:flex justify-around max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Checkout our new product</h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">a stylish and comfortable shirt that&apos;s perfect for any occasion! This premium-quality shirt is crafted with care, using soft and breathable fabric to ensure maximum comfort throughout the day.</p>
          <div className="flex gap-5">
            <Link className="btn border-white" href="/products/">
              Read More
            </Link>
            <button className="flex gap-3 btn border-white border-2" onClick={addFeaturedToCart}>
              <CartIcon className="w-5 h-5 mr-1" /> 
              <span className="">
                Add to Cart
              </span>
            </button>
          </div>
          </div>
          <img
            src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1684115693368.jpg"
            alt="featured"
            className="mx-auto h-[22rem] w-[22rem]"
          />          
        </div>
      </section>
    </>
  );
};
