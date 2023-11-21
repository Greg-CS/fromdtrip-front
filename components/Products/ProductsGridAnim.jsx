import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProductBox } from "./ProductBox";
import Marquee from "react-fast-marquee";

export const ProductsGridAnim = ({ products }) => {

  return (
    <section className="">
      <div className="flex items-center h-screen overflow-hidden">
        <div>
          <Marquee speed={100} delay={1} className="flex justify-between gap-32">
            {products?.length > 0 &&
              products.map((product) => (
                <ProductBox key={product._id} {...product} />
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
