import styled from 'reshadow'

import { Link } from '~/blocks'
import { FC } from '~/utils/types'

export type HeaderProps = {
  title: string
  nav: { title: string; href: string }[]
}

export const Header: FC<HeaderProps> = ({ title, nav }) => {
  return styled()`
    header {
      display: flex;
      align-items: center;
      width: 100vw;
      height: 80px;
    }
    header b {
      margin: 0 36px;
      font-size: 24px;
      font-family: 'Mont Bold';
      text-transform: uppercase;
    }
    navigation-link {
      padding: 0 15px;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in-out;

      line-height: 80px;

      &:hover {
        background-color: #f8b314;
      }
    }
    header social {
      display: flex;
      margin-left: auto;
      margin-right: 36px;
    }
    header social a {
      display: flex;
    }
    social a + a {
      margin-left: 36px;
    }
  `(
    <header>
      <Link href="/">
        <b>как есть</b>
      </Link>

      <Link href="/courses/finance">
        <navigation-link>Курсы</navigation-link>
      </Link>
      <Link href="/articles">
        <navigation-link>Журнал</navigation-link>
      </Link>

      <social>
        <a href="https://www.instagram.com/ke.resource" target="_blank">
          <img alt="instagram_icon" src="/images/instagram-black-icon.svg" />
        </a>

        <a href="https://t.me/keresource" target="_blank">
          <img alt="instagram_icon" src="/images/telegram-black-icon.svg" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCL5sPUI-Vf0QYmyhBOM2O0A"
          target="_blank"
        >
          <img alt="instagram_icon" src="/images/youtube-black-icon.svg" />
        </a>
      </social>
    </header>,
  )
}
