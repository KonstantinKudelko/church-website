import styled from 'reshadow'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { FC } from '~/utils/types'
import { ROUTES } from '~/utils/const'
import { Card } from '~/blocks'
import { useTranslation } from './TranslationContext'
import { Article } from './types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(
    `${ROUTES.api}/articles`,
  )

  return {
    props: {
      articles,
    },
  }
}

export const Articles: FC<{ articles: Article[] }> = ({ articles }) => {
  // const translation = useTranslation({
  //   en: () => import(`./Articles/translations/en`),
  //   ru: () => import(`./Articles/translations/ru`),
  // })

  return (
    // translation &&
    styled()`
      list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 40rem;
        margin: auto;
        padding: 2rem 0;
      }
      h1 {
        text-align: center;
      }
      Card {
        margin-bottom: 4rem;
      }
    `(
      <>
        {/* <h1>{translation.title()}</h1> */}
        <list>
          {articles.slice(0).sort((a, b) => a.id > b.id ? -1 : 1).map((article) => {
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
  )
}

export default Articles
