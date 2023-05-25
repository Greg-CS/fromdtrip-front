import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import { CartContextProvider } from "../components/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  )
}

export default MyApp
