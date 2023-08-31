import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";

export const Navbar = () => {
  
  const { cartProducts } = useContext(CartContext);

  return (
    <nav className="bg-white py-5 px-10 flex justify-between items-center font-mono text-black">
      <img src="/img/Logo.png" alt="logo" className="h-[50px] w-[50px]"/>
      <div className="items-center hidden lg:flex gap-5 text-[32px]">
        <Link href={"/"}>
          Home
        </Link>
        <Link href={"/"}>
          About
        </Link>
        <Link href={"/"}>
          FAQ
        </Link>
        <Link href={"/"}>
          Shop
        </Link>
        <Link href={"/cart"}>
          <label tabIndex={0} className="btn btn-ghost btn-circle relative m-1">
            <button className="indicator">
              <img src="/img/Cart.svg" alt="logo" className="h-[50px] w-[50px]"/>
              <span className="badge badge-sm indicator-item">
                {cartProducts.length}
              </span>
            </button>
          </label>
        </Link>
      </div>
    </nav>
  );
}
