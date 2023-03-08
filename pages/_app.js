import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { usePathname } from 'next/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
config.autoAddCss = false;
library.add(fab, faLinkedin, faGithub, faTwitter, faBehance)

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Nav />
      <AnimatePresence
        wait
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={usePathname} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp;
