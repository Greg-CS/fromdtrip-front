import { useState } from "react";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { ProductsGrid } from "../components/Products/ProductsGrid";
import { StayInTouch } from "../components/StayInTouch/StayInTouch";
export default function ProductsPage({products, CategoryProp}) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (categoryId) => {
    // Apply the filter logic here based on categoryId
    const filteredItems = products.filter((product) => {
      return product.category === categoryId;
    }); 

    setFilteredProducts(filteredItems);
  };
  
  return (
      <div className="bg-white">
          <div className="flex items-center pt-10 justify-between">
            <h1 className="relative text-black text-5xl font-extrabold pl-5">
              Shop all items
            </h1>
            <div className="dropdown dropdown-end pr-5">
              <label tabIndex={0} className="btn bg-[black] m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#575A5E] text-white font-mono border-2 border-base-50 rounded-box w-52">
              {CategoryProp.map((Cat) => (
                <li key={Cat._id} onClick={() => handleFilter(Cat._id)} className="py-2 px-2">
                  {Cat.name}
                </li>
              ))}
              </ul>
            </div>
          </div>
        <ProductsGrid products={filteredProducts} />
        <StayInTouch/>
      </div>
  );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{ '_id':-1}});
    console.log(products);
    const CategoryProp = await Category.find({}, null, {
      sort: { _id: -1 },
      timeOut: 20000
    });
    return {
        props: {
           products: JSON.parse(JSON.stringify(products)),
           CategoryProp: JSON.parse(JSON.stringify(CategoryProp)),
        }
    };  
}
