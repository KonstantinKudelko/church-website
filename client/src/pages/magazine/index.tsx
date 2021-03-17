
import axios from 'axios';
import { Grid } from 'theme-ui';
import { GetStaticProps } from 'next';

import { ROUTES } from '~/routes';
import { Article, ArticleCard } from '~/features/magazine';

export default ({ articles }: { articles: Article[] }) => {
  return (
    <Grid py={5} m="0 auto" sx={{ maxWidth: 1120 }} columns={[ 2 ]}>
      {articles.map((article) => {
        const { id, tags, title, cover, excerpt } = article;

        return (
          <ArticleCard
            key={id}
            tags={tags.map(({ title, id }) => ({
              title,
              href: `${ROUTES.api}/tags/${id}`,
            }))}
            href={`magazine/${id}`}
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
            title={title}
            excerpt={excerpt}
          />
        );
      })}
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(`${ROUTES.api}/articles`);
  const sortedArticles = articles
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .reverse();

  return {
    props: {
      articles: sortedArticles,
    },
    revalidate: 1,
  };
};
