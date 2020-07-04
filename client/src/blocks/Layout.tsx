import styled from 'reshadow'

import { FC, Node } from '~/utils/types'
import { HeaderProps, Header } from '~/blocks'

export const Layout: FC<{
  header: HeaderProps
  main: Node
}> = ({ header, main }) => {
  return styled()`
    container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      max-width: 90vw;
      margin: auto;  
    }
    main {
      flex-grow: 1;
    }
  `(
    <container>
      <Header {...header} />
      <main>{main}</main>
      <footer></footer>
    </container>,
  )
}
