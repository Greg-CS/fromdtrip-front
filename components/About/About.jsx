import React from 'react'

export const About = () => {
  return (
    <div className='grid lg:flex bg-[#4B2707] font-mono'>
        <div className='w-full lg:w-6/12'>
            <img
                className="w-full border-1 border-gray-300 rounded-none lg:rounded-lg"
                src="/img/who-r-we.png"
                alt="about us img"
            />
        </div>
        <div className='w-full lg:w-6/12 grid grid-rows-1 lg:grid-rows-3 px-10 py-10'>
            <h1 className='text-6xl text-white'>About us:</h1>
            <p className='text-md text-white'>
            Hey there, we&apos;re the fromdtrip crew – a bunch of street-obsessed, rule-breaking 
            fashion maniacs on a mission. We eat, sleep, and breathe everything street culture, 
            and we&apos;re here to serve you some seriously rad custom apparel. Our team pours heart 
            and soul into hand-embroidering each piece, making sure it&apos;s got that authentic street 
            skater flavor. We&apos;re not about mainstream, cookie-cutter fashion – we&apos;re about 
            embracing the raw, unapologetic attitude of the streets. So, whether you&apos;re a hardcore 
            skater or just someone who wants to rock killer street style, fromdtrip&apos;s got your back. 
            Join us in redefining street fashion, one stitch at a time.
            </p>
            <button className='btn bg-[#307473] text-white'>
                join us
            </button>
        </div>
    </div>
  )
}
