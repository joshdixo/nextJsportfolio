import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }) => (
    <div>
        <motion.main
            initial="hidden"
            animate="enter"
            exit
            variants={variants}
            transition={{ type: 'linear', duration: 0.3 }}
            className="main"
            >
            {children}
        </motion.main>
    </div>
)

export default Layout;