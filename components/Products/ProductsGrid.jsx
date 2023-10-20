import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProductBox } from "./ProductBox";
import { useRef } from "react";

export const ProductsGrid = ({ products }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex justify-between gap-32">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductBox key={product._id} {...product} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};
