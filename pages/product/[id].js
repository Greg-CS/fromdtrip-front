import { useContext, useEffect, useState } from "react";

import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

import ProductImages from "../../components/Products/ProductImg";
import { CartIcon } from "../../components/icons/CartIcon"
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
      <div className="bg-[#355070] p-12 text-[#EAAC8B]">
        <div className="grid lg:flex lg:justify-between p-2 rounded-2xl lg:p-12 bg-[#6D597A] lg:rounded-2xl">
          <div className="grid justify-center w-full lg:w-8/12">
            <ProductImages images={product.images} />
          </div>
          <div className="w-full lg:w-4/12">
            <div className="flex items-center gap-5 pb-5">
              <h2 className="text-4xl font-bold uppercase">
                {product.title}
              </h2>
              <span className="p-4 border-2 border-transparent text-[#EAAC8B] text-2xl font-bold badge bg-[#B56576] badge-neutral badge-lg" style={{ textWrap: "nowrap" }}>${product.price} USD</span>
            </div>
            <div className="divider" />
            <div className="grid">
              <p className="lg:text-xl">{product.description}</p>
              <div className="flex justify-end">
                <button
                  className="mt-10 btn bg-[#6D597A] disabled:bg-[#B56576] disabled:text-slate-300"
                  onClick={() => {
                    // Check if all buttons are selected before enabling the "Add to Cart" button
                    if (areAllButtonsSelected()) {
                      // Perform your "Add to Cart" action here
                      // You can enable the button here and add your logic to add items to the cart.
                      // For example, you can set a state variable to enable the button and dispatch an action to add the items to the cart.
                      addProduct(product, selectedButtons);
                      addProductSpecifics(selectedButtons, product._id);
                    }
                  }}
                  disabled={!areAllButtonsSelected()} // Disable the button if not all buttons are selected
                >
                  {!areAllButtonsSelected() ?
                    <>
                      <span>Select item specifics</span>
                    </>
                    :
                    <>
                      <CartIcon />
                      <span>Add to cart</span>
                    </>
                  }
                  <span className="ml-2"></span>
                </button>
              </div>
            </div>
            {
              CategoryProp.properties.length > 0 ?
                <>
                  <div className="divider" />
                  <span className="text-4xl font-bold uppercase">
                    Item specifics
                  </span>
                </>
                :
                null
            }
            <div className="grid grid-cols-1 gap-10 pt-5 text-center lg:grid-cols-2 justify-items-center lg:text-left lg:flex">
              {CategoryProp.properties.map((Cat) => {
                return (
                  <div key={Cat.name} className="">
                    <label className="text-xl">
                      {Cat.name}
                    </label>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                      {Cat.values.map((v) => {
                        return (
                          <div key={v}>
                            <button
                              className={`bg-[#B56576] p-2 rounded-2xl text-md hover:bg-[#EAAC8B] hover:text-[#355070] ${selectedButtons[Cat.name] === v ? 'bg-[#EAAC8B] text-[#355070]' : ''
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
            <div className="divider" />
            <div>
              <span className="text-4xl font-bold uppercase">
                Payment methods
              </span>
              <Currencies />
            </div>
            <div className="divider" />
            <div>
              <span className="text-4xl font-bold uppercase">
                Socials
              </span>
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