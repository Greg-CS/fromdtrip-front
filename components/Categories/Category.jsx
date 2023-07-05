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
    <div className="bg-[#575A5E] py-10">
      <h1 className="text-white text-3xl font-mono font-bold pl-5">Categories</h1>
      <CategoryGrid categories={categories} />
    </div>
  ); 
}
