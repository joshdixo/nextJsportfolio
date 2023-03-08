import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";
import styles from '../styles/Resume.module.scss';
import Link from "next/link";

const Resume = () => {

    const imgMotion = {
        rest: { opacity: 1, duration: 0.2, type: "spring", x: 0, y: 0, scale: 1 },
        hover: {
            opacity: 1,
            y: -20,
            scale: 1.04,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <>
            <Head>
                <title>Resume | Josh Dixon</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>Resume</h1>

                    <section className={styles.work}>
                        <div className={styles.container}>
                            <div className={styles.grid}>
                                <div className={styles.gridCell}>
                                    <div className={styles.textWrapper}>
                                        <p>I invite you to take a closer look at my resume, where you will find more detailed information about my professional background, education and certifications.</p>
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <Link href="/documents/JoshDixonResume.pdf" download target="_blank" className={styles.buttonSecondary}>
                                            Download
                                        </Link>
                                        <Link href="/documents/JoshDixonResume.pdf" target="_blank" className={styles.buttonPrimary}>
                                            View
                                        </Link>
                                    </div>
                                </div>

                                <Link href="/documents/JoshDixonResume.pdf" target="_blank" className={styles.gridCell_project}>
                                    <motion.div variants={imgMotion} layout="position" className={styles.imgWrapper} initial="rest" whileHover="hover" animate="rest">
                                        <img src="/documents/JoshDixonResume.png" />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}

export default Resume;