type File = {
  url: string;
};

/* -- ENTITY TYPES --- */

// import articleModel from '../../../server/api/article/models/article.settings.json'
export type Article = {
  id: string;
  title: string;
  body: string;
  cover?: File;
  tags: { id: string; title: string }[];
  author: unknown;
  excerpt: string;
  created_at: string;
  hero_cover: File;
  hero_description: string;
};

// import authorModel from '../../../server/api/author/models/author.settings.json'
export type Author = {
  id: string;
  first_name: string;
  last_name: string;
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
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

type ParagraphBlock = {
  type: 'paragraph';
  data: {
    text: string;
  };
};

type HeaderBlock = {
  type: 'header';
  data: {
    text: string;
    level: 1 | 2 | 3 | 4;
  };
};

type QuoteBlock = {
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

export type ContentBlock =
  | ParagraphBlock
  | HeaderBlock
  | QuoteBlock
  | DelimiterBlock
  | ImageBlock;

export type Content = ContentBlock[];
