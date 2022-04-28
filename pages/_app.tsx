import '../styles/globals.css'

import AuthWrapper from '../components/AuthWrapper'
import { Layout } from '../components/Layout'
import { AppContextProvider } from '../contexts/AppContext'

import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </AppContextProvider>
  )
}

export default MyApp
