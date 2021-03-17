import NextLink, { LinkProps } from 'next/link'

import { theme } from "~/ui";

export const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...props
}: LinkProps & JSX.IntrinsicElements['a']) => (
  <NextLink {...{ href, as, replace, scroll, shallow, passHref, prefetch }}>
    <a style={{ color: theme.colors.text, textDecoration: 'none' }} {...props} />
  </NextLink>
);
