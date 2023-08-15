import React from 'react'

const Map = () => {
  return (
    <>
    <section id='venue' className="text-gray-600 body-font relative mx-6 pb-6 md:pb-16 ">
                <div className=" px-0 sm:px-5 py-2 mt-8 md:mx-4 lg:mx-12 ">
                <div className='mt-8 pb-4 flex flex-col items-center justify-center'>
                <h1 className='title-font text-center font-bold text-3xl sm:text-4xl  text-gray-900 border-b-4 border-blue-500 pb-1 md:pb-2'>Venue</h1>
                </div>
                  <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative " >
                    <iframe width="100%" height="100%" className="absolute inset-0 contrast-125 border-0  grayscale-0 brightness-75" allowfullscreen="" loading="lazy"  title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691230064957!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023137717!2d76.82493640956784!3d28.423160292849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1692085163330!5m2!1sen!2sin" width="600" title="map" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <div className="bg-white hover:bg-gray-50 relative py-6 rounded shadow-lg ">
                      <div className=" px-6">
                        <h2 className="title-font text-base font-bold text-gray-900 tracking-widest">ADDRESS</h2>
                        <p className="mt-1 font-medium text-gray-900">Shop 3, Dhani Shankar wali road, Near Varroc Polymers Ltd., Binola, Gurugram, Haryana 122413 India  </p>
                      </div>
                    </div>
                  </div>
                </div>
            </section> 
    </>
  )
}

export default Map