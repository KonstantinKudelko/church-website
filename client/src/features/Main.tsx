import styled from 'reshadow'

import { FC } from '~/utils/types'
import { Link } from '~/blocks'

export const Main: FC = ({ className }) => {
  return styled`
    column, main {
        display: flex;
        flex-direction: column;
    }
    main {
        align-items: center;
        background-color: var(--main);
    }
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
    header Link {
        height: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
        transition: all .2s ease-in-out;

        &:hover {
          background-color: white;
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
    header social a + a {
        margin-left: 36px;
    }
    last-article {
        display: flex;
        max-width: var(--max-width);
        margin: 100px auto;
        border: 2px solid black;
    }
    last-article column {
        justify-content: center;
        max-width: 650px;
        padding: 48px;
    }
    last-article small {
      margin-bottom: 25px;

      font-family: 'Montserrat Alternates';
    }
    last-article h2 {
        font-size: 55px;
        font-family: 'Mont Bold';
        line-height: 49px;
        letter-spacing: 0.005em;

        margin-bottom: 16px;
    }
    last-article p {
      font-size: 15px;
      line-height: 16px;

      margin-bottom: 27px;
    }
    last-article Link {
        padding: 16px 48px;
        border: 2px solid black;
        width: fit-content;

        font-family: 'Mont SemiBold';
    }
    last-article background {
        width: 420px;
        background-color: white;
    }
    top-chart {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 500px;
        padding: 0 calc((100vw - var(--max-width)) / 2);
        background-color: white;
    }
    top-chart column {
        justify-content: center;
    }
    top-chart h2 {
        font-size: 55px;
        font-family: 'Montserrat Alternates Bold';
        line-height: 47px;

        margin-bottom: 35px;
    }
    top-chart p {
        font-family: 'Mont SemiBold';
        font-size: 15px;
        line-height: 15px;
    }
    top-chart img {
      max-width: 100%;
      margin-left: 150px;
    }
    top-chart ul {
        width: 50%;
    }
  `(
    <main
      className={className}
      style={{ '--main': '#f8b314', '--max-width': '1200px' } as any}
    >
      <header>
        <b>как есть</b>

        <Link href="/">Курсы</Link>
        <Link href="/">Журнал</Link>

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
      </header>

      <last-article as="article">
        <column>
          <small>Последняя статья:</small>

          <h2>Когда боишься потерять контроль</h2>

          <p>
            Мы гораздо больше похожи на Вавилон, чем хотелось бы думать. Может
            мы и не плавим золото и серебро, чтобы создать себе статуи богов, но
            мы стараемся управлять своими деньгами ради стабильности и власти.
          </p>

          <Link href="/articles/-1">Читать</Link>
        </column>

        <background></background>
      </last-article>

      <top-chart as="article">
        <column>
          <h2>
            Самое <br /> интересное:
          </h2>
          <p>
            Читайте подборку самых <br /> интересных статей
          </p>
          <img
            src="/images/index-page-arrow-icon.svg"
            alt="most-interesting-articles"
          />
        </column>
        <ul></ul>
      </top-chart>
    </main>,
  )
}
