import { Flex, Image, Text } from '@theme-ui/components';

import { Author } from '../types';
import { getImgUrl } from '../lib';

type AuthorInfo = {
  author: Author;
};

export const AuthorInfo = ({ author }: AuthorInfo) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Image
        sx={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
        src={getImgUrl(author.avatar.url)}
        alt="article-author-avatar"
      />

      <Text ml={2} sx={{ fontSize: 1, fontFamily: 'heading' }}>
        {author.firstName} {author.lastName}
      </Text>
    </Flex>
  );
};
