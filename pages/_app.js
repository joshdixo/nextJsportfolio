import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import '../styles/globals.scss'
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {

  return (
      <AnimatePresence>
        <Nav />
        <Component {...pageProps} />
      </AnimatePresence>
  )
}

export default MyApp
