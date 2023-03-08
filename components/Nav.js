import { motion, AnimatePresence, AnimateSharedLayout, LayoutGroup, transform } from "framer-motion";
import Link from "next/link";
import styles from './Nav.module.scss';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const path = usePathname();


    const links = [
        { id: 1, href: "/" },
        { id: 2, href: "/projects", label: "Projects" },
        { id: 3, href: "/contact", label: "Contact" },
        { id: 4, href: "/resume", label: "Resume" }
    ]

    return (
        <div className={styles.nav}>
            <LayoutGroup>

                {links.map((link) => (
                    <div className={styles.navItem} key={link.id}>
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
                            {link.href == "/" ? <img className="avatars" src="/images/JoshDixon.JPG" /> : <span>{link.label}</span>}
                        </Link>
                    </div>
                ))}
            </LayoutGroup>
        </div>
    )
}

export default Nav;