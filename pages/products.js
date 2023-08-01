import { useState } from "react";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { ProductsGrid } from "../components/Products/ProductsGrid";
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
    <>
      <div className="custom-shape-divider-top-1688534628 bg-[#575A5E]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2C302E">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <div className="bg-[#575A5E]">
          <div className="flex items-center pt-10 justify-between">
            <h1 className="relative text-white text-4xl font-mono font-bold pl-5">
              Shop all items
            </h1>
            <div className="dropdown dropdown-end pr-5">
              <label tabIndex={0} className="btn bg-[#2C302E] m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
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
      </div>
      <div className="divider-shop w-full h-[300px]">
      </div>
    </>
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
