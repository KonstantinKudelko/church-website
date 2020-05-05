// TODO: replace by preact?
import { FC as FunctionalComponent } from 'react'

import articleModel from '../../../server/api/article/models/article.settings.json'

export type FC<T = {}> = FunctionalComponent<T>

type MapApiAttributes<T> = {
  [K in keyof T]: string
}
type ApiAttributes<T> = { id: string } & MapApiAttributes<T>
export type Article = ApiAttributes<typeof articleModel.attributes>
