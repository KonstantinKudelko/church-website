// FIXME: need to exclude `normalize.css` from postcss parsing
// @ts-ignore
import normalize from '!!raw-loader!normalize.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '~/global-styles.css'
import { Layout } from '~/blocks'

export const Index = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  // Initially redirect user to the articles page
  // In future by root route user should see landing page
  useEffect(() => {
    router.replace('/articles')
  }, [])

  return (
    <>
      <Head>
        <title>KE</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=1200"></meta>
        <link href="/fonts/index.css"></link>
        <style>{normalize}</style>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Index
