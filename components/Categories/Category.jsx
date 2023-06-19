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
    <div className="bg-[#7D6F86] py-10">
      <Title>
        <span className="pl-5 text-center">Categories</span>
      </Title>
      <CategoryGrid categories={categories} />
    </div>
  ); 
}
