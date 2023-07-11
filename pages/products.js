import { useState } from "react";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { ProductsGrid } from "../components/Products/ProductsGrid";
export default function ProductsPage({products}) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log(products)
  const handleFilter = (filter) => {
    // Apply the filter logic here
    // You can modify this based on your specific filtering requirements
    const filteredItems = products.filter((product) => {
      // Replace 'filterProperty' with the property you want to filter on
      return product.filterProperty === filter;
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
          <h1 className="relative text-white text-4xl font-mono font-bold pl-5 pt-10">
            Shop by Category
          </h1>
        <ProductsGrid products={filteredProducts} />
      </div>
    </>
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
