import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import { CartContextProvider } from "../components/Context/CartContext";
// import { SessionProvider } from "next-auth/react"
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    // <SessionProvider session={session}>
      <CartContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    // </SessionProvider>
  );
}

export default MyApp;
