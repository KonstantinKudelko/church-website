import styled from 'reshadow'

import { Link } from '~/blocks'
import { FC } from '~/utils/types'

export type CardProps = {
  className?: string
  title: string
  image: { src: string; alt: string }
  tags: { title: string; href: string }[]
  href: string
}

export const Card: FC<CardProps> = ({
  className = '',
  title,
  image,
  tags,
  href,
}) => {
  return styled()`
    container {
      width: 100%;

      transition: all 0.2s ease;

      &:hover {
        opacity: 0.7;
        transform: translateY(-5px);
      }
    }

    container Link {
      display: block;
    }

    h3 {
      font-size: 18px;
      font-family: 'Mont Bold';

      margin-top: 10px;
    }

    img {
      width: 100%;
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
    </container>,
  )
}
