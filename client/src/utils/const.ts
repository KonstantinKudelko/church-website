const api = `http://88.198.206.26`
export const ROUTES = {
  api,
  main: `/`,
  articles: `/articles`,
  about: `/about`,
  notFound: `/404`,
  fallbackImage: `${api}/uploads/Clean_Shot_2020_06_02_at_10_09_42_00587f7607.png`,
} as const
