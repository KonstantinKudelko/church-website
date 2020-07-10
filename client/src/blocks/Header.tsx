import styled from 'reshadow'

import { Link } from '~/blocks'
import { FC } from '~/utils/types'

export type HeaderProps = {
  title: string
  nav: { title: string; href: string }[]
}

export const Header: FC<HeaderProps> = ({ title, nav }) => {
  return styled()`
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-weight: bold;
      text-transform: uppercase;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 0;
      list-style-type: none;
    }
    li {
      font-weight: 100;
      text-transform: uppercase;
    }
    li + li {
      margin-left: 3rem;
    }
  `(
    <header>
      <Link href="/"><h1>{title}</h1></Link>
      {/* <nav>
        <ul>
          {nav.map(({ title, href }) => (
            <li>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>,
  )
}
