import React from 'react'

export const Hero = () => {
  return (
    <section className='hero min-h-screen'>
        <div className='grid gap-10 justify-items-center'>
            <div className='rounded-[10px] w-full lg:w-6/12 h-[250px] px-5 flex items-center' style={{background: 'linear-gradient(90deg, #12664F -82.01%, rgba(18, 102, 79, 0.00) 189.95%)'}}>
                <p className='text-white text-center text-[25px] lg:text-[40px] font-normal font-mono ' style={{fontWeight: '400', lineHeight: 'normal'}}>
                    Exploring a contemporary twist on street fashion, 
                    breathing new life into classic styles and 
                    re-inventing the wheel of urban apparel.
                </p>
            </div>
            <div>
                <button className='btn p-3 rounded-xl text-white border-0' style={{background: 'linear-gradient(90deg, #12664F -82.01%, rgba(18, 102, 79, 0.00) 189.95%)'}}>
                    Shop now
                </button>
            </div>
        </div>
    </section>
  )
}
