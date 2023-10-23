import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../Button/Button"
import axios from "axios";
export const Navbar = () => {

  const router = useRouter();
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  console.log(cartProducts)
  const [isCart, setIsCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [drawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => setIsDrawerOpen(!drawerOpen)

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  // Function to remove a specific product from the cart
  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  useEffect(() => {
    async function fetchProductsAndCheckSuccess() {
      try {
        if (cartProducts.length > 0) {
          const response = await axios.post('/api/cart', { ids: cartProducts });
          setProducts(response.data);
        }
      } catch (error) {
        console.log('Error in useEffect:', error);
      }

    }

    fetchProductsAndCheckSuccess();
  }, [cartProducts]);


  useEffect(() => {
    if (router.pathname === "/cart") {
      setIsCart(true)
    } else {
      setIsCart(false)
    }
  }, [router.pathname])

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }
  return (
    <>
      <div className={`navbar bg-[#355070] text-[#EAAC8B] ${isCart ? " hidden" : ""}`}>
        <div className="flex-1 gap-5">
          <Link className="" href="/">
            <div className="rounded-full spinning-div">
              <img className="w-full h-full" src={'/img/Logo.png'} alt="logo" />
            </div>
          </Link>
          <span className="hidden lg:flex">
            <Link href="/">
              <h1 className="text-4xl font-extrabold">Fromdtrip</h1>
            </Link>
          </span>
        </div>
        <div className="flex flex-none">
          <div className="flex gap-10">
            <Link href="/products" className="text-2xl font-extrabold">All products</Link>
          </div>
          <button className="indicator" onClick={handleDrawer}>
            <label className="relative m-1 btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartProducts.length}
              </span>
            </label>
          </button>
        </div>
      </div>
      {drawerOpen ?
        <div className="fixed top-0 right-0 min-h-screen bg-[#6D597A] w-[22rem] border-l-2 border-[#B56576] z-10 text-[#EAAC8B]">
          <div className="flex items-center justify-between p-5">
            <span className="text-2xl font-bold">
              My Cart
            </span>
            <button onClick={handleDrawer} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          {!cartProducts?.length && <p className="p-5 text-xl">No products in cart</p>}

          {/* ^if theres no products selected by client card will display empty^ */}

          {products?.length > 0 && (
            <>

              {/* Cart item map */}

              <div id="cart-items">
                {products.map((product) => (
                  <>
                    <div key={product._id} className='flex items-center justify-between'>
                      {/* Display product details */}
                      <div className="grid p-5">
                        <div className='justify-self-center'>
                          <img src={product.images[0]} alt={product.title} className='w-20 border-2 border-black rounded-2xl' />
                        </div>
                        <div className="pt-3 text-center">
                          <p className="font-bold">{product.title}</p>
                        </div>
                      </div>
                      <div className="grid justify-end">
                        <div className="p-5 text-xl text-right">${product.price}.00 USD</div>
                        <div className="bg-[#E56B6F] rounded-xl mr-5" style={{ width: 'fit-content', justifySelf: "self-end" }}>
                          {/* Buttons to adjust product quantity */}
                          <Button onClick={() => lessOfThisProduct(product._id)}>
                            -
                          </Button>
                          <span className="px-2 border-x-2 border-[#EAAC8B]">
                            {cartProducts.filter(id => id === product._id).length}
                          </span>
                          <Button onClick={() => moreOfThisProduct(product._id)}>
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 divider" />
                  </>
                ))}
              </div>

              {/* Cart total */}

              <div id="cart-total">
                <div className="flex justify-between p-5">
                  <span className="text-2xl">Taxes:</span>
                  <span className="text-2xl">$0.00 USD</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="text-2xl">Shipping:</span>
                  <span className="text-md">Calculated at checkout</span>
                </div>
                <div className="flex justify-between p-5">
                  <span className="text-2xl">Total:</span>
                  <span className="text-2xl">${total}.00 USD</span>
                </div>
              </div>
              <div className="p-5 divider" />
              
              {/* proceed to checkout btn */}
              
              <div id="checkout" className="m-5 w-fit">
                <Link href={'/cart'}>
                  <button onClick={handleDrawer} className="btn bg-[#E56B6F] rounded-2xl text-[#EAAC8B] border-2 border-transparent">Proceed to Checkout</button>
                </Link>
              </div>
            </>
          )}
        </div>
        :
        null
      }
    </>
  );
}
