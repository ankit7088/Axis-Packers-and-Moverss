import Head from 'next/head'
import HomeMain from '../components/HomeMain'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Axis Packers and Movers</title>
        <meta name="Professional Packers and Movers Services | Reliable Moving Company" content="Welcome to Axis Packers and Movers, a trusted and experienced Packers and Movers company offering reliable and efficient moving services. Our skilled team ensures a hassle-free and secure relocation for residential and commercial clients. Contact us now for a seamless moving experience." />
        <link rel="icon" href="/axis.png" />
        <meta name="google-site-verification" content="so2cK1xxu03nhx9kdXOkG9vQ-GhYsoqRUJCYz9n59mY" />
      </Head>
  <HomeMain/>
    </div>
  )
}
