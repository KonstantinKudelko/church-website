import { Box, Image } from 'theme-ui';

import { ROUTES } from '~/routes';
import { Title1 } from '../atoms/typography';
import { getComponent } from '../lib/get-component';
import { ArticleHeader } from './article-header';
import { Article, Author, Content } from '../types';

export type ArticleProps = {
  article: Article;
};

export const ArticleBlock = ({ article }: ArticleProps) => {
  const { title, author, cover, created_at, body } = article;
  const { blocks }: { blocks: Content } = JSON.parse(body);

  return (
    <Box m="0 auto" py={5} mx={[3, 3, 'auto']} sx={{ maxWidth: ['100%', '650px'] }}>
      <Title1 data={{ text: title }} />

      <ArticleHeader
        author={author as Author}
        blocks={blocks}
        creationDate={created_at}
      />

      <Image
        sx={{ minWidth: '100%' }}
        mb={4}
        src={`${ROUTES.api}${cover.url}`}
        alt="article-cover"
      />

      {blocks.map((block) => {
        const Component = getComponent(block);

        return <Component data={block.data} />;
      })}
    </Box>
  );
};
