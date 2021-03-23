import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

import { ROUTES } from '~/routes';
import { Article, ArticleBlock, Author } from '~/features/magazine';

export default ({ article }: { article: Article }) => {
  const { title, cover, author } = article;
  const { blocks } = JSON.parse(article.body);

  return (
    <ArticleBlock
      author={author as Author}
      title={title}
      cover={cover && `${ROUTES.api}${cover.url}`}
      blocks={blocks}
    />
  );
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
