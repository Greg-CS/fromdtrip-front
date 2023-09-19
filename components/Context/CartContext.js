import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const [size, setSize] = useState([]);

  useEffect(() => {
    if(cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  
  useEffect(() => {
    if(ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')))
    }
  }, []);

  function addProduct(productID) {
    setCartProducts(prev => [...prev, productID]);
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if(pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }


  function addSize(productID, size) {
    setCartProducts(prev => [...prev, productID]);
    setSize(prev => [...prev, size]);
    console.log(cartProducts, size)
  }

  function addColor(productID, Color) {
    setCartProducts(prev => [...prev, productID])
    console.log(cartProducts)
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, setSize, addProduct, removeProduct, clearCart, addSize }}>
      {children}
    </CartContext.Provider>
  );
}