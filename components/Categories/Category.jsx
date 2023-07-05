import React from 'react'
import { Title } from "../Title";
import { CategoryGrid } from './CategoryGrid';
const categories = [
  {
    id: 1,
    name: "All",
    image: "https://i.pinimg.com/736x/ca/63/b2/ca63b247a0d64a109a044c73ec28f7f9.jpg"
  },
  {
    id: 2,
    name: "Shirts",
    image: "/img/Logo.png"
  },
  {
    id: 3,
    name: "Socks",
    image:"/img/Logo.png"
  }
]

export const Category = () => {
  return (
    <>
    <div class="custom-shape-divider-top-1688535601">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
    </div>
    <div className="bg-[#575A5E] py-10">
      <h1 className="relative text-white text-4xl font-mono font-bold pl-5">Categories</h1>
      <CategoryGrid categories={categories} />
    </div>
    </>
  ); 
}
