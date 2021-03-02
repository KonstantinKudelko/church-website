import { FunctionalComponent, VNode } from 'preact'

export type Node = VNode
export type FC<T = {}> = FunctionalComponent<T & { className?: string }>
