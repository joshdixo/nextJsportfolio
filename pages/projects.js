import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.scss';
import Layout from '../components/Layout';
import { useState } from 'react';
import { StyleRegistry } from 'styled-jsx';
import Divider from '../components/Divider';
import Link from 'next/link';
import Head from 'next/head';

const projects = [
  {
    id: 1,
    title: 'The Collecting Group',
    img: '/images/projects/collectingcars-home.png',
    img2: '/images/projects/watchcollecting.png',
    desc: 'Front-end Developer',
    moreInfo: 'Expand',
    viewLink: '#',
    githubLink: '#',
    isLatest: true,
  },
  {
    id: 2,
    title: 'DevFinder',
    img: '#',
    desc: 'testing description',
    viewLink: '#',
    githubLink: '#',
    isLatest: false
  },
  {
    id: 3,
    title: 'Expenses Tracker',
    img: '/images/projects/expensetracker.png',
    desc: 'Built using React, this web app allows you to add expenses by date and this will organise the data for you. This data is presented in the form of a card and also in a chart which can be filtered by the year.',
    viewLink: 'https://joshdixo.github.io/expenses-tracker/',
    githubLink: 'https://github.com/joshdixo/expenses-tracker',
    isLatest: false
  },
  {
    id: 4,
    title: 'Password Generator',
    img: '/images/projects/passwordgenerator.png',
    desc: 'This web app was developed using HTML, CSS, JavaScript and the fontawesome CDN. The generated password can be copied to your clipboard using the icon and displays an alert.',
    viewLink: 'https://objective-lichterman-5f786c.netlify.app/',
    githubLink: 'https://github.com/joshdixo/RandomPasswordGenerator',
    isLatest: false
  }
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const featured = {
  //   whileHover: { opacity: 1 }
  // }

  const imgMotion = {
    rest: { opacity: 1, duration: 0.2, type: "spring", x: 0, y: 0 },
    hover: {
      opacity: 1,
      x: -8,
      y: -14,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <Head>
        <title>Projects | Josh Dixon</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>Latest Work</h1>


          <div className="grid">
            {projects.map((project) => {
              return (

                (project.isLatest === true) ?
                  <div className="grid__cell">
                    <motion.div
                      className={styles.featured}
                      onClick={() => setIsOpen(!isOpen)}
                      // variants={featured}
                      // initial={{opacity: 0.8}}
                      // animate={featured}
                      // whileHover={{opacity: 1}}
                      layout
                      whileTap={{ scale: 0.990 }}

                      initial="rest" whileHover="hover" animate="rest"
                    >
                      <motion.div variants={imgMotion} layout="position" className={styles.edgeImage}>
                        <motion.img src={project.img} />
                      </motion.div>
                      <div className={styles.infoWrapper}>
                        <motion.h3 layout="position">{project.title}</motion.h3>
                        <motion.h4 layout="position">{project.desc}</motion.h4>
                      </div>

                      {isOpen &&
                        <motion.div >
                          <div className={styles.moreInfoWrapper}>
                            {/* <h5>Title</h5> */}
                            <p>
                              <Link href="https://collectingcars.com" target="_blank" rel="noreferrer">
                                Collecting Cars
                              </Link>
                              &nbsp;and&nbsp;
                              <Link href="https://watchcollecting.com" target="_blank" rel="noreferrer">
                                Watch Collecting
                              </Link>
                              &nbsp;are the two online auction
                              platforms that I have worked.
                            </p>
                            <p>From design through to implimentation, I have worked on a variety of features accross the two sites during my tenure including:</p>
                            <ul>
                              <li>Navigation</li>
                              <li>Auction cards</li>
                              <li>Policy pages</li>
                              <li>Landing pages</li>
                            </ul>

                            <p>
                            </p>

                          </div>
                        </motion.div>


                      }

                      {isOpen ? <motion.div className={styles.cta}>Collapse ☝️</motion.div> :
                        <motion.div className={styles.cta}>{project.moreInfo} 👇</motion.div>}
                    </motion.div>

                    <Divider />
                  </div>
                  :
                  <motion.div
                    className="grid__cell"
                    key={project.id}
                  // whileHover={{ scale: 1.005 }}
                  >
                    <div className={styles.card}>
                      <div className={styles.image}>
                        <img src={project.img} alt={project.title} />
                      </div>
                      <div className={styles.desc}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>

                        <div className={styles.links}>
                          <Link href={project.viewLink} target="_blank" className={styles.buttonPrimary}>View</Link>
                          <Link href={project.githubLink} target="_blank" className={styles.buttonSecondary}>GitHub</Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              )
            })}


          </div>

        </div>
      </Layout>
    </>
  )
}

export default Projects;