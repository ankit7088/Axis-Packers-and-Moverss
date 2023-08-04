import React from 'react'

export default function About() {
  return (
    <>
    <div className="relative mt-28 h-[80vh] flex ">
       <img className="object-cover object-center h-full w-full grayscale " alt="hero" src="/aboutCover.webp"/>
       <h1 className=' p-2 text-white bg-white/10 md:bg-inherit text-2xl md:text-3xl font-semibold absolute md:right-0 md:left-6  right-0 left-0 bottom-0 backdrop-blur-sm '>
        We are <span className='text-orange-500 text-3xl md:text-4xl font-bold'>Axis Packers and Movers</span> <br />
        <span className='text-lg'>Your Reliable Packers and Movers Partner</span>
       </h1>
      </div>
      <div className=' my-10'>
    <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                About <span className='text-cyan-600'>Axis Packers and Movers</span>
                </span>
            </h1>
    </div>
      <section className="mt-10 w-full">
  <div className="  flex md:px-5 py-2 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-16 md:pr-8 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h2 className='text-lg'>
        <span>We are </span>
        <span className='text-orange-500 font-bold text-xl'>
        Axis Packers and Movers , <span className='text-red-500 font-bold text-xl'>
        Your Reliable Packers 
        </span>
          <span className='text-black'> and </span> 
          <span className='text-red-500'>
          Movers Partner  
          </span> </span>
      </h2>
      <br/>
      <p className=" leading-relaxed font-semibold text-lg text-justify">
      At Axis Packers and Movers, we understand that moving can be a significant life event, and we are here to make it a smooth and hassle-free experience for you. As a trusted name in the packers and movers industry, we take pride in offering top-notch relocation services that cater to your unique needs.
    </p>
    <h1 className='text-orange-500  mt-3 leading-relaxed font-bold text-lg text-justify'>Who We Are:</h1>
    <p className=' leading-relaxed font-semibold text-lg text-justify'>Axis Packers and Movers is a premier packers and movers company with a passion for providing exceptional moving solutions. With years of experience in the industry, we have perfected our processes to ensure a seamless and stress-free moving experience for our valued customers.</p>
    <h1 className='text-orange-500 mt-3 leading-relaxed font-bold text-lg text-justify'>Our Mission:</h1>
    <p className='md:mb-8 leading-relaxed font-semibold text-lg text-justify'>Our mission is simple yet profound: to provide you with reliable, efficient, and secure packing and moving services. We believe in building lasting relationships with our customers by delivering top-quality services that exceed their expectations.</p>
 
      
    </div>
    
    <div className="w-full md:w-1/2 lg:w-[40%] bg-red-100">
      <img className="object-cover object-center" alt="hero" src="/companyImage_2.webp"/>
    </div>
  </div>
</section>
 <section className='my-10 px-4 md:px-48'>
 <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Why <span className='text-cyan-600'>Choose Us ?</span>
                </span>
            </h1>
  <div className='mt-10 '>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Experienced Team:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>Our team of experienced and skilled professionals is dedicated to handling your belongings with the utmost care and precision. We treat your possessions as if they were our own.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Comprehensive Services:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>Whether you are moving within the city or across the country, we offer a comprehensive range of services, including home relocation, office moves, vehicle transportation, and more.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Quality Packing Materials: </h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>Your belongings deserve the best protection during transit. We use high-quality packing materials to ensure that your items reach their destination safe and sound.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Timely and Reliable:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>We value your time, and punctuality is one of our core values. Rest assured, we will arrive on time and complete your move as scheduled.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Customer Satisfaction:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>Your satisfaction is our ultimate reward. We prioritize your needs and preferences, and our friendly customer support is always available to address any concerns.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Our Commitment to Excellence:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>We are committed to maintaining the highest standards of professionalism, integrity, and ethics in all aspects of our services. As a licensed and insured packers and movers company, you can trust us to handle your belongings with the utmost care and responsibility.</p>
  <h2 className='mt-3 leading-relaxed font-bold text-lg text-justify'>Customer Reviews:</h2>
  <p className='leading-relaxed font-semibold text-lg text-justify'>Our dedication to customer satisfaction has earned us the trust and loyalty of countless clients. We are humbled by the positive feedback and glowing reviews we receive from our happy customers, which motivates us to continuously improve our services.</p>
  </div>
 </section>
    </>
  )
}
