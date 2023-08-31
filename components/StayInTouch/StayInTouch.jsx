import React from 'react'

export const StayInTouch = () => {
  return (
    <section className="bg-white text-center text-black text-3xl min-h-screen font-mono font-bold flex" style={{alignItems: 'center'}}>
        <div className='grid gap-10'>
          <h1 className='text-3xl'>Stay in Touch</h1>
          <p className='text-lg lg:text-3xl'>
          Want to rock the freshest street style? It&apos;s the fromdtrip crew, 
          and we&apos;re here to hook you up with custom gear that screams attitude. 
          Think hand-embroidered coolness and unapologetic street vibes. Whether 
          you&apos;re a die-hard skater or just craving killer style, we&apos;ve got your 
          back. Don&apos;t miss out – let&apos;s redefine street fashion, stitch by stitch. 
          Join us now!
          </p>
          <div className='input_holder w-fit lg:w-4/12 py-10 p-0 lg:p-5 grid lg:flex gap-10 justify-self-center items-center'>
            <input placeholder='email' type='email' className='p-3 text-white bg-gray-200 rounded-md' />
            <button className='w-3/12 justify-self-center btn border-2 border-gray-300 bg-white p-1 px-2 rounded-md text-sm'>
              Sign up
            </button>
          </div>
        </div>
    </section>
  )
}
