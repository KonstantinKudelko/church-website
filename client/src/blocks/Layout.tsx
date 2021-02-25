import styled from 'reshadow'

import { FC, Node } from '~/utils/types'
import { Header } from '~/blocks'

export const Layout: FC<{
  children: Node
}> = ({ children }) => {
  return styled()`
    wrapper {
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
      <Header />

      <container>{children}</container>
    </wrapper>,
  )
}
