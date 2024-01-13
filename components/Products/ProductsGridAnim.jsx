import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProductBox } from "./ProductBox";

export const ProductsGridAnim = ({ products }) => {
  
  const marqueeVariants = {
    animate: {
      x: [0, -2000], // Adjust -2000 to match the width of your content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Adjust the speed of the marquee
        },
      },
    },
  };

  return (
    <div className="flex items-center h-[50vh] lg:h-[75vh] overflow-hidden">
      <motion.div
        className="flex justify-between gap-32"
        variants={marqueeVariants}
        animate="animate"
      >
        {products?.length > 0 &&
          // Duplicate the list of products
          [...products, ...products].map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}
      </motion.div>
    </div>
  );
};
