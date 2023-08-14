import React from 'react'
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
      <section className="text-gray-600 body-font relative mx-6">
        <div className=" px-5 py-6 mt-8 md:mx-4 lg:mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className=" md:w-3/5 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 lg:mr-20 p-10 flex items-end justify-start relative ">
            <iframe width="100%" height="100%" className="absolute inset-0 contrast-125 grayscale-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691230064957!5m2!1sen!2sin" ></iframe>
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
          <div className=" md:w-2/5 bg-white flex flex-col  w-full  md:mt-0 ">
            <h2 className="text-gray-900 text-2xl mb-1 mt-6 md:mt-0 font-medium title-font">FeedBack</h2>
            <p className="leading-relaxed mb-5 text-gray-600">We all need people who will give us feedback</p>
            <form onSubmit={submitHandler}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 ">Name</label>
                <input ref={nameRef} placeholder='Enter Name' type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input ref={emailRef} placeholder='Enter Email' type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                <input ref={subjectRef} placeholder='Enter Subject' type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea ref={messageRef} placeholder='Please drop a message here' id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>

  )
}