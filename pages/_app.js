import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import Nav from "../components/Nav";
import { usePathname } from 'next/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
// import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 
library.add(fab, faLinkedin, faGithub, faTwitter, faBehance)

function MyApp({ Component, pageProps }) {

  return (
      <>
        <Nav />
        <AnimatePresence
          wait
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
        <Component {...pageProps} key={usePathname} />
      </AnimatePresence>
      </>
  )
}

export default MyApp;
