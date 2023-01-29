import { motion, AnimatePresence, AnimateSharedLayout, LayoutGroup, transform } from "framer-motion";
import Link from "next/link";
import styles from './Nav.module.scss';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const path = usePathname();


    const links = [
        { href: "/"},
        { href: "/projects", label: "Projects"},
        // { href: "/about", label: "About"},
        { href: "/contact", label: "Contact"},
        { href: "/resume", label: "Resume"}
    ]

    return (
        <div className={styles.nav}>
            {/* <div className={styles.avatar}>
                <Link href={'/'}><img src='./public/vercel.svg'/></Link>
            </div> */}
            <LayoutGroup>
            
            {links.map((link) => (
                <div className={styles.navItem}>
                    <Link 
                        href={link.href}
                        scroll={false}
                    >
                        {link.href === path &&
                        <motion.span
                            layoutId="bg"
                            className={styles.active}
                        />
                        }
                        {link.href == "/" ? <img className="avatars" src="/images/JoshDixon.JPG"/> : <span>{link.label}</span>}
                    </Link>
                </div>
            ))}
              </LayoutGroup>
        </div>
    )
}

export default Nav;