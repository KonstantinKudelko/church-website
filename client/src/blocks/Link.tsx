import { h, FunctionalComponent } from 'preact'
import NextLink, { LinkProps } from 'next/link'
import styled from 'reshadow'

export const Link: FunctionalComponent<
  LinkProps & h.JSX.HTMLAttributes<HTMLAnchorElement>
> = ({ href, as, replace, scroll, shallow, passHref, prefetch, ...props }) =>
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
