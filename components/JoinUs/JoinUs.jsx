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
    <section className="pt-32 text-3xl text-center text-[#71948D] bg-[#07100B]">
      <h1 className="uppercase">Join us in instagram</h1>
      <a className="uppercase" href="https://www.instagram.com/fromdtrip/">
        @fromdtrip
      </a>
      <div className="grid grid-cols-3 py-10 justify-items-center">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.img}
            alt={img.alt}
            className="w-full h-full"
          />
        ))}
      </div>
    </section>
  );
}
