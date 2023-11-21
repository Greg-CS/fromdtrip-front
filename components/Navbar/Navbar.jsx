import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export const Navbar = () => {

  const router = useRouter();
  const { cartProducts, addProduct, addProductSpecifics, removeProduct, productSpecifics, clearCart, removeProductSpecifics } = useContext(CartContext);
  const [isCart, setIsCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [drawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const handleDrawer = () => setIsDrawerOpen(!drawerOpen);

  useEffect(() => {
    if (open === true) {
      setOpen(true);
      setIsDrawerOpen(false);
    } else if (drawerOpen === true) {
      setOpen(false);
      setIsDrawerOpen(true);
    }
  }, [drawerOpen, open]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  // Function to remove a specific product from the cart
  function lessOfThisProduct(id) {
    removeProduct(id);
    removeProductSpecifics(id);
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

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <div
        className={`navbar bg-[#355070] text-[#EAAC8B] ${
          isCart ? " hidden" : ""
        }`}
      >
        <button className="flex lg:hidden" onClick={handleMenu}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {open ? (
          <div className="fixed flex flex-col top-0 min-h-screen bg-[#6D597A] w-[15rem] border-r-2 border-[#B56576] z-10 text-[#EAAC8B] left-0">
            <div className="flex items-center justify-between p-2 mb-6 gap-9">
              <h1 className="text-2xl font-bold">Menu</h1>
              <button onClick={handleMenu} className="btn btn-ghost btn-circle">
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
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="grid gap-10 p-2">
              <Link
                onClick={handleMenu}
                href="/"
                className="text-2xl font-extrabold"
              >
                Home
              </Link>
              <Link
                onClick={handleMenu}
                href="/products"
                className="text-2xl font-extrabold"
              >
                All products
              </Link>
              <Link
                onClick={handleMenu}
                href="/faq"
                className="text-2xl font-extrabold"
              >
                FAQ
              </Link>
              <Link
                onClick={handleMenu}
                href="/contact"
                className="text-2xl font-extrabold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : null}
        <div className="justify-center flex-1 gap-5 lg:justify-start">
          <Link className="" href="/">
            <div className="rounded-full spinning-div">
              <img className="w-full h-full" src={"/img/Logo.png"} alt="logo" />
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
            <Link
              href="/faq"
              className="hidden text-2xl font-extrabold lg:flex"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="hidden text-2xl font-extrabold lg:flex"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="hidden text-2xl font-extrabold lg:flex"
            >
              All products
            </Link>
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
      {drawerOpen ? (
        <div className="fixed top-0 right-0 min-h-screen bg-[#6D597A] w-[22rem] border-l-2 border-[#B56576] z-10 text-[#EAAC8B]">
          <div className="flex items-center justify-between p-5">
            <span className="text-2xl font-bold">My Cart</span>
            <button onClick={handleDrawer} className="btn btn-ghost btn-circle">
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
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          {!cartProducts?.length && (
            <p className="p-5 text-xl">No products in cart</p>
          )}

          {/* ^if theres no products selected by client card will display empty^ */}

          <div className="p-2">
            <button
              onClick={toggleAccordion}
              className="flex items-center justify-between w-full py-2 focus:outline-none"
            >
              <span className="text-lg">Cart products</span>
              <span
                className={`transform transition duration-150 ease-in-out ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`accordion-body my-2 grid gap-3 items-center ${
                isOpen ? "open" : "closed"
              }`}
            >
              {products.map((product) => {
                return (
                  <div key={product._id} className="flex items-center gap-2">
                    <div className="row-span-3 cols-span-2">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-[5rem] h-[5rem] rounded-2xl"
                      />
                    </div>
                    <div>
                      <p className="font-bold ">{product.title}</p>
                    </div>
                    <div className="grid justify-end">
                      <div className="p-5 text-right text-md">
                        ${product.price}.00 USD
                      </div>
                      <div
                        className="bg-[#E56B6F] rounded-xl mr-5 p-2"
                        style={{
                          width: "fit-content",
                          justifySelf: "self-end",
                        }}
                      >
                        {/* Buttons to adjust product quantity */}
                        <button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </button>
                        <span className="px-2">
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </span>
                        <button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </button>
                      </div>
                    </div>
                    {/* <div>
                      {productSpecifics
                        .filter((specs) => specs.productId === product._id)
                        .map((obj, index) => {
                          const entries = Object.entries(obj);
                          return (
                            <>
                              <div key={index}>
                                {entries.map(([key, value]) => (
                                  <div
                                    key={key}
                                    className="flex justify-between text-xs"
                                  >
                                    <span>{key}: </span>
                                    <span>{value}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          );
                        })}
                    </div> */}
                    <div className="divider" />
                  </div>
                );
              })}

            </div>
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

            <div id="checkout" className="m-5 w-fit">
              <Link href={"/cart"}>
                <button
                  onClick={handleDrawer}
                  className="btn bg-[#E56B6F] hover:bg-[#355070] rounded-2xl text-[#EAAC8B] border-2 border-transparent hover:border-transparent"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>

          {/* {products?.length > 0 && (
            <>

              <div id="cart-items">
                {products.map((product) => (
                  <>
                    <div
                      key={product._id}
                      className="flex items-center justify-between"
                    >

                      <div className="grid p-5">
                        <div className="justify-self-center">
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-20 border-2 border-black rounded-2xl"
                          />
                        </div>
                        <div className="pt-3 text-center">
                          <p className="font-bold">{product.title}</p>
                        </div>
                      </div>
                      <div className="grid justify-end">
                        <div className="p-5 text-xl text-right">
                          ${product.price}.00 USD
                        </div>
                        <div
                          className="bg-[#E56B6F] rounded-xl mr-5 p-2"
                          style={{
                            width: "fit-content",
                            justifySelf: "self-end",
                          }}
                        >
                          
                          <button
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </button>
                          <span className="px-2">
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </span>
                          <button
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 divider" />
                  </>
                ))}
              </div>


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

              <div id="checkout" className="m-5 w-fit">
                <Link href={"/cart"}>
                  <button
                    onClick={handleDrawer}
                    className="btn bg-[#E56B6F] hover:bg-[#355070] rounded-2xl text-[#EAAC8B] border-2 border-transparent hover:border-transparent"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </>
          )} */}
        </div>
      ) : null}
    </>
  );
}
