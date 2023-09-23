import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  
  useEffect(() => {
    if (productSpecifics) {
      ls?.setItem("ItemSpecifics", JSON.stringify(productSpecifics));
    }
  }, [productSpecifics]);

  useEffect(() => {
    if(ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')))
    }
  }, []);

  useEffect(() => {
    if (ls && ls.getItem('ItemSpecifics')) {
      setProductSpecifics(JSON.parse(ls.getItem('ItemSpecifics')));
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

  function addProductSpecifics(selectedButtons) {
    setProductSpecifics(prev => [...prev, selectedButtons]);
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}