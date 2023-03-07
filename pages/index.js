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

                      <p>1.5 years of full-time commercial experience</p>

                      <h5>Working with:</h5>
                      <p>React</p>
                      <p>NextJs</p>
                      <p>PHP</p>
                      <p>& more</p>
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

                      <p>9+ years experience and World Sports Photography Awards Finalist</p>

                      <h5>Clients include:</h5>
                      <p>Nottingham Forest FC</p>
                      <p>Wolverhampton Wanderers FC</p>
                      <p>Southampton FC</p>
                      <p>Nike Golf</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.about}>
              <p>I'm a creative individual with a passion for photography and all things design.
                I have had the opportunity to work as a photographer for professional sports teams for nearly a decade.
              </p>
              <p className={styles.highlight}>When lockdown hit, I saw it as the perfect chance to learn new skills.
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
                <Link href="/projects" className={styles.gridCell_project}>
                  <span>Projects</span>

                  <div className={styles.imgWrapper}>
                    <img src="/images/projects/collectingcars-home.png" />
                  </div>
                </Link>
              </div>

              <div className={styles.gridCell}>
                <Link href="/projects" className={styles.gridCell_project}>
                  <span>Resume</span>

                  <div className={styles.imgWrapper}>
                    <img src="/documents/JoshDixonResume.png" />
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}

export default Home;