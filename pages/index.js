import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Josh Dixon</title>
      </Head>
      <Layout>
        <div className="container">
          <section className={styles.introduction}>
            <h1>Hello, I'm Josh 👋</h1>
            <p>I'm a Front End Developer moving from 🇬🇧 to 🇨🇦 in April '23 and I'm searching for my next challenge.
            </p>

            <div className={styles.links}>
              <Link href={"https://github.com/joshdixo"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                />
              </Link>

              <Link href={"https://twitter.com/joshdixonphoto"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                />
              </Link>

              <Link href={"https://linkedin.com/in/joshdixon"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                />
              </Link>

              <Link href={"https://behance.net/joshdixonphoto"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "behance"]}
                />
              </Link>
            </div>

          </section>


          <section className={styles.about}>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras at diam bibendum, dictum metus quis, iaculis eros.
              Cras placerat laoreet ornare. Cras arcu est, blandit non
              vehicula quis, egestas sit amet nisi. Curabitur mattis felis
              eu volutpat consectetur. Nulla lacinia non massa et congue.
              Duis sit amet iaculis libero, mollis dignissim sem. Suspendisse
              sed justo facilisis, semper felis et, molestie massa. Proin dui
              ex, vulputate vel euismod at, posuere ut quam. Nam magna ipsum,
              pharetra ut nulla ut, rutrum consequat libero.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Home;