import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import Nav from "../components/Nav";
import { usePathname } from 'next/navigation';

function MyApp({ Component, pageProps }) {

  return (
      <>
        <Nav />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
        <Component {...pageProps} key={usePathname} />
      </AnimatePresence>
      </>
  )
}

export default MyApp;
