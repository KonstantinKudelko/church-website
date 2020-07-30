import { Layout as LayoutBlock } from '~/blocks'
import { FC } from '~/utils/types'
import { useTranslation } from '../TranslationContext'

export const Layout: FC = ({ children }) => {
  const translation = useTranslation({
    en: () => import(`./translations/en`),
    ru: () => import(`./translations/ru`),
  })

  return (
    translation && (
      <LayoutBlock
        main={children}
        header={{
          title: translation.title(),
          nav: Object.values(translation.nav).map(({ title, href }) => ({
            title: title(),
            href: href(),
          })),
        }}
      />
    )
  )
}
