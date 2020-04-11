import '~/utils/init'
import { GetStaticProps } from 'next'
import fetch from 'node-fetch'

import { Link } from '~/blocks'
import { Layout } from '~/widgets'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://1337-db41b783-1b57-468c-87bc-6a8e4493efab.ws-eu01.gitpod.io/articles',
  )
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

const Articles = ({ articles }: any) => {
  return (
    <Layout>
      <h1>Articles</h1>
      <ul>
        {articles.map(({ id, title }) => (
          <li>
            <Link href={`articles/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Articles
