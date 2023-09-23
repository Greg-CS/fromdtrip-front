import { useContext, useEffect, useState } from "react";

import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

import ProductImages from "../../components/Products/ProductImg";
import {CartIcon} from "../../components/icons/CartIcon"
import { CartContext } from "../../components/Context/CartContext";
import { NewProducts } from "../../components/Products/NewProducts";
import { Currencies } from "../../components/Currencies/Currencies";

export default function ProductPage({ product, newProducts, CategoryProp }) {
  const { addProduct } = useContext(CartContext);
  const [selectedButtons, setSelectedButtons] = useState({});

  const handleButtonClick = (categoryName, value) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [categoryName]: value,
    }));
  };

  useEffect(() => {
    console.log(selectedButtons)
  }, [selectedButtons])

  const areAllButtonsSelected = () => {
    // Check if all categories have a selected value
    return CategoryProp.properties.every((Cat) => selectedButtons[Cat.name]);
  };

  return (
    <>
      <div className="bg-white pt-10">
        <div className="grid lg:flex lg:justify-between xs:p-0 sm:p-10">
          <div className="p-6 grid justify-center w-full lg:w-6/12">
            <ProductImages images={product.images} />
          </div>
          <div className="py-5 px-5 w-full lg:w-6/12">
            <div className="flex gap-5 items-center pb-5">
              <h2 className="text-4xl font-bold uppercase text-black">
                {product.title}
              </h2>
              <span className="text-2xl text-white p-4 font-bold badge badge-neutral badge-lg" style={{textWrap: "nowrap"}}>${product.price} USD</span>
            </div>
            <div className="divider"/>
            <p className="text-black lg:text-xl">{product.description}</p>
            <div className="py-10">
              <div className="grid grid-cols-2 justify-items-center text-center lg:text-left lg:flex gap-10">
                {CategoryProp.properties.map((Cat) => {
                  return (
                    <div key={Cat.name} className=" ">
                      <label className="text-xl text-black">
                        {Cat.name}
                      </label>
                      <div className="grid grid-cols-3 gap-4 py-10">
                        {Cat.values.map((v) => {
                          return (
                            <div key={v} className="">
                              <button
                                className={`btn btn-circle hover:bg-inherit ${
                                  selectedButtons[Cat.name] === v ? 'bg-white' : ''
                                }`}
                                onClick={() => handleButtonClick(Cat.name, v)}
                              >
                                {v}
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}  
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  className="btn bg-white border-2 rounded-full disabled:bg-slate-100"
                  onClick={() => {
                    // Check if all buttons are selected before enabling the "Add to Cart" button
                    if (areAllButtonsSelected()) {
                        // Perform your "Add to Cart" action here
                        // You can enable the button here and add your logic to add items to the cart.
                        // For example, you can set a state variable to enable the button and dispatch an action to add the items to the cart.
                        addProduct(product, selectedButtons);
                    }
                  }}
                  disabled={!areAllButtonsSelected()} // Disable the button if not all buttons are selected
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
    limit: 3,
  });

  const { id } = context.query;
  const product = await Product.findById(id);
  const productCategoryId = await Category.findById(product.category);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      CategoryProp: JSON.parse(JSON.stringify(productCategoryId)),
    },
  };
}