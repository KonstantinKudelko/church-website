import React from 'react';
import styled from 'styled-components';
import { Text, Image } from 'theme-ui';

import { Link } from '~/ui';

type ArticleCardProps = {
  href: string;
  tags: { title: string; href: string }[];
  image: { src: string; alt: string };
  title: string;
  excerpt: string;
};

export const ArticleCard = ({ href, image, title, excerpt }: ArticleCardProps) => (
  <Card href={href}>
    <Image
      sx={{
        maxHeight: 450,
        minWidth: '100%',
        objectFit: 'cover',
        borderRadius: '5px',
      }}
      mb={3}
      src={image.src}
      alt={image.alt}
    />

    <Text sx={{ variant: 'text.h2' }} mb={2}>
      {title}
    </Text>

    <Text sx={{ variant: 'text.body' }}>{excerpt}</Text>
  </Card>
);

const Card = styled(Link)`
  padding: 25px;
  grid-column: span 1;

  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 12%);
  }

  &:first-child {
    grid-column: span 2;
  }
`;
