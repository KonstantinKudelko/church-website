import styled from 'reshadow'

import { FC } from '~/utils/types'

export const About: FC = () => {
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
      <span>In God we trust</span>
    </container>,
  )
}

export default About
