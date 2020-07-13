import styled from 'reshadow'

import { FC } from '~/utils/types'
import { Link } from '~/blocks'

export const Main: FC<> = ({ className }) => {
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
        text-transform: uppercase;
    }
    header Link {
        margin: 0 16px;
    }
    header social {
        margin-left: auto;
        margin-right: 36px;
    }
    header social a + a {
        margin-left: 36px;
    }
    last-article {
        display: flex;
        max-width: var(--max-width);
        height: 400px;
        margin: 100px auto;
        border: 2px solid black;
    }
    last-article column {
        justify-content: center;
        padding: 48px;
    }
    last-article h2 {
        font-size: 48px;
    }
    last-article Link {
        padding: 16px 48px;
        border: 2px solid black;
        width: fit-content;
    }
    last-article background {
        width: 400px;
        height: 400px;
        /* background-image: url(""); */
        background-color: white;
    }
    top-chart {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 calc((100vw - var(--max-width)) / 2);
        background-color: white;
    }
    top-chart column {
        justify-content: center;
    }
    top-chart h2 {
        font-size: 48px;
    }
    top-chart arrow {
        color: var(--main);
        font-size: 148px;
        text-align: end;
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
          <a>инст</a>
          <a>тлг</a>
          <a>ю</a>
        </social>
      </header>
      <last-article as="article">
        <column>
          <small>Последняя статья:</small>
          <h2>Когда боишься потерять контроль</h2>
          <p>Мы гораздо больше...</p>
          <Link href="/articles/-1">Читать</Link>
        </column>
        <background></background>
      </last-article>
      <top-chart as="article">
        <column>
          <h2>Самое интересное:</h2>
          <p>Читайте подборку самых интересных статей</p>
          <arrow>➡</arrow>
        </column>
        <ul></ul>
      </top-chart>
    </main>,
  )
}
