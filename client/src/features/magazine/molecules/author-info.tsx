import { Flex, Image, Text } from '@theme-ui/components';

import { ROUTES } from '~/routes';
import { Author } from '../types';

type AuthorInfo = {
  author: Author;
};

export const AuthorInfo = ({ author }: AuthorInfo) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Image
        sx={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
        src={`${ROUTES.api}${author.avatar.url}`}
        alt="article-author-avatar"
      />

      <Text ml={2} sx={{ fontSize: 1, fontFamily: 'heading' }}>
        {author.first_name} {author.last_name}
      </Text>
    </Flex>
  );
};
