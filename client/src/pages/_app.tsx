import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from '~/global-styles.ts'

const Index = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>РЮЗ</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link href="/fonts/index.css"></link>
    </Head>

    <GlobalStyle />

    <Component {...pageProps} />
  </>
)

export default Index
