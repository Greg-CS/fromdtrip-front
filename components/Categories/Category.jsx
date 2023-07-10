import React from 'react'
import { CategoryGrid } from './CategoryGrid';

export const Category = (Category) => {
  return (
    <>
      <div class="custom-shape-divider-top-1689004285">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="bg-[#575A5E] py-10">
        <h1 className="relative text-white text-4xl font-mono font-bold pl-5">
          Categories
        </h1>
        <CategoryGrid categories={Category} />
      </div>
    </>
  ); 
}
