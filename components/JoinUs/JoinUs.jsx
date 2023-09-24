import React from 'react'

const images = [
    {
        id: 1,
        img: '/img/fdt1.png',
        alt: 'join us img 1'
    },
    {
        id: 2,
        img: '/img/fdt2.png',
        alt: 'join us img 2'
    },
    {
        id: 3,
        img: '/img/fdt3.png',
        alt: 'join us img 3'
    },
]

export const JoinUs = () => {
  return (
    <section className='bg-white text-center text-black text-3xl font-mono pt-32'>
        <h1 className='uppercase'>
            Join us in instagram
        </h1>
        <a href='https://www.instagram.com/fromdtrip/' className='uppercase'>
            @fromdtrip
        </a>
        <div className='grid grid-cols-3 justify-items-center py-10'>
            {images.map((img) => (
                <img key={img.id}  src={img.img} alt={img.alt} className='w-full h-full' />
            ))}
        </div>
    </section>
  )
}
