import React from 'react'
import Photo from '../components/Photo'

function Gallery() {
  return (
    <>
    <div className='mt-32'>
    <div className=' my-10'>
    <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Ga<span className='text-cyan-600'>llery</span>
                </span>
            </h1>
    </div>
    <Photo/>
    </div>
    </>
  )
}

export default Gallery