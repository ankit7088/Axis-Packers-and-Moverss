import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { BiLogoGmail } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-gray-100 flex h-6 items-center justify-between py-1'>
        <div className='md:pl-4 text-orange-500 font-medium md:font-bold flex text-xs sm:text-sm md:text-lg'><BiLogoGmail className='animate-pulse text-blue-500 font-bold md:mr-2 flex text-base sm:text-lg md:text-3xl' />axispackersmover@gmail.com</div>
        <div className='md:pr-4 text-orange-500 font-medium md:font-bold flex text-xs sm:text-sm md:text-lg'><FiPhoneCall className='animate-pulse text-blue-500  md:font-bold md:mr-2 flex text-sm sm:text-lg md:text-2xl md:my-1' />+919350927345</div>
      </div>
      <div className='fixed top-6 left-0 right-0 z-50 bg-black flex h-24 items-center'>

        <div className={`flex-1 font-bold text-3xl`}>
          <div className=' flex flex-start'>
            <Link href='/'>
              <div className=' cursor-pointer font-extrabold'>
                <Image className="object-cover object-center h-24" height={100} width={130} alt="hero" src="/axis.webp" />
              </div>
            </Link>
          </div>
        </div>


        <div className='hidden lg:flex lg:gap-2 text-lg font-semibold'>
          <Link href='/'>
            <span className={`${router.pathname == "/" ? "  text-orange-400 " : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
              Home
            </span>
          </Link>
          <Link href='/about'>
            <span className={`${router.pathname == "/about" ? "  text-orange-400 " : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
              About
            </span>
          </Link>
          <Link href='/services'>
            <span className={`${router.pathname == "/services" ? " text-orange-400" : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
              Services  </span>
          </Link>
          <Link href='/gallery'>
            <span className={`${router.pathname == "/gallery" ? " text-orange-400" : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
              Gallery</span>
          </Link>
          <Link href='/contact' scroll={false}>
            <span className={`${router.pathname == "/registration" ? " hover:border-orange-400 text-orange-400" : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
              Contact
            </span>
          </Link>

        </div>


        <span className='block lg:hidden' onClick={() => setIsOpenSidebar(prev => !prev)}><GiHamburgerMenu className='w-6 h-6 text-white' /></span>
        <AnimatePresence>
          {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar