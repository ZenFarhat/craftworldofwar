import '../styles/globals.css'

import { Layout } from '../components/Layout'
import { AppContextProvider } from '../contexts/AppContext'

import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp
