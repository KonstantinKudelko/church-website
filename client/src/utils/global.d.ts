/* RESHADOW start */
// FIXME: back to `reference` when `as` be optional
// <reference path="../../node_modules/reshadow/elements.d.ts" />
type CustomElement<T> = T extends any
  ? { as?: T } & JSX.IntrinsicElements[T]
  : never
declare namespace JSX {
  interface IntrinsicElements extends JSX.IntrinsicElements {
    [name: string]: CustomElement<keyof JSX.IntrinsicElements>
  }
}
/* RESHADOW end */
