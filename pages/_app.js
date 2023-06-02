import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import { CartContextProvider } from "../components/CartContext";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp
