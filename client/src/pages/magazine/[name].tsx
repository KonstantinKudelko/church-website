import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

import { ROUTES } from '~/routes';
import { Article } from '~/features/magazine/types';
import { NotFound, Article as ArticleBlock } from '~/blocks';

export default ({ article }: { article?: Article }) => {
  if (!article) return <NotFound />;

  const { title, cover } = article;
  const { blocks } = JSON.parse(article.body);

  return (
    <ArticleBlock
      title={title}
      cover={cover && `${ROUTES.api}${cover.url}`}
      blocks={blocks}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<Article[]>(`${ROUTES.api}/articles`);

  const paths = posts.map((post) => `/articles/${post.id}`);

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
    revalidate: 1,
  };
};
