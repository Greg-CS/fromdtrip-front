import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  const router = useRouter();
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
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
            {/* <Link href="/signup">Account</Link> */}
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
        <button className="md:hidden" onClick={() => setToggle(!isToggled)}>
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
      </div>
      {isToggled && (
          <AnimatePresence>
            {isToggled && (
              <motion.div
                className="navbar gap-5 pl-6 bg-[#2C302E] text-white font-mono"
                initial="hidden"
                animate={isToggled ? "visible" : "hidden"}
                exit="hidden"
                variants={navContainer}
              >
                <motion.ul
                  className="navList grid gap-10"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navList}
                >
                  <motion.a href={"/products"} className="nav-item" variants={navItem}>
                    <button onClick={() => setToggle(!isToggled)}>All products</button>
                  </motion.a>
                  {/* <Link href={"/signup"}>
                    <button onClick={() => setToggle(!isToggled)}>Account</button>
                  </Link> */}
                  <motion.div variants={navItem} className="flex justify-between">
                    <Link href={"/cart"}>
                      <button onClick={() => setToggle(!isToggled)}>Cart</button>
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
                  </motion.div>  
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
      )}
    </>
  );
}
