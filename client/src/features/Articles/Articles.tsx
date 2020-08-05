import styled from 'reshadow'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticProps } from 'next'

import { FC } from '~/utils/types'
import { Card } from '~/blocks'
import { ROUTES } from '~/utils/const'
import { Article } from '../types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(
    `${ROUTES.api}/articles`,
  )

  return {
    props: {
      articles,
    },
    revalidate: 1,
  }
}

export const Articles: FC<{ articles: Article[] }> = ({ articles }) => {
  const [lastArticle, ...restArticles] = articles
    .slice(0)
    .sort((a, b) => (a.id > b.id ? -1 : 1))

  return styled()`
    articles {
      margin: 50px auto;
      max-width: 950px;
      display: flex;
      flex-direction: column;
    }
    hero-article {
      padding: 50px 70px;
      display: flex;
      flex-direction: column;

      background-color: #f8b314;
      border: 2px solid black;
      cursor: pointer;

      position: relative;
      z-index: 10;
    }
    hero-article white-block {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;

      height: 100%;
      width: 0;
      margin-left: 100%;

      transition: all 0.4s ease-in-out;
      background-color: white;
    }
    hero-article:hover white-block {
      margin-left: 0;
      width: 100%;
    }
    hero-article column {
      justify-content: center;
      padding: 48px;
    }
    hero-article small {
      margin-bottom: 25px;

      font-family: 'Montserrat Alternates';
    }
    hero-article h2 {
      font-size: 55px;
      font-family: 'Mont Bold';
      line-height: 49px;
      letter-spacing: 0.005em;

      margin-bottom: 16px;
    }
    hero-article p {
      font-size: 15px;
      line-height: 16px;

      margin-bottom: 27px;
    }
    hero-article a {
      padding: 16px 48px;
      border: 2px solid black;
      width: fit-content;

      color: black;
      font-family: 'Mont SemiBold';
      text-decoration: none;
    }

    list {
      width: 950px;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 70px;

      display: grid;
      grid-gap: 2vw;
      grid-template-columns: 1fr 1fr;
    }

    h1 {
      text-align: center;
    }
  `(
    <articles>
      <hero-article>
        <small>Последняя статья:</small>

        {lastArticle && <h2>{lastArticle.title}</h2>}

        <p>
          Мы гораздо больше похожи на Вавилон, чем хотелось бы думать. Может мы
          и не плавим золото и серебро, чтобы создать себе статуи богов, но мы
          стараемся управлять своими деньгами ради стабильности и власти.
        </p>

        {lastArticle && (
          <Link href={`/articles/${lastArticle.id}`}>
            <a>Читать</a>
          </Link>
        )}

        <white-block />
      </hero-article>

      <list>
        {restArticles.map((article) => {
          const { id, title, cover, tags } = article

          return (
            <Card
              key={id}
              title={title}
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
    </articles>,
  )
}

export default Articles
