import Head from 'next/head'
import HomeMain from '../components/HomeMain'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>MAC2023 Homepage</title>
        <meta name="description" content="Axis Packers and Movers" />
        <link rel="icon" href="/axis.png" />
      </Head>
  <HomeMain/>
    </div>
  )
}
