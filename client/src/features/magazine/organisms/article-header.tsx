import { Text, Flex } from '@theme-ui/components';

import { AuthorInfo } from '../molecules/author-info';
import { Author, Content } from '../types';
import { ArticleReadingTime } from '../molecules/article-reading-time';

type ArticleHeader = {
  author: Author;
  blocks: Content;
};

export const ArticleHeader = ({ author, blocks }: ArticleHeader) => {
  return (
    <Flex mb={4} sx={{ alignItems: 'center' }}>
      <AuthorInfo author={author} />

      <Text ml={2}>·</Text>

      <ArticleReadingTime blocks={blocks} />
    </Flex>
  );
};
