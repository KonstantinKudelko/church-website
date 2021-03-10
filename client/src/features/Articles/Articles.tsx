import Link from 'next/link';
import axios from 'axios';
import { GetStaticProps } from 'next';

import { FC } from '~/utils/types';
import { Card } from '~/blocks';
import { ROUTES } from '~/routes';
import { Article } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(`${ROUTES.api}/articles`);

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
};

export const Articles: FC<{ articles: Article[] }> = ({ articles }) => {
  const [lastArticle, ...restArticles] = articles
    .slice(0)
    .sort((a, b) => (a.id > b.id ? -1 : 1));

  return (
    <div>
      {lastArticle && <h2>{lastArticle.title}</h2>}

      <p>
        Мы гораздо больше похожи на Вавилон, чем хотелось бы думать. Может мы и не плавим
        золото и серебро, чтобы создать себе статуи богов, но мы стараемся управлять
        своими деньгами ради стабильности и власти.
      </p>

      {lastArticle && (
        <Link href={`/articles/${lastArticle.id}`}>
          <a>Читать</a>
        </Link>
      )}

      {restArticles.map((article) => {
        const { id, title, cover, tags } = article;

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
        );
      })}
    </div>
  );
};

export default Articles;
