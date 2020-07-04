import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'

import { FC } from '~/utils/types'
import { ROUTES } from '~/utils/const'
import { NotFound, Article as ArticleBlock } from '~/blocks'
import { Article as TArticle } from '~/widgets/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<TArticle[]>(`${ROUTES.api}/articles`)

  const paths = posts.map((post) => `/articles/${post.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: article } = await axios.get<TArticle>(
    `${ROUTES.api}/articles/${ctx.params!.name}`,
  )

  return {
    props: {
      article,
    },
  }
}

export const Article: FC<{ article?: TArticle }> = ({ article }) => {
  if (!article) return <NotFound />

  const {blocks} = JSON.parse(article.body)

  return <ArticleBlock blocks={blocks} />
}
