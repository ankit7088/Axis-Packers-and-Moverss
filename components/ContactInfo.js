import React from 'react'
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Map from './Map';

export default function ContactInfo() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const enteredSubject = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    if (!enteredName || !enteredEmail || !enteredSubject || !enteredMessage) {
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
    if (enteredName.length < 2 || enteredSubject.length < 2 || enteredMessage.length < 2) {
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

    const response = await fetch('/api/info/feedback', {
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        subject: enteredSubject,
        message: enteredMessage,
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

    }
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
    return data;

  }
  return (
    <>
      <Toaster />
      <section id='venue' className="text-gray-600 body-font relative mx-6 pb-6 md:pb-16 ">
        <div className=" px-0 sm:px-5 py-2 mt-8 md:mx-4 lg:mx-12  ">
          <div className='md:flex'>
            <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden flex items-end md:mr-1 mb-4 justify-start relative " >
              <iframe width="100%" height="100%" className="absolute inset-0 contrast-125 border-0  grayscale-0 brightness-75" allowFullScreen="" loading="lazy" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691230064957!5m2!1sen!2sin" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1692085163330!5m2!1sen!2sin" width="600" title="map" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <div className="bg-white hover:bg-gray-50  relative flex flex-wrap py-6 rounded shadow-lg">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font text-base font-semibold text-gray-900 tracking-widest">ADDRESS</h2>
                  <p className="mt-1">Shop 3, Dhani Shankar wali road, Near Varroc Polymers Ltd., Binola, Gurugram, Haryana 122413, India</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base">EMAIL</h2>
                  <a className="text-teal-600 leading-relaxed">axispackersmover@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mt-4">PHONE</h2>
                  <p className="leading-relaxed">+91 9350927345</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative " >
              <iframe width="100%" height="100%" className="absolute inset-0 contrast-125 border-0  grayscale-0 brightness-75" allowFullScreen="" loading="lazy" title="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.9044601345636!2d77.63308607507436!3d12.84944698745482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUwJzU4LjAiTiA3N8KwMzgnMDguNCJF!5e0!3m2!1sen!2sin!4v1706993861725!5m2!1sen!2sin" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1692085163330!5m2!1sen!2sin" width="600" title="map" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <div className="bg-white hover:bg-gray-50  relative flex flex-wrap py-6 rounded shadow-lg">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font text-base font-semibold text-gray-900 tracking-widest">ADDRESS</h2>
                  <p className="mt-1">Survey No. 65/2, Situated At Vittasandra Village, Begur Road, Bengaluru, Karnataka 560100, India</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base">EMAIL</h2>
                  <a className="text-teal-600 leading-relaxed">axispackersbengaluru@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mt-4">PHONE</h2>
                  <p className="leading-relaxed">+91 9886609676</p>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-xl px-5 bg-white mt-8 md:mt-0 py-6 md:py-12 mx-auto ">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">FeedBack</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We all need people who will give us feedback.</p>
            </div>
            <form onSubmit={submitHandler}>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
                      <input ref={nameRef} placeholder='Enter Name' type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
                      <input ref={emailRef} placeholder='Enter Email' type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label htmlFor="subject" class="leading-7 text-sm text-gray-600">Subject</label>
                      <input ref={subjectRef} placeholder='Enter Subject' type="text" id="subject" name="subject" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label htmlFor="message" class="leading-7 text-sm text-gray-600">Message</label>
                      <textarea ref={messageRef} placeholder='Please drop a message here' id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div class="p-2 w-full text-center">
                    <button class="text-white bg-teal-600  border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>

  )
}