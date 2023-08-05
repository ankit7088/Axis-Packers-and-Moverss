import React from 'react'
import ContactInfo from '../components/ContactInfo'

function Contact() {
  return (
    <>
    <div>
    <div className="relative mt-28 h-[60vh] flex ">
       <img className="object-cover object-center h-full w-full grayscale " alt="hero" src="/contactCover.webp"/>
       <h1 className=' p-2 text-white bg-white/10 md:bg-inherit text-2xl md:text-3xl font-semibold absolute md:right-0 md:left-6  right-0 left-0 bottom-0 backdrop-blur-sm '>
        We are <span className='text-orange-500 text-3xl md:text-4xl font-bold'>Axis Packers and Movers</span> <br />
        <span className='text-lg'>Let&apos;s move together. Contact us now!</span>
       </h1>
      </div>
    <div className=' my-10'>
    <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Contact <span className='text-cyan-600'>Us</span>
                </span>
            </h1>
    </div>
    <ContactInfo/>
    </div>
    </>
  )
}

export default Contact