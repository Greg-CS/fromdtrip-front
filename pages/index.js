// import { Featured } from "../components/Products/Featured";
import { NewProducts } from "../components/Products/NewProducts";
import { Product } from "../models/Product";
import { mongooseConnect } from "../lib/mongoose";
import { About } from "../components/About/About";
import { JoinUs } from "../components/JoinUs/JoinUs";
// import { StayInTouch } from "../components/StayInTouch/StayInTouch";
import ParticleRing from "../components/Animations/ParticleRing";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";

export default function Home({ featuredProduct, newProducts }) {



  return (
    <>
      {/* <NewsLetter/> */}
      <ParticleRing products={featuredProduct}/>
      <NewProducts products={newProducts} />
      <About />
      <JoinUs />
      {/* <StayInTouch/> */}
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "6461913287ecc9911950dac8";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 5,
    timeOut: 20000
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}