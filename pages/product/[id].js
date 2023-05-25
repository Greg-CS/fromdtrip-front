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

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Center>
        <div className="grid grid-cols-1 gap-40 md:grid-cols-2">
          <div className="bg-white rounded-lg p-6">
            <ProductImages images={product.images} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex items-center gap-20">
              <div>
                <span className="text-xl">${product.price}</span>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                  onClick={() => addProduct(product._id)}
                >
                  <CartIcon />
                  <span className="ml-2">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
}


export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}