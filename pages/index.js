import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Dixon &middot; Portfolio</title>
        <meta name="description" content="Portfolio of Web Developer Josh Dixon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="main">
            <div className="container">
                <h1>Home</h1>
                <p>Hi, I'm Josh. Web Developer at CollectingCars.com</p>
            </div>
        </div>
    </div>
  )
}
