import '../styles/globals.css'

import AuthWrapper from '../components/AuthWrapper'
import { Layout } from '../components/Layout'
import RedirectWrapper from '../components/RedirectWrapper'
import { AppContextProvider } from '../contexts/AppContext'

import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <RedirectWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RedirectWrapper>
    </AppContextProvider>
  )
}

export default MyApp
