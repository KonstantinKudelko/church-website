import { GetStaticProps } from 'next'
import fetch from 'node-fetch'

import { ROUTES } from '~/utils/const'
import { Layout, Link } from '~/blocks'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${ROUTES.api}/articles`)
  if (res.status !== 200)
    throw new Error(`Responce status ${res.status}:\n` + (await res.text()))

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
