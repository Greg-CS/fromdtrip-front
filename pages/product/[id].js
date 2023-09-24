import { useContext, useState, useEffect } from "react";

import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

import ProductImages from "../../components/Products/ProductImg";
import {CartIcon} from "../../components/icons/CartIcon"
import { CartContext } from "../../components/Context/CartContext";
import { NewProducts } from "../../components/Products/NewProducts";
import { Currencies } from "../../components/Currencies/Currencies";

export default function ProductPage({ product, newProducts, CategoryProp }) {
  const { addProduct, addProductSpecifics } = useContext(CartContext);
  const [selectedButtons, setSelectedButtons] = useState({});

  const handleButtonClick = (categoryName, value) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [categoryName]: value,
    }));
  };

  const areAllButtonsSelected = () => {
    // Check if all categories have a selected value
    return CategoryProp.properties.every((Cat) => selectedButtons[Cat.name]);
  };

  return (
    <>
      <div className="bg-white pt-10">
        <div className="grid lg:flex lg:justify-between lg:gap-40 xs:p-0 sm:p-10">
          <div className="bg-whiteborder-black p-6">
            <ProductImages images={product.images} />
          </div>
          <div className="py-5 px-5">
          <div className="flex gap-5">
            <h2 className="text-4xl font-bold uppercase text-black">
              {product.title}
            </h2>
            <span className="text-4xl text-white bg-black rounded-full w-20 text-center">${product.price}</span>
          </div>
          <div className="divider"/>
            <p className="text-black lg:text-xl">{product.description}</p>
            <div className="py-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start">
              {CategoryProp.properties.map((prop) => {
                return (
                  <div key={prop.name} className="">
                    <h3 className="text-xl font-bold text-black">
                      {prop.name}
                    </h3>
                    <div className="grid grid-cols-3 py-2 gap-10">
                      {prop.values.map((value) => {
                        return (
                          <button
                            key={value}
                            className={`border-2 rounded-full w-16 h-16 ${
                              selectedButtons[prop.name] === value
                                ? "bg-white text-black"
                                : "bg-black text-white"
                            }`}
                            onClick={() =>
                              handleButtonClick(prop.name, value)
                            }
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button
                className="btn bg-white border-2 rounded-full disabled:bg-slate-100"
                onClick={() => {
                  // Check if all buttons are selected before enabling the "Add to Cart" button
                  if (areAllButtonsSelected()) {
                      // Perform your "Add to Cart" action here
                      // You can enable the button here and add your logic to add items to the cart.
                      // For example, you can set a state variable to enable the button and dispatch an action to add the items to the cart.
                      addProduct(product._id);
                      addProductSpecifics(selectedButtons, product._id);
                  }
                }}
                disabled={!areAllButtonsSelected()} // Disable the button if not all buttons are selected
              >
                <CartIcon />
                <span className="ml-2">Add to cart</span>
              </button>
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
    limit: 3,
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