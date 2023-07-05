import { useState } from "react";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { ProductsGrid } from "../components/Products/ProductsGrid";
import { Title } from "../components/Title"
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
    <div className="bg-[#474A48]">
      <Title>
        <span className="pl-5">All Products</span>
      </Title>
      <ProductsGrid products={filteredProducts} />
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
