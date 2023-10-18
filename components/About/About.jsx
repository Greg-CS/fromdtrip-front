import React from 'react'

export const About = () => {
    return (
        <div className='grid lg:flex text-[#EAAC8B]' style={{ background: 'rgb(181,101,118)', background: 'radial-gradient(circle, rgba(181,101,118,1) 0%, rgba(109,89,122,1) 50%)' }}>
            <div className='w-full lg:w-6/12'>
                <img
                    className="w-full rounded-none lg:rounded-r-2xl"
                    src="/img/who-r-we.png"
                    alt="about us img"
                />
            </div>
            <div className='w-full px-10 lg:w-6/12 lg:grid-rows-3'>
                <h1 className='pb-5 text-6xl'>About us:</h1>
                <p className='text-md lg:text-4xl'>
                    About us:
                    Hello there, we are the fromdtrip crew – a group of individuals deeply connected to our Caribbean
                    roots, committed to celebrating and promoting the rich tapestry of our cultural clothing through
                    our craftsmanship. We live and breathe Caribbean heritage, infusing each piece with the vibrant
                    essence of our homeland through meticulous embroidery. Our goal isn&apos;t to follow mainstream, generic
                    fashion trends; instead, we embrace the raw, unapologetic attitude of the Caribbean streets. Whether
                    you&apos;re deeply rooted in Caribbean traditions or simply seeking to embody the colorful spirit of our
                    culture through your attire, fromdtrip is here to support you. Join us in reshaping Caribbean fashion,
                    one stitch at a time.
                </p>
                {/* <button className='btn bg-[#307473]'>
                join us
            </button> */}
            </div>
        </div>
    )
}
