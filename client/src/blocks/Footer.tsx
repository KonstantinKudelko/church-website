import styled from 'reshadow'

import { FC } from '~/utils/types'

export const Footer: FC = () => {
  return styled()`
    footer {
      width: 100%;
      padding: 75px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;

      position: relative;

      background-color: #212121;
    }

    footer b {
      color: white;
      font-size: 24px;
      font-family: 'Mont Bold';
      text-transform: uppercase;

      margin-bottom: 60px;

      &:after {
        content: '';

        width: 600px;
        height: 1px;

        position: absolute;
        top: 130px;
        left: 50%;
        transform: translateX(-50%);

        background-color: #c4c4c4;
      }
    }

    footer social {
      display: flex;
    }

    footer social a {
      color: #c4c4c4;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 12px;

      display: flex;
      align-items: center;
    }

    footer social a img {
      margin-right: 5px;
    }

    footer social a {
      margin-right: 15px;
    }

    footer social a:last-child {
      margin-right: 0px;
    }
  `(
    <footer>
      <b>как есть</b>

      <social>
        <a href="https://www.instagram.com/ke.resource" target="_blank">
          <img alt="instagram_icon" src="/images/instagram-gray-icon.svg" />
          Instagram
        </a>

        <a href="https://t.me/keresource" target="_blank">
          <img alt="instagram_icon" src="/images/telegram-gray-icon.svg" />
          Telegram
        </a>

        <a
          href="https://www.youtube.com/channel/UCL5sPUI-Vf0QYmyhBOM2O0A"
          target="_blank"
        >
          <img alt="instagram_icon" src="/images/youtube-gray-icon.svg" />
          Youtube
        </a>
      </social>
    </footer>,
  )
}
