const api = process.env.API_URL || 'http://website_server_dev:1337';

export const ROUTES = {
  api,
  articles: '/articles',
  notFound: '/404',
} as const;
