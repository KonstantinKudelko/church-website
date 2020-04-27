import { GetStaticPaths, GetStaticProps } from 'next'
import fetch from 'node-fetch'

import { useRouter } from 'next/router'

import { ROUTES } from '~/utils/const'
import { Layout } from '~/blocks'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${ROUTES.api}/articles`)
  const posts: unknown[] = await res.json()

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

function useArticleName() {
  return useRouter().query.name as string
}

const Article = ({ article }) => {
  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </Layout>
  )
}

export default Article
