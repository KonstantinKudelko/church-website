import { createContext } from 'preact'
import { useContext, useRef } from 'preact/hooks'

import { FC } from '~/utils/types'
import { useForceUpdate } from '~/utils/hooks'

const defaultLang: Lang = 'ru' as Lang

const Context = createContext(defaultLang)

type Lang = 'ru' | 'en'

export function useTranslation<T>(
  imports: Record<Lang, () => Promise<{ default: T }>>,
): null | T {
  const translationRef = useRef<T | null>(null)
  const lang = useContext(Context)
  const forceUpdate = useForceUpdate()

  // TODO: replace to https://github.com/theKashey/react-imported-component#hook
  if (translationRef.current === null) {
    function load() {
      const importer = imports[lang]()

      let shouldUpdate = false
      importer.then((result) => {
        translationRef.current = result.default
        if (shouldUpdate) forceUpdate()
      })
      shouldUpdate = true
    }

    if (process.browser) {
      load()
    } else {
      // @ts-ignore
      const originalImport = globalThis.import
      // @ts-ignore
      globalThis.import = (path) => ({
        then(cb: Function) {
          cb(require(path))
        },
      })
      load()
      // @ts-ignore
      globalThis.import = originalImport
    }
  }

  return translationRef.current
}

export const TranslationContext: FC = ({ children }) => {
  // TODO: `changeLang` API
  return <Context.Provider value={defaultLang}>{children}</Context.Provider>
}
