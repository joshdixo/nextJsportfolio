import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.footerLinks}>
                    <Link href={"https://linkedin.com/in/joshdixon"} target="_blank">LinkedIn</Link>
                    <Link href={"https://github.com/joshdixo"} target="_blank">GitHub</Link>
                    <Link href={"https://twitter.com/joshdixonphoto"} target="_blank">Twitter</Link>
                    <Link href={"https://behance.net/joshdixonphoto"} target="_blank">Behance</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;