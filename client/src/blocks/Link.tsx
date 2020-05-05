import NextLink, { LinkProps } from 'next/link'
import styled from 'reshadow'

import { FC } from '~/utils/types'

export const Link: FC<LinkProps & JSX.IntrinsicElements['a']> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...props
}) =>
  styled()`
    a {
      border-bottom: 0.25rem solid black;
      text-decoration: none;
    }
  `(
    <NextLink {...{ href, as, replace, scroll, shallow, passHref, prefetch }}>
      <a {...props} />
    </NextLink>,
  )
