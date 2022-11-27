import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0, transition: { delay: 0.25 }}}
    exit={{opacity: 0, y: 20}}
    className="main">
            <div className="container">
                <h1>Contact</h1>
            </div>
        </motion.div>
    )}

export default Contact;