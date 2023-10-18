import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const [productSpecifics, setProductSpecifics] = useState({});

  useEffect(() => {
    if(cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
      ls?.setItem("item specifics", JSON.stringify(productSpecifics));
    }
  }, [cartProducts]);
  
  useEffect(() => {
    if(ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')))
    }
  }, []);

  function addProduct(productID, selectedButtons) {
    setCartProducts(prev => [...prev, productID]);
    setProductSpecifics(prev => ({...prev, selectedButtons}));
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

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, productSpecifics, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}