import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 pt-16  mx-auto flex md:items-center lg:items-start lg:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="lg:w-1/3 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <p className="flex title-font font-medium items-center text-center justify-center text-3xl text-gray-900">
      <Image src="/AxisPackersandPackersLogo.webp" alt="Picture of the author" width={140} height={105} className='text-center text-white p-2 ' />
        <span className="ml-3 text-3xl">Axis Packers and Movers</span>
      </p>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">Your Reliable Packers and Movers Partner</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-12 lg:mt-0 mt-10 lg:text-left text-center">
    <div className=" lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 ">Useful Links</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-3">
          <p>
            {/* <a className="text-gray-600 hover:text-gray-800">About</a> */}
            <Link className="text-gray-600 hover:text-gray-800" href="/about">About</Link>
          </p>
          <p>
            {/* <a className="text-gray-600 hover:text-gray-800">Services</a> */}
            <Link className="text-gray-600 hover:text-gray-800" href="/services">Services</Link>
          </p>
          <p>
            {/* <a className="text-gray-600 hover:text-gray-800">Gallery</a> */}
            <Link className="text-gray-600 hover:text-gray-800" href="/gallery">Gallery</Link>
          </p>
          <p>
            {/* <a className="text-gray-600 hover:text-gray-800">Contact</a> */}
            <Link className="text-gray-600 hover:text-gray-800" href="/contact">Contact</Link>
          </p> 
        </nav>
      </div>
      <div className="lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Office - Gurugram</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-3">
           <p className="text-gray-600 hover:text-gray-800">Shop 3, Dhani Shankar wali road</p>
            <p className="text-gray-600 hover:text-gray-800">Near Varroc Polymers Ltd.</p>
            <p className="text-gray-600 hover:text-gray-800">Binola, Gurugram</p>
            <p className="text-gray-600 hover:text-gray-800">Haryana 122413</p>
          
        </nav>
      </div>
      <div className="lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Office - Bengaluru</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-3">
           <p className="text-gray-600 hover:text-gray-800">Survey No. 65/2</p>
            <p className="text-gray-600 hover:text-gray-800">Situated At Vittasandra Village</p>
            <p className="text-gray-600 hover:text-gray-800">Begur Road, Bengaluru</p>
            <p className="text-gray-600 hover:text-gray-800">Karnataka - 560100</p>
          
        </nav>
      </div>
      {/* <div className=" lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Our Social Networks</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-5 flex justify-center lg:justify-normal">
           <p className="text-gray-600 hover:text-gray-800 ">
            <Link href='https://www.facebook.com/axispackermovers' className="text-teal-600 ">
        <FaFacebookF className='text-xl md:text-2xl inline-block text-teal-600 ml-3 cursor-pointer'/>
        </Link>
            <Link href='https://www.facebook.com/axispackermovers' className="text-teal-600 ">
        <BsInstagram className='text-xl md:text-2xl inline-block text-teal-600 ml-3 cursor-pointer'/>
        </Link>
            <Link href='https://www.facebook.com/axispackermovers' className="text-teal-600 ">
        <FaLinkedinIn className='text-xl md:text-2xl inline-block text-teal-600 ml-3 cursor-pointer'/>
        </Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block" href='services'>
          <BsTwitter className='text-xl md:text-2xl'/>
        </a></Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block" href='gallery'>
          <BsInstagram className='text-xl md:text-2xl'/>
        </a></Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block" href='contact'>
          <FaLinkedinIn className='text-xl md:text-2xl'/>
        </a></Link>
        </p>
          
        </nav>
      </div> */}
    
    </div>
  </div>
  <div className="bg-gray-50">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-800 text-base text-center sm:text-left">© 2023 Axis Packers and Movers —
        <a href="https://www.facebook.com/axispackermovers" rel="noopener noreferrer" className="text-gray-800 ml-1" target="_blank">@Gurugram and Bengaluru</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link className="text-teal-600" href='https://www.facebook.com/axispackermovers'>
        <FaFacebookF className='text-lg md:text-xl'/>
        </Link>
        <Link className="ml-5 text-teal-600" href='https://www.facebook.com/axispackermovers'>
        <BsInstagram className='text-lg md:text-xl'/>
        </Link>
        <Link className="ml-5 text-teal-600" href='https://www.facebook.com/axispackermovers'>
        <FaLinkedinIn className='text-lg md:text-xl'/>
        </Link>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer