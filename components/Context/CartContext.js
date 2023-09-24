import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const [productSpecifics, setProductSpecifics] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  
  useEffect(() => {
    if(ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')))
    }
  }, []);

  useEffect(() => {
    if (productSpecifics?.length > 0) {
      ls?.setItem("ItemSpecifics", JSON.stringify(productSpecifics));
    }
  }, [productSpecifics]);


  useEffect(() => {
    if (ls && ls.getItem('ItemSpecifics')) {
      setProductSpecifics(JSON.parse(ls.getItem('ItemSpecifics')));
    }
  }, []);

  function addProductSpecifics(selectedButtons, productID) {
    // Create a new object with the productId as a property
    const productSpecific = { productId: productID, ...selectedButtons };
    
    setProductSpecifics(prev => [...prev, productSpecific]);
  }
  

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

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, productSpecifics, addProductSpecifics, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}