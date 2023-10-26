import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts,setCartProducts] = useState([]);
  const [productSpecifics, setProductSpecifics] = useState([]);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
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

  function addProduct(productId) {
    setCartProducts(prev => [...prev,productId]);
  }

  function removeProduct(productId) {
    const productIndex = cartProducts.indexOf(productId);
    if (productIndex !== -1) {
      const newCartProducts = [...cartProducts];
      newCartProducts.splice(productIndex, 1);
      setCartProducts(newCartProducts);
    }
  }

  function removeProductSpecifics(selectedButtons, productID) {
    const productSpecific = { productId: productID, ...selectedButtons };
    let updatedArray = [];
    updatedArray = productSpecifics.filter((item) => item.productId !== productSpecific.productId);
    setProductSpecifics(updatedArray);
  }

  function clearCart() {
    setCartProducts([]);
  }
  return (
    <CartContext.Provider value={{cartProducts, productSpecifics,setCartProducts,addProduct, addProductSpecifics,removeProduct,removeProductSpecifics,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}