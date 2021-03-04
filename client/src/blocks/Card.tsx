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
  return (
    <div className={className}>
      <Link href={href}>
        <img src={image.src} alt={image.alt} />
      </Link>

      {tags.length !== 0 && (
        <div>
          {tags.map(({ title, href }) => (
            <Link href={href}>{title}</Link>
          ))}
        </div>
      )}

      <Link href={href}>
        <h3>{title}</h3>
      </Link>
    </div>
  )
}
