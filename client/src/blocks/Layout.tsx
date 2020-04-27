import styled from 'reshadow'

import { Header } from '~/blocks'

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
