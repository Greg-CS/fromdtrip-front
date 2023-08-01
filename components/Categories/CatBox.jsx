import React from 'react'
import Link from 'next/link'

export const CatBox = ({categories}) => {
  let url = "/";
  console.log(categories);

  return (
    <Link href={"/products"} className="btn text-white">
      <span>{categories.name}</span>
    </Link>
  );
};
