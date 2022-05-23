import { Article } from "@components/article";
import { getArticleContent, getArticlesNames } from "@helpers/mdx.helpers";

export const getStaticProps = async ({ params }) => {
  const content = await getArticleContent(params.id);
  return {
    props: {
      content: content,
    },
  };
};

export const getStaticPaths = async () => {
  const articlesNames = await getArticlesNames();
  const paths = articlesNames.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default Article;
