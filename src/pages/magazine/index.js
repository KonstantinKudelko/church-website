import { Articles } from "@views/articles";
import { getArticlesMetadata } from "@helpers/mdx.helpers";

export const getStaticProps = async () => {
  const articlesFromStorage = await getArticlesMetadata();
  return {
    props: {
      articlesFromStorage,
    },
  };
};

export default Articles;
