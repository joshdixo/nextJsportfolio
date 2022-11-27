import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0, transition: { delay: 0.25 }}}
    exit={{opacity: 0, y: 20}}
    >
      <Head>
        <title>Josh Dixon &middot; Portfolio</title>
        <meta name="description" content="Portfolio of Web Developer Josh Dixon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div 
        className="main">
            <div className="container">
                <h1>Home</h1>
                <p>Hola Charlie</p>
            </div>
        </div>
    </motion.div>
  )
}
