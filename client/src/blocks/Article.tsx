import styled from 'reshadow'

import { FC } from '~/utils/types'

type ContentType = 'header' | 'paragraph' | 'quote' | 'img'
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
type Content = ContentBlock[]

export const Title1: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h1 {
      font-size: 4rem;
    }
  `(<h1 ref={(r) => (r!.innerHTML = text)} />)
}
export const Title2: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h2 {
      font-size: 3rem;
    }
  `(<h2 ref={(r) => (r!.innerHTML = text)} />)
}
export const Title3: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h3 {
      font-size: 2rem;
    }
  `(<h3 ref={(r) => (r!.innerHTML = text)} />)
}
export const Title4: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return styled()`
    h4 {
      font-size: 1rem;
    }
  `(<h4 ref={(r) => (r!.innerHTML = text)} />)
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
export const Paragraph: FC<{ data: { text: string } }> = ({
  data: { text },
}) => {
  return styled()`
    p {
      width: 40rem;
      margin: 1rem 0;
      line-height: 1.5rem;
      font-size: 1.25rem;
      font-weight: 100;
    }
  `(<p ref={(r) => (r!.innerHTML = text)} />)
}
export const Note: FC = (props) => {
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
  `(<blockquote {...props} />)
}
export const Img: FC = (props) => {
  return styled()`
    img {
    }
  `(<img {...props} />)
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
  return () => null
}

export type ArticleProps = { blocks: ContentBlock[] }
export const Article: FC<ArticleProps> = ({ blocks }) => {
  return styled()`
    container {
      display: flex;
      flex-direction: column;
      width: 40rem;
      margin: 5rem auto;
    }
  `(
    <container>
      {blocks.map((block) => {
        const Component = getComponent(block)

        return <Component data={block.data} />
      })}
    </container>,
  )
}
