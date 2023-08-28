import { useContext, useEffect } from "react";

import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

import ProductImages from "../../components/Products/ProductImg";
import {CartIcon} from "../../components/icons/CartIcon"
import { CartContext } from "../../components/Context/CartContext";
import { NewProducts } from "../../components/Products/NewProducts";
import { Currencies } from "../../components/Currencies/Currencies";
import { useRouter } from "next/router";


export default function ProductPage({ product, newProducts, CategoryProp }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();
  // const [selectedColor, setSelectedColor] = useState("")

  // function customerSelect(value) {
  //   setSelectedColor(value);
  // }


  return (
    <>
      <div className="custom-shape-divider-top-1688534628 bg-[#474A48]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2C302E">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
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
              <div className="flex gap-10">
                <span className="text-8xl text-white">${product.price}</span>
                {/* <div className="dropdown dropdown-end pr-5">
                  <label tabIndex={0} className="btn bg-[#2C302E] m-1">
                  {CategoryProp.properties.map((ev) => (
                      <span key={ev._id}>
                       {ev.name}
                      </span>
                    ))}
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#575A5E] text-white font-mono border-2 border-base-50 rounded-box w-52">
                    {CategoryProp.properties.map((property) =>
                      property.values.map((value) => (
                     <li key={value} className="px-2 py-2" onClick={customerSelect(value)}>
                       <span className="text-white active:bg-slate-900">
                        {value}
                       </span>
                      </li>
                    )))}
                  </ul>
                  <div>
                    <span>
                      {selectedColor}
                    </span>
                  </div>
                </div> */}
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