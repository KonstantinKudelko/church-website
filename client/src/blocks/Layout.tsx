import styled from 'reshadow'

import { FC, Node } from '~/utils/types'
import { HeaderProps, Header } from '~/blocks'

export const Layout: FC<{
  header: HeaderProps
  main: Node
}> = ({ header, main }) => {
  return styled()`
    wrapper {
      display: flex;
      flex-direction: column;
    }

    container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      margin: 0 36px;
    }

    main {
      flex-grow: 1;
    }
  `(
    <wrapper>
      <Header {...header} />
      <container>
        <main>{main}</main>
      </container>
      ,<footer></footer>
    </wrapper>,
  )
}
