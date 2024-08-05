import React from 'react'
import { Featured } from '../Products/Featured'
import { MatrixRainingLetters } from "react-mdr";
export const Hero = ({products}) => {
  return (
    <div className='min-h-screen'>
        <MatrixRainingLetters custom_class="matrix"/>
        <div className="absolute top-[60%] md:top-[60%] lg:top-[50%] 2xl:top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <Featured product={products} />
        </div>
    </div>
  )
}
