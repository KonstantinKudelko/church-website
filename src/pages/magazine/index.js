import { Articles } from "@views/articles";
import { getArticlesMetadata } from "@helpers/mdx.helpers";

export const getStaticProps = async () => {
  const articlesMetadata = await getArticlesMetadata();
  return {
    props: {
      articlesMetadata,
    },
  };
};

export default Articles;
