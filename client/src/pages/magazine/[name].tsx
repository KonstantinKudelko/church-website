import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

import { ROUTES } from '~/routes';
import { Article, ArticleBlock } from '~/features/magazine';

export default ({ article }: { article: Article }) => {
  return <ArticleBlock article={article} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<Article[]>(`${ROUTES.api}/articles`);

  const paths = posts.map((post) => `/magazine/${post.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: article } = await axios.get<Article>(
    `${ROUTES.api}/articles/${ctx.params!.name}`,
  );

  return {
    props: {
      article,
    },
  };
};
