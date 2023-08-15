import React from 'react'
import gradients from "../styles/customGradient.module.css";
import Lottie from "lottie-react";
import Map from './Map';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import transport from "../lottieFiles/transport.json"
import vehicle from "../lottieFiles/vehicle.json"
import { IoMdTrain } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdTouchApp } from "react-icons/md";
import Image from 'next/image'
import HomeImageGallery from './HomeImageGallery';

const HomeMain = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const dateRef = useRef();
  const relocationFromRef = useRef();
  const relocationToRef = useRef();
  const [loading, setLoading] = useState(false);

  // const router = useRouter();
  const submitHandler = async (event) => {
    event.preventDefault();
    // setLoading(true);

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const enteredMobileNo = mobileRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredRelocationFrom = relocationFromRef.current.value;
    const enteredRelocationTo = relocationToRef.current.value;

    const enteredMessage = messageRef.current.value;

    if (!enteredName || !enteredEmail || !enteredMobileNo || !enteredMessage || !enteredDate || !enteredRelocationFrom || !enteredRelocationTo) {
      toast.error('Please Fill all Inputs Fields', {
        duration: 4000,
        position: 'top-right',
        // Styling
        style: {
          background: '#f25f4c',
          color: '#fff',
          fontWeight: 'bold'
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }
    if (enteredName.length < 2 || enteredMobileNo.length < 2 || enteredMessage.length < 2 || enteredRelocationFrom < 2 || enteredRelocationTo < 2) {
      toast.error('Length of all inputs fields must be more than 2 characters', {
        duration: 4000,
        position: 'top-right',
        // Styling
        style: {
          background: '#f25f4c',
          color: '#fff',
          fontWeight: 'bold'
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }
    if (!enteredEmail ||
      !enteredEmail.includes('@') || !enteredEmail.includes('.')) {
      toast.error('Enterered email is not valid', {
        duration: 4000,
        position: 'top-right',
        // Styling
        style: {
          background: '#f25f4c',
          color: '#fff',
          fontWeight: 'bold'
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }

    const response = await fetch('/api/info/contactInfo', {
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        mobile: enteredMobileNo,
        message: enteredMessage,
        date: enteredDate,
        relocationFrom: enteredRelocationFrom,
        relocationTo: enteredRelocationTo,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.errorMessage) {
      setLoading(false);
      toast.error(data.errorMessage, {
        duration: 4000,
        position: 'top-right',
        // Styling
        style: {
          background: '#f25f4c',
          color: '#fff',
          fontWeight: 'bold'
        },
        className: 'bg-red-200',

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      // setAuthAlert({type:"error",message:data.errorMessage});
      // setLoading(false);
      return;
    }

    if (data.successMessage) {
      toast.success(data.successMessage, {
        duration: 4000,
        position: 'top-right',
        // Styling
        style: {
          background: '#2ecc71',
          color: '#fff',
          fontWeight: 'bold'
        },
        className: 'bg-red-200',

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      // setAuthAlert({type:"success",message: data.successMessage});
      // setLoading(false);

    }
    nameRef.current.value = '';
    emailRef.current.value = '';
    mobileRef.current.value = '';
    messageRef.current.value = '';
    dateRef.current.value = '';
    relocationFromRef.current.value = '';
    relocationToRef.current.value = '';
    return data;

  }


  return (
    <>
      <Toaster />
      <div className={`mt-[110px] relative pb-4 ${gradients.homePage}`}>
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='md:w-1/2 w-full h-full object-cover '>
            {/* <Lottie animationData={transport} loop={true} /> */}
            <HomeImageGallery/>
          </div>
          <div className='md:w-1/2  md:pt-8 md:mx-4 mx-2 md:px-4'>
            <h2 className="text-black text-center text-2xl md:text-3xl mb-1 mt-6 md:mt-0 font-medium title-font">Get a Free Moving Quote</h2>
            <form onSubmit={submitHandler}>
              <div className='flex flex-wrap'>
                <div className="relative mb-2 w-1/2">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-800 ">Name</label>
                  <input ref={nameRef} placeholder='Enter Name' type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-2 w-1/2 pl-2">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-800">Email</label>
                  <input ref={emailRef} placeholder='Enter Email' type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-2 w-1/2">
                  <label htmlFor="mobileNo" className="leading-7 text-sm text-gray-800">Mobile No.</label>
                  <input ref={mobileRef} placeholder='Enter Mobile No.' type="text" id="mobileNo" name="mobileNo" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-2 w-1/2 pl-2">
                  <label htmlFor="date" className="leading-7 text-sm text-gray-800">Date of Relocation</label>
                  <input ref={dateRef} placeholder='dd-mm-yyyy' type="date" id="date" name="date" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-2 w-1/2">
                  <label htmlFor="relocationFrom" className="leading-7 text-sm text-gray-800">Relocation From</label>
                  <input ref={relocationFromRef} placeholder='Enter Relocation From' type="text" id="relocationFrom" name="relocationFrom" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-2 w-1/2 pl-2">
                  <label htmlFor="relocationTo" className="leading-7 text-sm text-gray-800">Relocation To</label>
                  <input ref={relocationToRef} placeholder='Enter Relocation To' type="text" id="relocationTo" name="relocationTo" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-800">Please mention all items you would like to move?</label>
                <textarea ref={messageRef} placeholder='Please write number of items which you want to move...' id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-800 rounded text-xl font-medium">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className={`w-full text-black ${gradients.homePage}`}>
        <section className="pt-5 w-full">
          <div className='mb-6 md:my-10'>
            <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
              <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Our <span className='text-cyan-600'>Services</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap ">

            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full  hover:shadow-2xl cursor-pointer rounded-2xl ">
                <div className=" justify-center flex mb-4">
                  <Image className="object-cover object-center h-28 w-28" height={110} width={110} alt="hero" src="/home-relocation.webp" />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Home Relocation</h2>
                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">Moving to a new home is an exciting milestone, but it can also be a daunting task. At Axis  packers and movers, we understand the emotional and logistical challenges of home relocation, and that&apos;s why we are here to make your move a seamless and stress-free experience.Our experienced team of professionals takes pride in handling your household goods and personal belongings with utmost care and attention. We ensure every step is executed with precision and efficiency.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full rounded-2xl hover:shadow-2xl cursor-pointer">
                <div className=" justify-center flex mb-4  object-cover">
                  <Lottie className='h-28 w-28' animationData={vehicle} loop={true} />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Vehicle Transportation</h2>
                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">At Axis  packers and movers, we understand that your vehicle is not just a means of transportation; it&apos;s an invaluable asset that deserves utmost care during the relocation process. Our Vehicle Transportation Services are designed to provide a safe and reliable solution for transporting your cars, motorcycles, or other vehicles to your desired destination.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full rounded-2xl hover:shadow-2xl cursor-pointer">
                <div className=" justify-center flex mb-4">
                  <Image className="object-cover object-center h-28 w-28" height={110} width={110} alt="hero" src="/office.webp" />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Office Relocation</h2>
                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">Moving your office to a new location is a significant undertaking that requires meticulous planning, seamless execution, and minimal downtime. At Axis  packers and movers, we understand the importance of a smooth office relocation, and our Office Relocation Services are designed to make the process efficient, organized, and stress-free.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full rounded-2xl hover:shadow-2xl cursor-pointer">
                <div className=" justify-center flex mb-4">
                  <Image className="object-cover object-center h-28 w-28" height={110} width={110} alt="hero" src="/office.webp" />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Warehousing & Storage Services</h2>
                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">At Axis  packers and movers, we understand that proper storage solutions are crucial for businesses and individuals during various phases of relocation, renovation, or downsizing. Our Warehousing & Storage Services are designed to provide secure and flexible storage options for your belongings, ensuring they remain safe and well-preserved until you are ready to retrieve them.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full rounded-2xl hover:shadow-2xl cursor-pointer">
                <div className=" justify-center flex mb-4">
                  <Image className="object-cover object-center h-28 w-28" height={110} width={110} alt="hero" src="/office.webp" />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">International Relocation</h2>
                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">Embarking on an international move is a significant life event that requires meticulous planning, coordination, and expertise. At Axis  packers and movers, we understand the complexities of international relocation, and our International Relocation Services are designed to make this journey seamless and stress-free for you and your family.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="border-dashed border-2 border-teal-500 p-2 h-full rounded-2xl hover:shadow-2xl cursor-pointer">
                <div className=" justify-center flex mb-4">
                  <Image className="object-cover object-center h-28 w-28" height={110} width={110} alt="hero" src="/office.webp" />
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Commercial & Industrial Relocation</h2>

                <p className="leading-relaxed px-6 md:px-12 text-center  text-lg">Moving a commercial or industrial establishment is a complex undertaking that requires careful planning, coordination, and precision. At Axis  packers and movers, our Commercial & Industrial Relocation Services are tailored to meet the unique needs of businesses, offices, factories, and industrial facilities, ensuring a seamless move to your new location.</p>
                <div className="flex items-center flex-wrap mt-2 md:mt-4 justify-center">
                  <Link href='/'>
                    <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <BsArrowRight className='ml-3' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 w-full">
          <div className="  flex md:px-5 py-2 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-16 md:pr-8 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

              <h1 className="relative title-font text-3xl md:text-4xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-12 border-cyan-600"><span className='text-orange-400'>About  <span className='text-cyan-600'>Axis Packers and Movers </span> </span>
              </h1>
              <h2 className='text-lg'>
                <span>We are </span>
                <span className='text-orange-500 font-bold text-xl'>
                  Axis  Packers and Movers, <span className='text-red-500 font-bold text-xl'>
                    Your Reliable Packers
                  </span>
                  <span className='text-black'> and </span>
                  <span className='text-red-500'>
                    Movers Partner
                  </span> </span>
              </h2>
              <br />
              <p className=" leading-relaxed font-semibold text-lg text-justify">
                At Axis , we understand that moving can be a significant life event, and we are here to make it a smooth and hassle-free experience for you. As a trusted name in the packers and movers industry, we take pride in offering top-notch relocation services that cater to your unique needs.
              </p>
              <h1 className='text-orange-500  mt-3 leading-relaxed font-bold text-lg text-justify'>Who We Are:</h1>
              <p className='md:mb-8 leading-relaxed font-semibold text-lg text-justify'>Axis  is a premier packers and movers company with a passion for providing exceptional moving solutions. With years of experience in the industry, we have perfected our processes to ensure a seamless and stress-free moving experience for our valued customers.</p>


            </div>

            <div className="w-full md:w-1/2 lg:w-[40%] bg-red-100">
              <Image className="object-cover object-center" width={900} height={550}  alt="hero" src="/companyImage.webp" />
            </div>
          </div>
        </section>

        <section className="pt-5 w-full">
          <div className='my-10'>
            <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
              <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Why Move <span className='text-cyan-600'>With Us ?</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap ">

            <div className="lg:w-1/3 w-full p-2 ">
              <div className="shadow-xl p-2 h-full  hover:shadow-2xl cursor-pointer rounded-2xl ">
                <div className=" justify-start flex px-4 md:px-8 mb-4">
                  <IoMdMail className='text-blue-600 h-12 w-12 md:h-20 md:w-20' />
                </div >
                <div className='px-4 md:px-8'>
                  <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-start italic ">Professional</h2>

                  <p className="leading-relaxed text-start  text-lg">In the fast-paced world of today, relocation demands efficiency, reliability, and professionalism. The packers and movers industry plays a pivotal role in easing the transition of individuals and businesses to new locations. Professionalism in this industry is not just a buzzword; it&apos;s a commitment to excellence and customer satisfaction.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="shadow-xl p-2 h-full  hover:shadow-2xl cursor-pointer rounded-2xl ">
                <div className=" justify-start flex px-4 md:px-8 mb-4">
                  <IoMdTrain className='text-blue-600 h-12 w-12 md:h-20 md:w-20' />
                </div >
                <div className='px-4 md:px-8'>
                  <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-start italic ">Countrywide</h2>

                  <p className="leading-relaxed text-start  text-lg">Moving across the country is a significant undertaking, and that&apos;s where countrywide packers and movers services prove their mettle. These companies have a wide network and the resources to handle long distance relocations with finesse.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-2 ">
              <div className="shadow-xl p-2 h-full  hover:shadow-2xl cursor-pointer rounded-2xl ">
                <div className=" justify-start flex px-4 md:px-8 mb-4">
                  <MdTouchApp className='text-blue-600 h-12 w-12 md:h-20 md:w-20' />
                </div >
                <div className='px-4 md:px-8'>
                  <h2 className="text-2xl md:text-3xl text-gray-900 font-medium title-font mb-2 text-start italic ">Personal Touch</h2>

                  <p className="leading-relaxed text-start  text-lg">In an increasingly digital world, providing a personal touch sets packers and movers apart. A personal approach builds trust and strengthens customer relationships, fostering loyalty in an ever-competitive industry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Map />
      </div>
    </>
  )
}

export default HomeMain