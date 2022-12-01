import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.scss';
import Layout from '../components/Layout';

const Projects = () => {
    return (
        <Layout>
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
        </Layout>
    )}

export default Projects;