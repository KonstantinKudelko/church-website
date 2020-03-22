import { h } from 'preact'
import { styled } from 'goober'

import { Link } from '~/blocks'

export const NavList = styled('ul')`
  display: flex;
  flex-direction: row;
`

export const NavEl = styled('li')`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`

export const Header = () => {
  return (
    <nav>
      <NavList>
        <NavEl>
          <Link href="/">Home</Link>
        </NavEl>
        <NavEl>
          <Link href="articles">Articles</Link>
        </NavEl>
      </NavList>
    </nav>
  )
}
