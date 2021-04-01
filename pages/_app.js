import { AnimatePresence } from 'framer-motion'
import '../assets/style.scss'

function MyApp({ Component, pageProps, router }) {
  return <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} key={router.route} />
  </AnimatePresence>
}

export default MyApp
