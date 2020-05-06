import styled from 'reshadow'
import Head from 'next/head'

import { Layout } from '~/blocks'
import { Article } from '~/blocks/Article'

const Home = () =>
  styled()`
    warning {
      border: 0.25rem dashed red;
    }
    msg {
      opacity: 0.5;
      font-size: 2rem;
      text-align: center;
    }
  `(
    <div className="container">
      <Head>
        <title>KE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <warning>
          <msg>WIP</msg>
          <Article />
        </warning>
      </Layout>
    </div>,
  )

export default Home
