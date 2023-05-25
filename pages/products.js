import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { ProductsGrid } from "../components/Products/ProductsGrid";
import { Title } from "../components/Title"
export default function ProductsPage({products}) {
  return (
    <div className="bg-[#FFFCFF] border-2 border-t-gray-200">
        <Title>
          <span className='pl-5'>
            All Products
          </span>
        </Title>
        <ProductsGrid products={products} />
    </div>
  );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{ '_id':-1}});
    console.log(products);

    return {
        props: {
           products: JSON.parse(JSON.stringify(products))
        }
    };  
}
