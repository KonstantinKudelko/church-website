import styled from 'reshadow'
import { h, FunctionalComponent as FC } from 'preact'
import { Link } from '.'

type ContentType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'b'
  | 'i'
  | 'p'
  | 'note'
  | 'text'
  | 'url'
  | 'img'
type ContentBlock =
  | {
      type: Exclude<ContentType, 'url' | 'img'>
      body: string | Content
      /** attributes */
      meta?: Record<string, string>
    }
  | {
      type: 'url'
      body: string | Content
      meta: {
        href: string
      }
    }
  | {
      type: 'img'
      body: string | Content
      meta: {
        alt: string
        src: string
      }
    }
type Content = ContentBlock[]

const CONTENT: Content = [
  {
    type: 'h1',
    body: 'От Иоанна святое благовествование 16:33 SYNO',
  },
  {
    type: 'p',
    body: [
      {
        type: 'text',
        body:
          'Сие сказал Я вам, чтобы вы имели во Мне мир. В мире будете иметь скорбь; но мужайтесь: ',
      },
      {
        type: 'b',
        body: 'Я победил мир',
      },
      {
        type: 'text',
        body: '.',
      },
    ],
  },
  {
    type: 'note',
    body: [
      {
        type: 'url',
        body: 'Читать всю главу',
        meta: {
          href: 'https://www.bible.com/ru/bible/400/JHN.16.SYNO',
        },
      },
    ],
  },
]

export const Title1: FC = (props) => {
  return styled()`
    h1 {
      font-size: 4rem;
    }
  `(<h1 {...props} />)
}
export const Title2: FC = (props) => {
  return styled()`
    h2 {
      font-size: 3rem;
    }
  `(<h2 {...props} />)
}
export const Title3: FC = (props) => {
  return styled()`
    h3 {
      font-size: 2rem;
    }
  `(<h3 {...props} />)
}
export const Title4: FC = (props) => {
  return styled()`
    h4 {
      font-size: 1rem;
    }
  `(<h4 {...props} />)
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
export const Paragraph: FC = (props) => {
  return styled()`
    p {
      text-align: center;
    }
  `(<p {...props} />)
}
export const Note: FC = (props) => {
  return styled()`
    blockquote {
      display: flex;
      flex-direction: column;
      align-items: center;
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

export const COMPONENT_BY_TYPE: Record<ContentType, FC<any>> = {
  h1: Title1,
  h2: Title2,
  h3: Title3,
  h4: Title4,
  b: Strong,
  i: Italic,
  p: Paragraph,
  note: Note,
  text: Text,
  url: Link,
  img: Img,
}

export const Content = ({ content }: { content: ContentBlock }) => {
  const { type, body, meta } = content
  const Component = COMPONENT_BY_TYPE[type]

  return styled()``(
    <Component {...meta}>
      {Array.isArray(body) ? body.map((el) => <Content content={el} />) : body}
    </Component>,
  )
}

export const Article = () => {
  return styled()`
    container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `(
    <container as="div">
      {CONTENT.map((el) => (
        <Content content={el} />
      ))}
    </container>,
  )
}
