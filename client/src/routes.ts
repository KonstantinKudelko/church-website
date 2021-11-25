const api = process.env.API_URL || 'https://admin.rozhdestvo-youth.by';

export const ROUTES = {
  api,
  articles: '/articles',
  notFound: '/404',
} as const;
