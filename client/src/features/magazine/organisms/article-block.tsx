import { Box } from 'theme-ui';

import { Title1 } from '../atoms/typography';
import { Content } from '~/features/magazine';
import { getComponent } from '../lib/get-component';

export type ArticleProps = {
  title: string;
  cover?: string;
  blocks: Content;
};

export const ArticleBlock = ({ title, cover, blocks }: ArticleProps) => {
  return (
    <Box m="0 auto" py={5} sx={{ maxWidth: '650px' }}>
      <Title1 data={{ text: title }} />

      {blocks.map((block) => {
        const Component = getComponent(block);

        return <Component data={block.data} />;
      })}
    </Box>
  );
};
