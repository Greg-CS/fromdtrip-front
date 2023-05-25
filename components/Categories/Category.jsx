import React from 'react'
import { Title } from "../Title";
import { CategoryGrid } from './CategoryGrid';
const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Shirts",
  },
  {
    id: 3,
    name: "Socks",
  }
]

export const Category = () => {
  return (
    <div className="bg-[#FFFCFF] text-black py-10">
      <Title>
        <span className="pl-5 text-center">Categories</span>
      </Title>
      <CategoryGrid categories={categories} />
    </div>
  ); 
}
