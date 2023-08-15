import React from 'react'
import Link from 'next/link'
import hovers from "../styles/track.module.css"
import Image from 'next/image'

const LeftImageCard = ({title,image,description}) => {


  return (
    <section
     className={`${hovers.coolHover} hover:text-black text-gray-600 body-font border rounded-lg my-12 !ml-0`}>
                <div className="mx-auto flex p-5 gap-4 sm:gap-6 md:gap-16 md:flex-row flex-col items-center">
                    <div className={`md:order-12 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0`}>
                    <Image className="object-cover object-center h-full w-full rounded" alt="hero" src={image} width={700} height={450}/>
                    </div>
                    <div className=" lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className={`title-font sm:text-3xl text-2xl mb-4 font-bold text-black `}> {title}
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">{description}</p>
                    <div className="flex justify-center">
                    <Link href='/'>
                    <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg font-medium">Read More</button>
                    </Link>
                    </div>
                    </div>
                </div>
                </section>
  )
}

export default LeftImageCard