import { Article } from "@views/article";
import { getArticleContent, getArticleMetadata, getArticlesNames } from "@helpers/mdx.helpers";

export const getStaticProps = async ({ params }) => {
  const content = await getArticleContent(params.id);
  const metadata = await getArticleMetadata(params.id);
  return {
    props: {
      content,
      metadata,
    },
  };
};

export const getStaticPaths = async () => {
  const articlesNames = await getArticlesNames();
  const paths = articlesNames.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default Article;
