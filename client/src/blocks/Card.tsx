import styled from 'reshadow'

import { Link } from '~/blocks'
import { FC } from '~/utils/types'

export type CardProps = {
  className?: string
  title: string
  description: string
  image: { src: string; alt: string }
  tags: { title: string; href: string }[]
  href: string
}

export const Card: FC<CardProps> = ({
  className = '',
  title,
  description,
  image,
  tags,
  href,
}) => {
  return styled()`
    container {
      width: 15rem;
    }

    h3 {
      text-transform: uppercase;
    }

    img {
      width: 15rem;
      height: 15rem;
    }

    tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 1rem 0;
    }

    tags Link {
      text-transform: uppercase;
      font-weight: 100;
      line-height: 1.5rem;
    }
    tags Link + Link {
      margin-left: 1rem;
    }
  `(
    <container className={className}>
      <Link href={href}>
        <img src={image.src} alt={image.alt} />
      </Link>

      {tags.length !== 0 && (
        <tags>
          {tags.map(({ title, href }) => (
            <Link href={href}>{title}</Link>
          ))}
        </tags>
      )}
      <Link href={href}>
        <h3>{title}</h3>
      </Link>
      <p ref={(r) => ((r || { innerHTML: '' }).innerHTML = description)} />
    </container>,
  )
}
