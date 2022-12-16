import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.scss';
import Layout from '../components/Layout';
import { useState } from 'react';
import { StyleRegistry } from 'styled-jsx';
import Divider from '../components/Divider';

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
    img: '#',
    desc: 'testing description',
    viewLink: '#',
    githubLink: '#',
    isLatest: false
  },
  {
    id: 4,
    title: 'Password Generator',
    img: '#',
    desc: 'testing description',
    viewLink: '#',
    githubLink: '#',
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
      x: -10,
      y: -24,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="container">
        <h1>Latest Work</h1>

        <div className="container">
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
                            <h5>Title</h5>
                            <p>Collecting Cars and Watch Collecting are the two online auction
                              platforms that I work on.
                            </p>
                            <p>I have worked on a variety of features accross the two sit</p>

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
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                    </div>
                  </motion.div>
              )
            })}


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects;