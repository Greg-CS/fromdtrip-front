import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { CartContext } from '../components/Context/CartContext';
import { Table } from '../components/Table/Table';
import { Input } from '../components/Input/Input';
import { NewProducts } from "../components/Products/NewProducts";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the CartPage component
export default function CartPage({ newProducts }) {

  // Import cart-related functions and data from the CartContext
  const { cartProducts, productSpecifics, clearCart } = useContext(CartContext);

  // State variables for managing form data and cart details
  const [products, setProducts] = useState([]);

  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [addressSpec, setAddressSpec] = useState('');
  const [city, setCity] = useState('');
  const [State, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length >= 0) {
      axios.post('/api/cart', { ids: cartProducts })
        .then(response => {
          setProducts(response.data);
        })
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  // Function to initiate the payment process
  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      firstName,
      lastName,
      email,
      city,
      postalCode,
      address,
      country,
      cartProducts,
      productSpecifics
    });

    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  // Calculate the total cost of items in the cart
  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  // Render the cart and checkout form

  const stateHandler = () => {
    if (firstName === '') {
      toast.error('firstName cannot be blank'); // Show toast when input is blank
    }
    if (lastName === '') {
      toast.error('Lastname cannot be blank');
    }
    if (email === '') {
      toast.error('Email cannot be blank'); // Show toast when input is blank
    }
    if (city === '') {
      toast.error('City cannot be blank'); // Show toast when input is blank
    }
    if (postalCode === '') {
      toast.error('Postal Code cannot be blank'); // Show toast when input is blank
    }
    if (address === '') {
      toast.error('Street Address cannot be blank'); // Show toast when input is blank
    }
    if (country === '') {
      toast.error('Country cannot be blank'); // Show toast when input is blank
    }

    if (firstName && lastName && email && city && postalCode && address && country != null) {
      goToPayment()
    }
  }

  return (
    <>
      {isSuccess ?
        <>
          <div className="text-center text-black bg-[#355070]">
            <div className='flex items-center justify-center pt-32 lg:py-40'>
              <div className="card">
                <Link href={"/"}>
                  <button className="dismiss" onClick={() => clearCart()} type="button">×</button>
                </Link>
                <div className="header">
                  <div className="image">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                    </svg>
                  </div>
                  <div className="content">
                    <span className="title">Order validated</span>
                    <p className="message">Thank you for your purchase. You will be receiving a email in the following days on your order status.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewProducts products={newProducts} />
        </>
        :
        <div className="grid lg:flex justify-evenly py-5 min-h-screen bg-[#6D597A] text-[#EAAC8B]">
          {/* Checkout form */}
          <div className="w-auto p-0 lg:p-6 lg:w-6/12 rounded-xl">
            <div className='grid justify-end'>
              <Link className="" href="/">
                <div className="rounded-full spinning-div">
                  <img className="w-full h-full" src={'/img/Logo.png'} alt="logo" />
                </div>
              </Link>
              <div className='flex gap-5 py-10 justify-left'>
                <span className='font-bold'>Information</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                <span className='font-bold'>Payment</span>
              </div>
              <div className="grid text-center lg:text-left">
                <span className='pb-3 text-2xl font-bold'>
                  Shipping Address
                </span>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" autoFocus value={email} placeholder='example@email.com'
                    onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>
                <div className='flex items-center justify-center gap-3 py-3 lg:justify-start'>
                  <input type="checkbox" className="checkbox" />
                  <span className='text-xs'>Let me know for updates on order or additional drops</span>
                </div>
              </div>
              <span className='py-3 text-2xl font-bold'>
                Shipping Address
              </span>
              <div className="py-3">
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" value={country} placeholder='Puerto Rico'
                    onChange={(e) => setCountry(e.target.value)} type="text" />
                  <span>Country :</span>
                </div>
              </div>
              <div className='grid justify-between gap-5 py-3 2xl:flex'>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-[21.5rem]' required="" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} type="text" />
                  <span>First name :</span>
                </div>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-[21.5rem]' required="" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} type="text" />
                  <span>Last name :</span>
                </div>
              </div>
              <div className='py-3'>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
                  <span>Address :</span>
                </div>
              </div>
              <div className='py-3'>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" type="text" />
                  <span>Apartment, suite, etc. (optional) :</span>
                </div>
              </div>
              <div className='grid justify-between gap-5 py-3 2xl:flex'>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" value={city} onChange={(e) => setCity(e.target.value)} type="text" />
                  <span>City :</span>
                </div>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" value={State} onChange={(e) => setState(e.target.value)} type="text" />
                  <span>State :</span>
                </div>
                <div class="inputBox flex justify-center">
                  <input className='w-[20rem] lg:w-[30rem] 2xl:w-full' required="" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" />
                  <span>Zip Code :</span>
                </div>
              </div>
              <div className='flex items-center gap-3 py-3'>
                <input type="checkbox" className="checkbox" />
                <span className='text-xs'>Save this information for next time</span>
              </div>
              <div className="">
                <Button black="true" onClick={stateHandler}>
                  Checkout
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path id="fire" strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path id="fire" strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal" />

          {/* Cart details */}
          <div className="hidden p-6 lg:grid lg:w-6/12 rounded-xl">

            {/* if theres no products selected by client card will display empty */}

            {!cartProducts?.length && <p>No products in cart</p>}

            {/* if theres no products selected by client card will display empty */}

            {products?.length > 0 && (
              <div>
                <div>
                  {products.map((product) => (
                    <>
                      <div key={product._id} className='grid items-center grid-cols-2 gap-10'>
                        {/* Display product details */}
                        <div className="grid grid-cols-2 mt-10">
                          <div className='row-span-3 cols-span-2'>
                            <img src={product.images[0]} alt={product.title} className='w-[5rem] h-[5rem] rounded-2xl' />
                          </div>
                          <div className="grid pt-3 text-left">
                            <p className="font-bold ">{product.title}</p>
                            <div className='grid'>
                              {productSpecifics
                                .filter(specs => specs.productId === product._id) // Filter for specifics matching the current product
                                .map((obj, index) => {
                                  // Get the keys and values of the current object
                                  const entries = Object.entries(obj);

                                  return (
                                    <div key={index}>
                                      {entries.map(([key, value]) => (
                                        <div key={key} className='text-xs text-left'>
                                          <span>{key}:</span> <span>{value}</span>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                        <span className="font-bold text-center">${cartProducts.filter(id => id === product._id).length * product.price}</span>
                        {/* <OptionsDisplay {...products}/> */}
                      </div>
                      <div className='divider' />
                    </>
                  ))}
                  <div>
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
                </div>
              </div>
            )}
            {/* Display the total cost */}
            <div className="grid items-center justify-between mt-12">
              <div className='flex gap-5 py-3'>
                <p className="text-6xl font-bold">Total:</p>
                <p className="text-6xl font-bold">${total}</p>
              </div>
            </div>
          </div>

        </div>
      }
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 4,
    timeOut: 20000
  });

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}