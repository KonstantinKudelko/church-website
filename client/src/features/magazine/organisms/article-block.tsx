import { Box, Image } from 'theme-ui';

import { Title1 } from '../atoms/typography';
import { getComponent } from '../lib/get-component';
import { ArticleHeader } from './article-header';
import { Author, Content } from '../types';

export type ArticleProps = {
  title: string;
  cover?: string;
  author: Author;
  blocks: Content;
};

export const ArticleBlock = ({ title, cover, author, blocks }: ArticleProps) => {
  return (
    <Box m="0 auto" py={5} mx={[3, 3, 'auto']} sx={{ maxWidth: ['100%', '650px'] }}>
      <Title1 data={{ text: title }} />

      <ArticleHeader author={author} blocks={blocks} />

      <Image sx={{ minWidth: '100%' }} mb={4} src={cover} alt="article-cover" />

      {blocks.map((block) => {
        const Component = getComponent(block);

        return <Component data={block.data} />;
      })}
    </Box>
  );
};
