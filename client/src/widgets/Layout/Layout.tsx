import { h } from 'preact'
import { styled } from 'goober'

import { Header } from '~/widgets'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
