import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useRouter } from "next/router";
import Link from "next/link";
export const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  const router = useRouter();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavActive(false);
  };

  return (
    <div className="navbar bg-[#2C302E] text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Fromdtrip
        </Link>
      </div>
      <div className="flex-none hidden lg:flex">
        <div className="flex gap-10">
          <Link href="/products">All products</Link>
          {/* <Link href="/categories">Categories</Link> */}
          <Link href="/signup">Account</Link>
        </div>
        <div className="dropdown dropdown-end">
          <a href={"/cart"}>
            <label tabIndex={0} className="btn btn-ghost btn-circle relative m-1">
              <button className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartProducts.length}
                </span>
              </button>
            </label>
          </a>
        </div>
      </div>
      <button className="md:hidden" onClick={handleMobileNavToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMobileNavActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex flex-col h-screen max-w-xs w-full bg-[#99907D]">
            <div className="grid gap-10 p-4">
              <div className="flex justify-between mt-10 items-center">
                <Link href={"/"}>
                  <button onClick={handleMobileNavClose}>Home</button>
                </Link>
                <div>
                  <button
                    className="self-end px-4 py-2"
                    onClick={handleMobileNavClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Link href={"/products"}>
                <button onClick={handleMobileNavClose}>All products</button>
              </Link>
              {/* <Link href={"/categories"}>Categories</Link> */}
              <Link href={"/signup"}>
                <button onClick={handleMobileNavClose}>Account</button>
              </Link>
              <div className="flex justify-between">
                <Link href={"/cart"}>
                  <button onClick={handleMobileNavClose}>Cart</button>
                </Link>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartProducts.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
