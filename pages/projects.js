import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
    return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0, transition: { delay: 0.25 }}}
    exit={{opacity: 0, y: 20}}
    className="main">
        <div className="container">
            <h1>Projects</h1>

            <div className="container">
                <div className="grid">
                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>

                    <div className="grid__cell">
                        <div className={styles.card}>
                            <h3>Project1</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    )}

export default Projects;