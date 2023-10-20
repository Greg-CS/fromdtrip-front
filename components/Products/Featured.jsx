import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartIcon } from "../icons/CartIcon";
import Link from "next/link";
import ParticleRing from "../Animations/ParticleRing";

export const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + product._id;
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <>
      <section className="text-[#EAAC8B]">
        <div className="grid items-center min-h-screen gap-24 px-6 justify-items-center xl:flex pt-36 lg:pt-0 md:px-36">
          <div className="mr-auto place-self-center">
            <h1 className="text-[#EAAC8B] max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl">Checkout our new product</h1>
            <p className="max-w-2xl p-2 mb-6 bg-[#355070] font-semibold border-2 border-[#B56576] lg:mb-8 md:text-lg lg:text-xl rounded-2xl" style={{ lineHeight: '50px' }}>a stylish and comfortable shirt that&apos;s perfect for any occasion! This premium-quality shirt is crafted with care, using soft and breathable fabric to ensure maximum comfort throughout the day.</p>
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
          <div className="h-[21rem] lg:h-[41rem] mb-10 lg:mb-0 w-[21rem] lg:w-[50rem] flex justify-center rounded-2xl border-2 items-center" style={{ backgroundImage: "url(/img/topography.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Link href={url}>
              <img
                src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1684115693368.jpg"
                alt="featured"
                className="mx-auto h-[20rem] lg:h-[40rem] w-[20rem] lg:w-[40rem] rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};