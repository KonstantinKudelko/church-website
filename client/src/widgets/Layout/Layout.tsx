import { styled } from 'goober'

import { Header } from '~/widgets'

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
