import { ROUTES } from '~/utils/const'

export default {
  title: () => 'Как есть',
  nav: {
    main: {
      title: () => 'Главная',
      href: () => ROUTES.main,
    },
    articles: {
      title: () => 'Статьи',
      href: () => ROUTES.articles,
    },
    about: {
      title: () => 'О нас',
      href: () => ROUTES.about,
    },
  },
} as const
