import { ROUTES } from '~/utils/const'

export default {
  title: () => 'Как есть',
  nav: {
    main: {
      title: () => 'Main',
      href: () => ROUTES.main,
    },
    articles: {
      title: () => 'Articles',
      href: () => ROUTES.articles,
    },
    about: {
      title: () => 'About',
      href: () => ROUTES.about,
    },
  },
} as const
