import Head from 'next/head'

import { Layout } from '~/blocks'
import { Article } from '~/blocks/Article'

const Home = () => (
  <div className="container">
    <Head>
      <title>KE</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Article />
    </Layout>
  </div>
)

export default Home
