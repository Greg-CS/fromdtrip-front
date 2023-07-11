import React from 'react'
import Link from 'next/link'

export const CatBox = ({categories}) => {
  let url = "/";
  console.log(categories);

  return (
    <button className="btn text-white">
      <span>{categories.name}</span>
    </button>
  );
};
