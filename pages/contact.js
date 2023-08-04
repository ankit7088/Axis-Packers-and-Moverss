import React from 'react'
import ContactInfo from '../components/ContactInfo'

function Contact() {
  return (
    <>
    <div className='mt-32'>
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