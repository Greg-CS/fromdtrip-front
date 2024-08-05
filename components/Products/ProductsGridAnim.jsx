import React from "react";
import { motion } from "framer-motion";
import { ProductBox } from "./ProductBox";

export const ProductsGridAnim = ({ products }) => {
  const marqueeVariants = {
    animate: {
      x: [1800, -3300],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25, // Adjust the speed of the marquee
        },
      },
    },
  };

  return (
    <div className="flex items-center p-6 overflow-hidden bg-[#354A4B] border-2 border-[#5A6B58] rounded-lg w-8/12">
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
        {products?.length > 0 &&
          // Duplicate the list of products
          [...products, ...products].map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}

      </motion.div>
    </div>
  );
};
