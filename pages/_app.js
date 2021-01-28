import '../styles/index.css'
import 'highlight.js/styles/tomorrow-night-blue.css'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}