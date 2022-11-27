import { AnimateSharedLayout } from "framer-motion";
import '../styles/globals.scss'
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {

  return (
      <AnimateSharedLayout>
        <Nav />
        <Component {...pageProps} />
      </AnimateSharedLayout>
  )
}

export default MyApp
