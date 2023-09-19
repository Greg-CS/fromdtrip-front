import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";

export const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + product._id;
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  console.log(product)

  return (
      <section className="bg-white">
        <div className="grid lg:flex gap-24 pt-36 lg:pt-0 px-6 md:px-36 min-h-screen items-center">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-black">Checkout our new product</h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-black" style={{lineHeight: '50px'}}>a stylish and comfortable shirt that&apos;s perfect for any occasion! This premium-quality shirt is crafted with care, using soft and breathable fabric to ensure maximum comfort throughout the day.</p>
          <div className="flex gap-5">
            <Link href={url}>
            <button className="flex gap-3 btn bg-white hover:bg-white text-black font-bold border-black border-2" onClick={addFeaturedToCart}>
              <span>
                Read More
              </span>
            </button>
            </Link>
            <button className="flex gap-3 btn bg-white hover:bg-white text-black font-bold border-black border-2" onClick={addFeaturedToCart}>
              <CartIcon className="w-5 h-5 mr-1" /> 
              <span>
                Add to Cart
              </span>
            </button>
          </div>
          </div>
          <Link href={url}>
            <img
              src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1684115693368.jpg"
              alt="featured"
              className="mx-auto h-[22rem] w-[22rem] rounded-full border-2 border-black shadow-2xl"
            />          
          </Link>
        </div>
      </section>
  );
};
