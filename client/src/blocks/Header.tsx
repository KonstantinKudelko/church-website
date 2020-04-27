import styled from 'reshadow'

import { Link } from '~/blocks'

export const Header = () => {
  return styled()`
    ul {
      display: flex;
      flex-direction: row;
    }
    li:not(:last-child) {
      margin-right: 2rem;
    }
  `(
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>,
  )
}
