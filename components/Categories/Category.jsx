import React from 'react'
import { CategoryGrid } from './CategoryGrid';

export const Category = ({Category}) => {
  return (
    <>
      <div className="py-10 wave">
        <h1 className="relative text-white text-4xl font-mono font-bold pl-5">
          Shop by Category
        </h1>
        <CategoryGrid Category={Category} />
      </div>
    </>
  ); 
}
