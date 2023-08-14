import Head from 'next/head'
import HomeMain from '../components/HomeMain'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Axis Packers and Movers in Gurugram</title>
        <meta name="description" content="Welcome to Axis Packers and Movers Gurugram, a trusted and experienced Packers and Movers company offering reliable and efficient moving services in gurugram. Our skilled team ensures a hassle-free and secure relocation for residential and commercial clients. Contact us now for a seamless moving experience." />
        <meta name="keywords" content="Packers and Movers | Axis Packers and Movers | Professional Packers and Movers Services in Gurugram | Gurgaon| Reliable Moving Company | Commercial & Industrial Relocation | Home Relocation | Office Relocation | Vehicle Transportation | Warehousing & Storage Services | International Relocation | Corporate Relocation Services " />
        <meta name="google-site-verification" content="so2cK1xxu03nhx9kdXOkG9vQ-GhYsoqRUJCYz9n59mY" />
        <link rel="icon" href="/axis_logo.png" />
        
      </Head>
  <HomeMain/>
    </div>
  )
}
