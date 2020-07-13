// FIXME: need to exclude `normalize.css` from postcss parsing
// @ts-ignore
import normalize from '!!raw-loader!normalize.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, TranslationContext } from '~/features'
import Main from './main'

import '~/global-styles.css'

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>KE</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link href="/fonts/index.css"></link>
      <style>{normalize}</style>
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
