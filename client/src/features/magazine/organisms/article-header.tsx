import { Text, Flex } from '@theme-ui/components';

import { AuthorInfo } from '../molecules/author-info';
import { Author, Content } from '../types';
import { ArticleReadingTime } from '../molecules/article-reading-time';
import { ArticleCreationDate } from '../molecules/article-creation-date';

type ArticleHeader = {
  author: Author;
  blocks: Content;
  creationDate: string;
};

export const ArticleHeader = ({ author, blocks, creationDate }: ArticleHeader) => {
  return (
    <Flex mb={4} sx={{ alignItems: 'center' }}>
      <AuthorInfo author={author} />

      <ArticleCreationDate creationDate={creationDate}/>

      <Text ml={2}>·</Text>

      <ArticleReadingTime blocks={blocks} />
    </Flex>
  );
};
