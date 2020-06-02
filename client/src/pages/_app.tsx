// FIXME: need to exclude `normalize.css` from postcss parsing
// @ts-ignore
import normalize from '!!raw-loader!normalize.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, TranslationContext } from '~/widgets'

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>KE</title>
      <link rel="icon" href="/favicon.ico" />
      <style>{normalize}</style>
      <style>
        {`
          * {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <TranslationContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslationContext>
  </>
)
