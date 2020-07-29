import styled from 'reshadow'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { FC } from '~/utils/types'
import { Card } from '~/blocks'
import { ROUTES } from '~/utils/const'
import { Article } from './types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(
    `${ROUTES.api}/articles`,
  )

  return {
    props: {
      articles,
    },
    unstable_revalidate: 1,
  }
}

export const Articles: FC<{ articles: Article[] }> = ({ articles }) => {
  // const translation = useTranslation({
  //   en: () => import(`./Articles/translations/en`),
  //   ru: () => import(`./Articles/translations/ru`),
  // })

  return styled()`
    list {
      width: 950px;
      margin: 0 auto;
      margin-top: 50px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2vw;
    }
    h1 {
      text-align: center;
    }
    Card {
      margin-bottom: 4rem;
    }
  `(
    <>
      <list>
        {articles
          .slice(0)
          .sort((a, b) => (a.id > b.id ? -1 : 1))
          .map((article) => {
            const { id, title, body, cover, tags } = article

            return (
              <Card
                key={id}
                title={title}
                description={
                  // FIXME: type safe
                  JSON.parse(body).blocks[0].data.text.slice(0, 50) + '...'
                }
                image={
                  cover
                    ? {
                        src: `${ROUTES.api}${cover.url}`,
                        alt: title,
                      }
                    : {
                        src: ROUTES.fallbackImage,
                        alt: 'not found',
                      }
                }
                tags={tags.map(({ title, id }) => ({
                  title,
                  href: `${ROUTES.api}/tags/${id}`,
                }))}
                href={`articles/${id}`}
              />
            )
          })}
      </list>
    </>,
  )
}

export default Articles
