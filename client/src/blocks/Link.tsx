import NextLink, { LinkProps } from 'next/link'

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
}) => (
  <NextLink {...{ href, as, replace, scroll, shallow, passHref, prefetch }}>
    <a {...props} />
  </NextLink>
)
