type File = {
  url: string;
};

/* -- ENTITY TYPES --- */

// import articleModel from '../../../server/api/article/models/article.settings.json'
export type Article = {
  id: string;
  title: string;
  body: string;
  cover: File;
  tags: { id: string; title: string }[];
  author: Author;
  excerpt: string;
  created_at: string;
};

// import authorModel from '../../../server/api/author/models/author.settings.json'
export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  facebookUrl: string;
  instagramUrl: string;
  description: string;
  articles: Article[];
  avatar: File;
};

// import tagModel from '../../../server/api/tag/models/tag.settings.json'
export type Tag = {
  id: string;
  title: string;
  articles: Article[];
};

/* -- CONTENT TYPES --- */

export type ParagraphBlock = {
  type: 'paragraph';
  data: {
    text: string;
  };
};

export type HeaderBlock = {
  type: 'header';
  data: {
    text: string;
    level: 1 | 2 | 3 | 4;
  };
};

export type QuoteBlock = {
  type: 'quote';
  data: { alignment: string; caption: string; text: string };
};

type DelimiterBlock = {
  type: 'delimiter';
  data: {};
};

type ImageBlock = {
  type: 'image';
  data: {
    caption: string;
    file: { url: string };
    stretched: boolean;
    withBackground: boolean;
    withBorder: boolean;
  };
};

type ListBlock = {
  type: 'list';
  data: {
    items: string[];
    style: string;
  };
};

export type ContentBlock =
  | ParagraphBlock
  | HeaderBlock
  | QuoteBlock
  | DelimiterBlock
  | ImageBlock
  | ListBlock;

export type Content = ContentBlock[];
