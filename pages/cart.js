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
import { OptionsDisplay } from '../components/OptionsDisplay/OptionsDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the CartPage component
export default function CartPage({ newProducts, CategoryProp }) {

  // Import cart-related functions and data from the CartContext
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);

  // State variables for managing form data and cart details
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);


  const [prodcutCatId, setProductCatId] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [size, setSize] = useState('');
  const [itemColor, setItemColor] = useState('');
  const [embroidedColor, setEmbroidedColor] = useState('');

  useEffect(() => {
    async function fetchProductsAndCheckSuccess() {
      try {
        if (cartProducts.length > 0) {
          const response = await axios.post('/api/cart', { ids: cartProducts });
          setProducts(response.data);
        }
        
        if (typeof window !== 'undefined' && window.location.href.includes('success')) {
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      } catch (error) {
        handleError('Error in useEffect:', error);
      }

    }
  
    fetchProductsAndCheckSuccess();
  }, [cartProducts, clearCart]);
  
  // Use useEffect to filter CategoryProp based on prodcutCatId
  // useEffect(() => {
  //   if (prodcutCatId != null) {
  //     // Filter CategoryProp based on prodcutCatId
  //     const newCat = CategoryProp.filter((category) => category._id === prodcutCatId);
  //     setFilteredCategories(newCat);
  //     console.log(filteredCategories)
  //   }
  // }, [prodcutCatId, CategoryProp]);

  // Function to add more of a specific product to the cart
  
  function moreOfThisProduct(id) {
    addProduct(id);
  }

  // Function to remove a specific product from the cart
  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  // Function to initiate the payment process
  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      size,
      itemColor,
      embroidedColor,
      cartProducts,
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

  // get product category id
  // let categoryExample;

  // for (const productCat of cartProducts) {
  //   const Cat = products.find(p => p._id === productCat)?.category || 0;
  //   categoryExample = Cat;
    
  // }

  // console.log(categoryExample)

  // Render the cart and checkout form
  
  const handleName = () => {
    if (name === '') {
      toast.error('Name cannot be blank'); // Show toast when input is blank
    }
  }

  const handleEmail = () => {
    if (email === '') {
      toast.error('Email cannot be blank'); // Show toast when input is blank
    }
  }

  const handleCity = () => {
    if (city === '') {
      toast.error('City cannot be blank'); // Show toast when input is blank
    }
  }

  const handlePostalCode = () => {
    if (postalCode === '') {
      toast.error('Postal Code cannot be blank'); // Show toast when input is blank
    }
  }

  const handleStreetAddress = () => {
    if (streetAddress === '') {
      toast.error('Street Address cannot be blank'); // Show toast when input is blank
    }
  }

  const handleCountry = () => {
    if (country === '') {
      toast.error('Country cannot be blank'); // Show toast when input is blank
    }
  }

  const handleSize = () => {
    if (size === '') {
      toast.error('Size cannot be blank'); // Show toast when input is blank
    }
  }

  const handleItemColor = () => {
    if (itemColor === '') {
      toast.error('Item Color cannot be blank'); // Show toast when input is blank
    }
  }

  const handleEmbroidedColor = () => {
    if (embroidedColor === '') {
      toast.error('Embroided Color cannot be blank'); // Show toast when input is blank
    }
  }


  const stateHandler = () => {
    handleName(),
    handleEmail(),
    handleCity(),
    handlePostalCode(),
    handleStreetAddress(),
    handleCountry(),
    handleSize(),
    handleItemColor(),
    handleEmbroidedColor()

    if (name && email && city && postalCode && streetAddress && country && size && itemColor && embroidedColor != null) {
      goToPayment()
    }
  }
  
  return (
    <>
      {isSuccess ?
      <>
        <div className="bg-white text-center text-black">
        <div className='pt-32 lg:py-40 items-center justify-center flex'>
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
          <div className="actions">
          
          </div> 
          </div> 
        </div>
        </div>
        </div>
        <NewProducts products={newProducts} />
      </>
      : 
      <>
        <div className="bg-white grid grid-cols-1 gap-4 md:grid-cols-2 pt-4 pb-5">
          {/* Cart details */}
          <div className="text-black border-2 border-black p-6 mx-5 rounded-xl">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>

            {/* if theres no products selected by client card will display empty */}

            {!cartProducts?.length && <p>No products in cart</p>}

            {/* if theres no products selected by client card will display empty */}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr className='hidden lg:grid grid-cols-4 gap-10'>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Add. Options</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className='grid grid-cols-1 lg:grid-cols-4 gap-10 items-center border-b-2 border-b-black'>
                      {/* Display product details */}
                      <td className="grid mt-10">
                        <div className='justify-self-center'>
                          <img src={product.images[0]} alt={product.title} className='rounded-full border-2 w-40 border-black' />
                        </div>
                        <div className="text-center pt-3">
                          <p className="font-bold text-black">{product.title}</p>
                        </div>
                      </td>
                      <td className="text-center">
                        {/* Buttons to adjust product quantity */}
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <span className="mx-2">
                          {cartProducts.filter((p) => p === product._id).length}
                        </span>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td className="font-bold text-center">${product.price}</td>
                      <td className='grid gap-3 py-10 justify-self-center'>
                        <input
                          type="text"
                          placeholder="Size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className='border-2 border-black rounded-md bg-white text-center w-36'
                        />
                        <input
                          type="text"
                          placeholder="Item Color"
                          value={itemColor}
                          onChange={(e) => setItemColor(e.target.value)}
                          className='border-2 border-black rounded-md bg-white text-center w-36'
                        />
                        <input
                          type="text"
                          placeholder="Embroided Color"
                          value={embroidedColor}
                          onChange={(e) => setEmbroidedColor(e.target.value)}
                          className='border-2 border-black rounded-md bg-white text-center w-36'
                        />
                      </td>
                      {/* <OptionsDisplay {...products}/> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {/* Display the total cost */}
            <div className="grid justify-between items-center mt-12">
              <label className='flex  gap-5 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                    <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
                </svg>
                <p className="font-bold text-xs">if your buying 2 or more of the same item dont worry we will know if you use a comma for example: (L, M) under size</p>
              </label>
              <div className='flex py-3 gap-5'>
                <p className="font-bold text-6xl">Total:</p>
                <p className="font-bold text-6xl">${total}</p>
              </div>
            </div>
          </div>

          {/* Checkout form */}
          <div className="bg-[#A7A2A9] text-white p-6 mx-5 rounded-xl">
            <h2 className="text-2xl font-bold">Checkout</h2>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    Name
                  </label>
                  <Input
                    white
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    Email
                  </label>
                  <Input
                    // placeholder="Email"
                    white
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    city
                  </label>
                  <Input
                    // placeholder="City"
                    white
                    type={"text"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    Zip code
                  </label>
                  <Input
                    white
                    type={"text"}
                    // placeholder="Zip code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    Street Address
                  </label>
                  <Input
                    white
                    // placeholder="Street Address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='block mb-3 text-xl font-bold text-[#05060f99] hover:text-[#05060fc2]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                    Country
                  </label>
                  <Input
                    white
                    // placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="mt-4">
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
      </>
      }
      <ToastContainer/>
    </>
  );
}

// Look for category id in cart items 
// then look that id up on the category table
// then display the category name on the cart page
// and the subsequent props from that category
//
// export async function getServerSideProps() {
//   await mongooseConnect();
//   const CategoryItemsIds = await Product.Category.find({}, null, {
//     sort: { _id: -1 },
//     limit: 4,
//     timeOut: 20000
//   })


export async function getServerSideProps() {
  await mongooseConnect();
  // const CategoryItemsIds = await Product.Category.find({}, null, {
  //   sort: { _id: -1 },
  //   limit: 4,
  //   timeOut: 20000
  // })
  const CategoryProp = await Category.find({}, null, {
    sort: { _id: -1 },
    // can i leave the limit as all of the available?
    timeOut: 20000
  })
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 4,
    timeOut: 20000
  });
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      CategoryProp: JSON.parse(JSON.stringify(CategoryProp)),
    },
  };
}
