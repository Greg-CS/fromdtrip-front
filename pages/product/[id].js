import { Center } from "../../components/Center/Center";
// import {Title} from "../../components/Title";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
// import {WhiteBox} from "../../components/WhiteBox";
import ProductImages from "../../components/Products/ProductImg";
import {CartIcon} from "../../components/icons/CartIcon"
// import {Button} from "../../components/Button"
import { CartContext } from "../../components/CartContext";
import { useContext } from "react";
import { NewProducts } from "../../components/Products/NewProducts";
import { Currencies } from "../../components/Currencies/Currencies";

export default function ProductPage({ product, newProducts }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <div className="bg-blue-500">
        <div className="grid lg:flex lg:justify-between lg:gap-40 xs:p-0 sm:p-10">
          <div className="bg-blue-300 rounded-lg p-6">
            <ProductImages images={product.images} />
          </div>
          <div className="py-5 px-5">
            <h2 className="text-2xl font-bold mb-4 uppercase text-white">
              {product.title}
            </h2>
            <p className="text-white lg:text-xl">{product.description}</p>
            <div className="lg:flex lg:justify-between gap-20 py-5">
              <div>
                <span className="text-8xl text-white">${product.price}</span>
              </div>
              <div>
                <button
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center"
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
  const featuredProductId = "6461913287ecc9911950dac8";
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}