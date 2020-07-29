import styled from 'reshadow'

import { FC } from '~/utils/types'
import { ROUTES } from '~/utils/const'

type ContentBlock =
  | {
      type: 'paragraph'
      data: {
        text: string
      }
    }
  | {
      type: 'header'
      data: {
        text: string
        level: 1 | 2 | 3 | 4
      }
    }
  | {
      type: 'quote'
      data: { alignment: string; caption: string; text: string }
    }
  | {
      type: 'delimiter'
      data: {}
    }
  | {
      type: 'image'
      data: {
        caption: string
        file: { url: string }
        stretched: boolean
        withBackground: boolean
        withBorder: boolean
      }
    }
type Content = ContentBlock[]

export const Title1: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h1 {
      font-size: 3rem;
    }
  `(<h1 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />)
}
export const Title2: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h2 {
      font-size: 2rem;
    }
  `(<h2 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />)
}
export const Title3: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h3 {
      font-size: 1.5rem;
    }
  `(<h3 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />)
}
export const Title4: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h4 {
      font-size: 1rem;
    }
  `(<h4 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />)
}
export const Text: FC = (props) => {
  return styled()`
    span {
    }
  `(<span {...props} />)
}
export const Strong: FC = (props) => {
  return styled()`
    strong {
    }
  `(<strong {...props} />)
}
export const Italic: FC = (props) => {
  return styled()`
    i {
    }
  `(<i {...props} />)
}
export const Delimiter: FC = (props) => {
  return styled()`
    hr {
      width: 8rem;
      height: 1px;
      margin: 3rem auto;
      border: none;
      background: black;
    }
  `(<hr {...props} />)
}
export const Paragraph: FC<{ data: { text: string } }> = ({
  data: { text },
}) => {
  return styled()`
    p {
      width: 40rem;
      max-width: 90vw;
      margin: 1rem 0;
      line-height: 1.5rem;
      font-size: 1.25rem;
      font-weight: 100;
    }
  `(<p ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />)
}
export const Note: FC<{
  data: {
    alignment: string
    caption: string
    text: string
  }
}> = ({ data: { alignment, caption, text } }) => {
  return styled()`
    blockquote {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 4rem 0;
      font-weight: 500;
      font-size: 2rem;
      text-transform: uppercase;
    }

    blockquote:before,
    blockquote:after {
      content: '';
      width: 8rem;
      height: 1px;
      background: black;
    }
    blockquote:before {
      margin-bottom: 3rem;
    }
    blockquote:after {
      margin-top: 3rem;
    }
  `(<blockquote>{text}</blockquote>)
}
export const Img: FC<{
  data: {
    caption: string
    file: { url: string }
    stretched: boolean
    withBackground: boolean
    withBorder: boolean
  }
}> = ({
  data: {
    caption,
    file: { url },
    stretched,
    withBackground,
    withBorder,
  },
}) => {
  return styled()`
    img {
    }
  `(
    <img
      src={`${ROUTES.api}${url}`}
      alt={caption}
      style={{ maxWidth: '80%', maxHeight: '30rem', margin: 'auto' }}
    />,
  )
}

export const getComponent = (block: ContentBlock): FC<{ data: any }> => {
  if (block.type === 'paragraph') {
    return Paragraph
  }
  if (block.type === 'header') {
    return {
      1: Title1,
      2: Title2,
      3: Title3,
      4: Title4,
    }[block.data.level]
  }
  if (block.type === 'quote') {
    return Note
  }
  if (block.type === 'image') {
    return Img
  }
  if (block.type === 'delimiter') {
    return Delimiter
  }

  return () => null
}

export type ArticleProps = {
  title: string
  cover?: string
  blocks: ContentBlock[]
}
export const Article: FC<ArticleProps> = ({ title, cover, blocks }) => {
  return styled()`
    container {
      display: flex;
      flex-direction: column;
      width: 40rem;
      max-width: 90vw;
      margin: 2rem auto;
    }

    @media (orientation: portrait) {
      container {
        margin: 2rem auto;
      }
    }
  `(
    <container>
      <Title1 data={{ text: title }} />
      {blocks.map((block) => {
        const Component = getComponent(block)

        return <Component data={block.data} />
      })}
    </container>,
  )
}
