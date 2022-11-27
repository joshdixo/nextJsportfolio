import Link from "next/link";
import styles from './Nav.module.scss'

const Nav = () => {

    const links = [
        { href: "/projects", label: "Projects"},
        { href: "/about", label: "About"},
        { href: "/contact", label: "Contact"},
        { href: "/resume", label: "Resume"}
    ]

    return (
        <div className={styles.nav}>
            <div className={styles.avatar}>
                <Link href={'/'}><img src={'../public/vercel.svg'}/></Link>
            </div>
            {links.map((link) => (
                <div className={styles.navItem}>
                    <Link href={link.href}>
                        {link.label}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Nav;