import React from 'react'
import LeftImageCard from '../components/LeftImageCard'
import RightImageCard from '../components/RightImageCard'

export default function Services() {
  return (
    <>
    <div className="relative mt-28 h-[80vh] flex ">
       <img className="object-fill object-center w-full grayscale " alt="hero" src="/services.webp"/>
       <h1 className=' p-2 text-white bg-white/10 md:bg-inherit text-2xl md:text-3xl font-semibold absolute md:right-0 md:left-6  right-0 left-0 bottom-0 backdrop-blur-sm '>
        We are <span className='text-orange-500 text-3xl md:text-4xl font-bold'>Axis Packers and Movers</span> <br />
        <span className='text-lg'>Your Reliable Packers and Movers Partner</span>
       </h1>
      </div>
      <div className=' my-10'>
    <h1 className='font-extrabold text-2xl md:text-4xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Our <span className='text-cyan-600'>Services</span>
                </span>
            </h1>
    </div>
      <main className="flex-grow overflow-x-clip bg-gray-50 ">
        <div className="min-h-full bg-gradient-to-r from-white to-stone-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            
            <main className="w-full space-x-6  md:flex-grow">
              <LeftImageCard title="Home Relocation" description="Moving to a new home is an exciting milestone, but it can also be a daunting task. At Axis Packers and Movers, we understand the emotional and logistical challenges of home relocation, and that's why we are here to make your move a seamless and stress-free experience.Our Home Relocation Services are designed to cater to your unique needs and preferences. Our experienced team of professionals takes pride in handling your household goods and personal belongings with utmost care and attention. From carefully packing your cherished possessions to safely transporting them to your new home, we ensure every step is executed with precision and efficiency." image="/homeRelocation.webp" />
              <RightImageCard title="Vehicle Transportation" description="At Axis Packers and Movers, we understand that your vehicle is not just a means of transportation; it's an invaluable asset that deserves utmost care during the relocation process. Our Vehicle Transportation Services are designed to provide a safe and reliable solution for transporting your cars, motorcycles, or other vehicles to your desired destination." image="/vehicleTransport.webp" />
              <LeftImageCard title="Office Relocation" description="Moving your office to a new location is a significant undertaking that requires meticulous planning, seamless execution, and minimal downtime. At Axis Packers and Movers, we understand the importance of a smooth office relocation, and our Office Relocation Services are designed to make the process efficient, organized, and stress-free." image="/officeRelocation.webp" />
              <RightImageCard title="Warehousing & Storage Services" description="At Axis Packers and Movers, we understand that proper storage solutions are crucial for businesses and individuals during various phases of relocation, renovation, or downsizing. Our Warehousing & Storage Services are designed to provide secure and flexible storage options for your belongings, ensuring they remain safe and well-preserved until you are ready to retrieve them." image="/storageServices.webp" />
              <LeftImageCard title="International Relocation" description="Embarking on an international move is a significant life event that requires meticulous planning, coordination, and expertise. At Axis Packers and Movers, we understand the complexities of international relocation, and our International Relocation Services are designed to make this journey seamless and stress-free for you and your family." image="/international.webp" />
              <RightImageCard title="Commercial & Industrial Relocation" description="Moving a commercial or industrial establishment is a complex undertaking that requires careful planning, coordination, and precision. At Axis Packers and Movers, we understand the importance of minimizing downtime and ensuring a smooth transition during commercial and industrial relocations. Our Commercial & Industrial Relocation Services are tailored to meet the unique needs of businesses, offices, factories, and industrial facilities, ensuring a seamless move to your new location." image="/commercial.webp" />
            </main>
          </div>
      
        </div>

      </main>
    </>
  )
}
