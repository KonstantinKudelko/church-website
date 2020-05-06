import { GetStaticPaths, GetStaticProps } from 'next'
import fetch from 'node-fetch'

import { FC, Article as TArticle } from '~/utils/types'
import { ROUTES } from '~/utils/const'
import { Layout } from '~/blocks'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${ROUTES.api}/articles`)
  const posts: TArticle[] = await res.json()

  const paths = posts.map((post) => `/articles/${post.id}`)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch(`${ROUTES.api}/articles/${ctx.params!.name}`)
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

const Article: FC<{ article: TArticle }> = ({ article }) => {
  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </Layout>
  )
}

export default Article
