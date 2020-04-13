import '~/utils/init'
import { h } from 'preact'
import Head from 'next/head'

import { Layout } from '~/widgets'

const Home = () => (
  <div className="container">
    <Head>
      <title>KE</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Home</h1>
    </Layout>
  </div>
)

export default Home
