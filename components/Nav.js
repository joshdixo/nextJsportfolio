import { motion } from "framer-motion";
import Link from "next/link";
import styles from './Nav.module.scss';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const path = usePathname();


    const links = [
        { href: "/projects", label: "Projects"},
        { href: "/about", label: "About"},
        { href: "/contact", label: "Contact"},
        { href: "/resume", label: "Resume"}
    ]

    return (
        <div className={styles.nav}>
            <div className={styles.avatar}>
                <Link href={'/'}><img src='/public/vercel.svg'/></Link>
            </div>
            {links.map((link) => (
                <div className={styles.navItem}>
                    <Link 
                    href={link.href}
                    scroll={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        {link.href === path &&
                        <motion.span
                            layoutId="active"
                            className={styles.active}
                    
                        />
                        }
                        {link.label}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Nav;