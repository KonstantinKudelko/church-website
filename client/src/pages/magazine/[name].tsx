import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'preact/hooks';

import { ROUTES } from '~/routes';
import { Article, ArticleBlock } from '~/features/magazine';

export default ({ article }: { article: Article }) => {
  const { title, cover, excerpt } = article;
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={excerpt}
        openGraph={{
          url: pageUrl,
          title: title,
          description: excerpt,
          images: [{ url: `${ROUTES.api}${cover.url}` }],
        }}
      />

      <ArticleBlock article={article} />
    </>
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
