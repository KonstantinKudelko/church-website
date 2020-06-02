import styled from 'reshadow'

import { FC } from '~/utils/types'

export const NotFound: FC = () => {
  return styled()`
    container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `(
    <container>
      <h2>404</h2>
    </container>,
  )
}
