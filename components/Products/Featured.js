import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Center } from "../Center/Center";
import { Button } from "../Buttons/Button";
import { ButtonLink } from "../Buttons/ButtonLink";
import { CartIcon } from "../icons/CartIcon";

export const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <div className="bg-[#585191] text-white py-10">
      <Center>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-medium mb-2">
              {product.title}
            </h1>
            <p className="text-white text-md">{product.description}</p>
            <div className="flex mt-4 gap-2">
              <ButtonLink href="/products/" outline white>
                Read More
              </ButtonLink>
              <Button white onClick={addFeaturedToCart}>
                <CartIcon className="w-5 h-5 mr-1" /> Add to Cart
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://fromdtrip-ecommerce-bucket.s3.amazonaws.com/1684115693368.jpg"
              alt="featured"
              className="max-w-full max-h-48 md:max-h-full mx-auto"
            />
          </div>
        </div>
      </Center>
    </div>
  );
};
