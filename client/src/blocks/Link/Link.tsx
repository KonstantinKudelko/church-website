import { h } from 'preact'
import NextLink from 'next/link'
import { styled } from 'goober'

// FIXME: here a bug with `NextLink` - application is stack in some infinity loop
export const Link = styled<any>(props => <a {...props} />)`
  border-bottom: 0.25rem solid black;
  text-decoration: none;
`
