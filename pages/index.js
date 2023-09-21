import { Featured } from "../components/Products/Featured";
import { NewProducts } from "../components/Products/NewProducts";
import { Category as Categories } from "../components/Categories/Category";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { mongooseConnect } from "../lib/mongoose";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { JoinUs } from "../components/JoinUs/JoinUs";
import { StayInTouch } from "../components/StayInTouch/StayInTouch";

export default function Home({ featuredProduct, newProducts, CategoryProp }) {
  return (
    <>
      {/* <Featured/>
      <Hero/> */}
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
      <About/>
      <JoinUs/>
      {/* <StayInTouch/> */}
      {/* <Categories Category={CategoryProp} /> */}
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "6461913287ecc9911950dac8";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 3,
    timeOut: 20000
  });
  const CategoryProp = await Category.find({}, null, {
    sort: { _id: -1 },
    limit: 5,
    timeOut: 20000
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      CategoryProp: JSON.parse(JSON.stringify(CategoryProp)),
    },
  };
}