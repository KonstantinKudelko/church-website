// FIXME: need to exclude `normalize.css` from postcss parsing
// @ts-ignore
import normalize from '!!raw-loader!normalize.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <style>{normalize}</style>
    </Head>
    <Component {...pageProps} />
  </>
)
