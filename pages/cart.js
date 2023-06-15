import React, { useContext } from 'react';
import { Center } from "../components/Center/Center";
import { Button } from '../components/Buttons/Button';
import { CartContext } from '../components/CartContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from '../components/Table';
import { Input } from '../components/Input';

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
      <div className="bg-[#CBD4C2] grid grid-cols-1 gap-4 md:grid-cols-2 pt-4">
        <div className="bg-white rounded-r-lg p-6 mb-5">
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
        <div className="bg-white rounded-l-lg p-6 mb-5">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <div className="mt-4">
            <Input
              placeholder="Name"
              white
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              placeholder="Email"
              white
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              white
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              white
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              white
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              white
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Button black="true" onClick={goToPayment}>Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
}