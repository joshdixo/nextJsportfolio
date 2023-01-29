import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Josh Dixon</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>Contact</h1>

                    <ContactForm className={styles.form}/>
                </div>
            </Layout>
        </>
    )
}

export default Contact;