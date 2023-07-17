import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { CartContext } from '../components/Context/CartContext';
import { Table } from '../components/Table/Table';
import { Input } from '../components/Input/Input';


export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then(response => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    } else {
      setIsSuccess(false);
    }

  }, [clearCart]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });

    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
          <div className="text-center">
            <div className="bg-white p-40">
              <h1 className="text-2xl font-bold">Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </div>
          </div>
      </>
    );
  }

  return (
    <>
      <div className="custom-shape-divider-top-1688534628 bg-[#474A48]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2C302E">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="bg-[#474A48] grid grid-cols-1 gap-4 md:grid-cols-1 pt-4 pb-5">
        <div className="bg-[#A7A2A9] text-white p-6 mx-5 rounded-xl">
          <h2 className="text-2xl font-bold">Cart</h2>
          {!cartProducts?.length && <p>No products in cart</p>}
          {products?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="flex justify-center mt-10">
                      <div className="w-40">
                        <img src={product.images[0]} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold">{product.name}</p>
                      </div>
                    </td>
                    <td className="text-center">
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
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <div className="flex justify-between items-center mt-4">
            <p className="font-bold">Total</p>
            <p className="font-bold">${total}</p>
          </div>
        </div>
        <div className="bg-[#A7A2A9] text-white p-6 mx-5 rounded-xl">
          <h2 className="text-2xl font-bold">Checkout</h2>
              <div className="mt-4">
                <label className='block mb-3 text-xl font-bold text-[#05060f99]' style={{transition: "color .3s cubic-bezier(.25,.01,.25,1) 0s"}}>
                  Name
                </label>
                <Input
                  // placeholder="Name"
                  white
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <Button black="true" onClick={goToPayment}>
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
  );
}