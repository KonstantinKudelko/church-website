import styled from 'reshadow'

import { Footer } from './Footer'
import { FC, Node } from '~/utils/types'
import { HeaderProps, Header } from '~/blocks'

export const Layout: FC<{
  header: HeaderProps
  main: Node
}> = ({ header, main }) => {
  return styled()`
    wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    container {
      display: flex;
      flex: 1;
      margin: 0 36px;
    }

    main {
      flex-grow: 1;
    }
  `(
    <wrapper>
      <Header {...header} />

      <container>{main}</container>

      <Footer />
    </wrapper>,
  )
}
