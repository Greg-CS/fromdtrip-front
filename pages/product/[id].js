import { useContext, useState } from "react";

import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

import ProductImages from "../../components/Products/ProductImg";
import {CartIcon} from "../../components/icons/CartIcon"
import { CartContext } from "../../components/Context/CartContext";
import { NewProducts } from "../../components/Products/NewProducts";
import { Currencies } from "../../components/Currencies/Currencies";

export default function ProductPage({ product, newProducts, CategoryProp }) {
  const { addProduct, addSize } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("S"); // Change this to selectedSize

  function customerSelectSize(value) {
    setSelectedSize(value); // Change this to setSelectedSize
    addSize(product._id, selectedSize)
  }


  return (
    <>
      <div className="bg-[#484a48]">
        <div className="grid lg:flex lg:justify-between lg:gap-40 xs:p-0 sm:p-10">
          <div className="bg-white border-4 border-[#32C302E] rounded-lg p-6">
            <ProductImages images={product.images} />
          </div>
          <div className="py-5 px-5">
            <h2 className="text-4xl font-bold mb-4 uppercase text-white">
              {product.title}
            </h2>
            <p className="text-white lg:text-xl">{product.description}</p>
            <div className="flex gap-16 items-center py-10">
              <div className="grid lg:flex gap-10 items-center">
                <span className="text-8xl text-white">${product.price}</span>
                <span className="text-white">Size:</span>
                  <div className="dropdown dropdown-end pr-5">
                    <label tabIndex={0} className="btn bg-[#2C302E] m-1">
                      <span className="text-white">{selectedSize}</span>
                    </label>
                    <ol
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-[#575A5E] text-white font-mono border-2 border-base-50 rounded-box w-24 items-center"
                    >
                      <li className="px-2 py-2">
                        <span
                          className={`text-white ${
                            selectedSize === "S" ? "active:bg-slate-900" : ""
                          }`}
                          onClick={() => customerSelectSize("S")}
                        >
                          S
                        </span>
                      </li>
                      <li className="px-2 py-2">
                        <span
                          className={`text-white ${
                            selectedSize === "M" ? "active:bg-slate-900" : ""
                          }`}
                          onClick={() => customerSelectSize("M")}
                        >
                          M
                        </span>
                      </li>
                      <li className="px-2 py-2">
                        <span
                          className={`text-white ${
                            selectedSize === "L" ? "active:bg-slate-900" : ""
                          }`}
                          onClick={() => customerSelectSize("L")}
                        >
                          L
                        </span>
                      </li>
                      <li className="px-2 py-2">
                        <span
                          className={`text-white ${
                            selectedSize === "XL" ? "active:bg-slate-900" : ""
                          }`}
                          onClick={() => customerSelectSize("XL")}
                        >
                          XL
                        </span>
                      </li>
                    </ol>
                  </div>
              </div>
              <div>
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg flex items-center"
                  onClick={() => addProduct(product._id)}
                >
                  <CartIcon />
                  <span className="ml-2">Add to cart</span>
                </button>
              </div>
            </div>
            <div>
              <Currencies/>
            </div>
          </div>
        </div>
      </div>
      <NewProducts products={newProducts} />
    </>
  );
}


export async function getServerSideProps(context) {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  const { id } = context.query;
  const product = await Product.findById(id);
  const CategoryProp = await Category.findById(product.category);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      CategoryProp: JSON.parse(JSON.stringify(CategoryProp)),
    },
  };
}