import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Divider from '../components/Divider'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Josh Dixon</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <section className={styles.introduction}>
            <h1>Hello, I'm Josh 👋</h1>
            <p>I'm a Front End Developer moving from 🇬🇧 to 🇨🇦 in April '23 and I'm searching for my next challenge.
            </p>

            <div className={styles.links}>
              <Link href={"https://linkedin.com/in/joshdixon"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                />
              </Link>

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

              <Link href={"https://behance.net/joshdixonphoto"} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "behance"]}
                />
              </Link>
            </div>

          </section>
        </div>

        <div className={styles.fullBleed}>
          <div className={styles.container}>
            <section className={styles.tile}>
              <div className={styles.grid}>
                <div className={styles.gridCell}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <span>🎨</span>
                    </div>
                    <div className={styles.title}>
                      <h3>Design</h3>

                      <h5>Things I enjoy designing:</h5>
                      <p>UX, UI, Web, Apps</p>

                      <h5>Design Tools:</h5>
                      <p>Figma</p>
                      <p>Photoshop</p>
                      <p>Illustrator</p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridCell}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <span>🧑‍💻</span>
                    </div>
                    <div className={styles.title}>
                      <h3>Development</h3>

                      <h5>Languages I speak:</h5>
                      <p>HTML, JavaScript, PHP</p>

                      <h5>Working with:</h5>
                      <p>React</p>
                      <p>NextJs</p>
                      <p>SCSS</p>
                      <p>GitHub</p>
                    </div>
                  </div>
                </div>

                <div className={styles.gridCell}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <span>📸</span>
                    </div>
                    <div className={styles.title}>
                      <h3>Photography</h3>

                      <h5>Stats:</h5>
                      <p>9+ years experience</p>
                      <p>World Sports Photography Awards Finalist</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.about}>
              <p>I'm a creative individual with a passion for photography and all things design.
                Having worked with professional sports teams as a photographer for almost 10 years, lockdown
                presented the perfect time and opportunity to learn new skills.
              </p>
              <p>Coding was something that had always intrigued me, and I now have a year of professional
                experience as a full time Front End Developer.
              </p>
            </section>

          </div>
        </div>

        <section className={styles.work}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.gridCell}>
                <h2 className={styles.title}>
                  Why not take a look at what I've been working on?
                </h2>
                <Link href="/projects" className={styles.buttonPrimary}>
                  Projects
                </Link>
              </div>

              <Link href="/projects" className={styles.gridCell_project}>
                <div className={styles.imgWrapper}>
                  <img src="/images/projects/collectingcars-home.png" />
                </div>
              </Link>
            </div>
          </div>
        </section>




      </Layout>
    </>
  )
}

export default Home;