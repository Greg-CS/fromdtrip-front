import React from 'react'
import Link from 'next/link'

export const CatBox = ({ _id, name, description, price, image }) => {
  let url = "/";
  console.log(name)
  return (
    <div className='text-center'>
      <div className="box-border w-72 h-80 bg-gray-200 border border-white shadow-md backdrop-filter backdrop-blur-lg rounded-lg cursor-pointer transition-all duration-500 grid place-items-center select-none font-bold text-black hover:border-black transform hover:scale-105 active:scale-95 active:rotate-1 md:shadow-lg">
        <Link href={url}>
          <div className="flex items-center justify-center">
            <img
              className="max-w-full max-h-40 border-1 border-gray-300 rounded-lg"
              src={image}
              alt=""
            />
          </div>
        </Link>
      </div>
      <span className="text-gray-400 ">
        {name}
      </span>
    </div>
  );
};
