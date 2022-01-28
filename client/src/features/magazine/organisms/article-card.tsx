import React from 'react';
import styled from 'styled-components';
import { Text, Heading } from 'theme-ui';

import { Link, theme } from '~/ui';

type ArticleCardProps = {
  href: string;
  tags: { title: string; href: string }[];
  image: { src: string; alt: string };
  title: string;
  excerpt: string;
};

export const ArticleCard = ({ href, image, title, excerpt }: ArticleCardProps) => (
  <Card href={href}>
    <StyledImage src={image.src} alt={image.alt} style={{ minHeight: '250px' }} />

    <Heading as="h2" sx={{ variant: 'text.h2' }} mb={2}>
      {title}
    </Heading>

    <Text sx={{ variant: 'text.body' }}>{excerpt}</Text>
  </Card>
);

const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: ${theme.space[3]}px;

  object-fit: cover;
  border-radius: 5px;
`;

const Card = styled(Link)`
  padding: 15px;
  grid-column: span 1;

  ${theme.media.medium} {
    padding: 25px;
  }

  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 12%);
  }

  &:first-child {
    grid-column: span 1;
  }

  &:first-child ${StyledImage} {
    height: 450px;
  }

  ${theme.media.medium} {
    &:first-child {
      grid-column: span 2;
    }
  }
`;
