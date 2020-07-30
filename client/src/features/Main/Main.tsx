import axios from 'axios'
import styled from 'reshadow'
import { GetStaticProps } from 'next'

import { FC } from '~/utils/types'
import { Link } from '~/blocks'
import { ROUTES } from '~/utils/const'
import { Footer } from '~/blocks/Footer'
import { Article } from '../types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await axios.get<Article[]>(
    `${ROUTES.api}/articles`,
  )

  return {
    props: {
      articles,
    },
  }
}

export const Main: FC<{ articles: Article[] }> = ({ articles, className }) => {
  const lastArticle =
    articles &&
    articles.reduce((accumulator, article) =>
      accumulator.created_at > article.created_at ? accumulator : article,
    )

  return styled`
    wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    column, main {
        display: flex;
        flex-direction: column;
    }
    main {
        flex: 1;
        align-items: center;
        background-color: var(--main);
    }
    header {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 80px;
        background-color: #f8b314;
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
    social a + a {
        margin-left: 36px;
    }
    last-article {
        display: flex;
        max-width: 900px;
        margin: 100px auto;

        border: 2px solid black;
        cursor: pointer;

        position: relative;
        z-index: 10;
    }
    last-article white-block {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;

      height: 100%;
      width: 0;
      margin-left: 100%;

      transition: all .4s ease-in-out;
      background-color: white;
    }
    last-article:hover white-block {
      margin-left: 0;
      width: 100%;
    }
    last-article column {
        justify-content: center;
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
    /*last-article background {
        width: 420px;
        background-color: white;
    }*/
    top-chart {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 500px;
        padding: 0 calc((100vw - var(--max-width)) / 2);
        background-color: white;
    }
    top-chart column {
        margin-right: 125px;
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
    top-chart column img {
      max-width: 100%;
      margin-left: 150px;

      animation: bounce .8s infinite alternate;
    }
    @keyframes bounce {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(-15px);
      }
    }
    top-chart ul {
        height: 500px;
        padding: 10px;
        display: grid;
        grid-template-columns: 250px 250px;
        grid-gap: 20px;

        position: relative;
        top: 50px;

        overflow: scroll;

        list-style: none;

        &::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background: transparent;
        }
    }

    top-chart ul li {
      width: 250px;
      height: 250px;

      cursor: pointer;

      transition: all .2s ease;

      &:hover {
        opacity: .7;
        transform: translateY(-5px);
      }
    }

    top-chart ul li img {
      object-fit: cover;
      max-width: 100%;
    }

    course {
      width: 100%;
      padding-top: 15%;
      padding-left: 10%;
      padding-bottom: 15%;

      position: relative;

      background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
        ),
      url(/images/finance-course-bg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }

    course small {
      color: white;
      font-size: 20px;
      font-family: 'Montserrat Alternates';
      line-height: 24px;

      display: inline-block;
      margin-bottom: 80px;
    }

    course h2 {
      color: white;
      font-family: 'Montserrat Alternates Bold';
      font-size: 65px;
      line-height: 79px;

      margin-bottom: 20px;
    }

    course p {
      color: white;
      font-size: 20px;
      line-height: 21px;

      width: 30%;
      margin-bottom: 120px;
    }

    course Link {
      color: white;
      font-size: 20px;
      line-height: 21px;

      padding: 22px 65px;

      border: 1px solid white;
    }
  `(
    <wrapper>
      <header>
        <b>как есть</b>

        <Link href="/courses/finance">Курсы</Link>
        <Link href="/articles">Журнал</Link>

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
      <main
        style={{ '--main': '#f8b314', '--max-width': '1200px' } as any}
        className={className}
      >
        <last-article as="article">
          <column>
            <small>Последняя статья:</small>

            {lastArticle && <h2>{lastArticle.title}</h2>}

            <p>
              Мы гораздо больше похожи на Вавилон, чем хотелось бы думать. Может
              мы и не плавим золото и серебро, чтобы создать себе статуи богов,
              но мы стараемся управлять своими деньгами ради стабильности и
              власти.
            </p>

            {lastArticle && (
              <Link href={`/articles/${lastArticle.id}`}>Читать</Link>
            )}

            <white-block />
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

          <ul>
            {articles &&
              articles.map((x, i) => (
                <li key={i}>
                  <Link href={`/articles/${x.id}`}>
                    <img
                      src={`${ROUTES.api}${x.cover?.url}`}
                      alt="article_img"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </top-chart>

        <course>
          <small>Онлайн курс</small>

          <h2>Личные финансы</h2>

          <p>
            Вы получитие пакет систиматических знаний на тему финансов и их
            управления.
          </p>

          <Link href="/courses/finance">Подробнее&nbsp;&nbsp;{'>'}</Link>
        </course>
      </main>
      <Footer />
    </wrapper>,
  )
}
