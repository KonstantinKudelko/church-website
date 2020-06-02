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
      color: unset;
      text-decoration: none;
    }
  `(
    <NextLink {...{ href, as, replace, scroll, shallow, passHref, prefetch }}>
      <a {...props} />
    </NextLink>,
  )
