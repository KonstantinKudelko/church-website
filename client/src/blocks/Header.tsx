import styled from 'reshadow'

import { Link } from '~/blocks'
import { FC } from '~/utils/types'

export const Header: FC = () => {
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

      <Link href="/articles">
        <navigation-link>Журнал</navigation-link>
      </Link>

      <social>
        <a href="https://www.instagram.com/rozhdestvo_youth/" target="_blank">
          <img alt="instagram_icon" src="/images/instagram-icon.svg" />
        </a>

        <a href="https://t.me/christmas_youth" target="_blank">
          <img alt="instagram_icon" src="/images/telegram-icon.svg" />
        </a>
      </social>
    </header>,
  )
}
