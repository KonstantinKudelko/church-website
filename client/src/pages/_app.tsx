// FIXME: need to exclude `normalize.css` from postcss parsing
// @ts-ignore
import normalize from '!!raw-loader!normalize.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, TranslationContext } from '~/features'
import Main from './main'

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>KE</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
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
      {Component === Main ? (
        <Main />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </TranslationContext>
  </>
)
