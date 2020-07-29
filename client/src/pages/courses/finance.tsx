import styled from 'reshadow'

import { FC } from '~/utils/types'

export const Finance: FC = () => {
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
      <span>Finance course</span>
    </container>,
  )
}

export default Finance
