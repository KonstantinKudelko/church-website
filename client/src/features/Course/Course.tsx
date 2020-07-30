import styled from 'reshadow'

import { FC } from '~/utils/types'

export const Course: FC = () => {
  return styled`
    wrapper {
      display: flex;
      flex-direction: column;
      max-width: 900px;
      margin: 0 auto;
    }

    hero-section {
      margin: 100px auto;
      display: flex;

      border: 2px solid black;
    }

    course-info {
      padding: 46px 60px;
      flex: 0 0 50%;
    }

    course-info span {
      font-size: 15px;
      font-family: 'Montserrat Alternates';
      font-weight: 500;

      display: inline-block;
      margin-bottom: 38px;
    }

    course-info h2 {
      font-size: 55px;
      font-family: 'Mont Bold';
      line-height: 90%;

      margin-bottom: 10px;
    }

    course-info p {
      color: black;
      font-size: 15px;
      line-height: 105.3%;
      font-family: 'Mont';

      margin-bottom: 60px;
    }

    course-info a {
      color: black;
      font-size: 20px;
      font-family: 'Mont SemiBold';
      line-height: 85px;
      text-decoration: none;

      padding: 25px 85px;

      position: relative;

      border: 2px solid transparent;
      background-color: #f8b314;
      transition: all .2s ease-in-out;

      &:hover {
        border: 2px solid black;
        background-color: transparent;
      }
    }

    course-image {
      display: flex;
      flex: 0 0 50%;
      align-items: center;
      justify-content: center;

      background-color: #f8b314;
    }

    course-image img {
      max-width: 100%;
    }

    course-duration-section span {
      font-size: 35px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 43px;

      display: inline-block;
      margin-bottom: 40px;
    }

    course-duration-section ul {
      display: flex;

      list-style: none;
    }

    course-duration-section li {
      position: relative;

      font-size: 25px;
      font-family: 'Montserrat Alternates SemiBold';
      line-height: 30px;

      padding-left: 15px;
      margin-left: 30px;

      &:first-child {
        margin-left: 0px;
      }


      &:after {
        content: '';

        width: 8px;
        height: 8px;

        background-color: #f8b314;

        position: absolute;
        left: -5px;
        top: 12px;
      }
    }

    author-course-section {
      display: flex;
      margin: 100px auto;

      background-color: #f8b314;
    }

    author-information {
      flex: 0 0 50%;
      padding: 50px 60px;
    }

    author-information span {
      font-size: 15px;
      font-family: Montserrat Alternates;
      line-height: 16px;

      display: inline-block;
      margin-bottom: 40px;
    }

    author-information h2 {
      font-size: 60px;
      font-family: 'Mont Bold';
      line-height: 54px;

      margin-bottom: 25px;
    }

    author-information p {
      font-family: 'Mont SemiBold';
      font-size: 15px;
      line-height: 16px;

      margin-bottom: 38px;

      &:last-child {
        margin-bottom: 0px;
      }
    }

    author-avatar {
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    author-avatar img {
      width: 350px;
      height: 350px;
    }

    course-achievement-section {
      margin-bottom: 100px;
    }

    course-achievement-section h2 {
      font-size: 45px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 55px;

      margin-bottom: 70px;
    }

    course-achievement-section ul {
      list-style: none;

      display: flex;
      justify-content: space-between;
    }

    course-achievement-section ul li {
      flex: 0 0 250px;

      position: relative;
    }

    course-achievement-section ul li index {
      color: #FCB314;
      font-size: 144px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 152px;

      position: absolute;
      top: -70px;
      left: 0px;
      z-index: -1;
    }

    course-achievement-section ul li span {
      font-size: 25px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 25px;

      display: inline-block;
      margin-bottom: 30px;
    }

    course-achievement-section ul li p {
      font-size: 15px;
      font-family: 'Mont';
      line-height: 16px;
    }
  `(
    <wrapper>
      <hero-section>
        <course-info>
          <span>Онлайн курс</span>

          <h2>
            Личные <br /> финансы
          </h2>

          <p>
            Вы получитие пакет систиматических знаний на тему финансов и их
            управления.
          </p>

          <a href="#">Записаться</a>
        </course-info>

        <course-image>
          <img
            src="/images/finance-course-hero-illustration.svg"
            alt="course_illustration"
          />
        </course-image>
      </hero-section>

      <course-duration-section>
        <span>Длительность курса</span>

        <ul>
          <li>3 недели</li>

          <li>12 уроков</li>

          <li>более 12 часов обучающего материала</li>
        </ul>
      </course-duration-section>

      <author-course-section>
        <author-information>
          <span>Преподаватель</span>

          <h2>
            Роман <br /> Шемпель
          </h2>

          <p>
            Обучался финансовому менеджменту в Север-Западном Техническом
            Университете. Обладатель ряда профессиональных сертификатов, среди
            которых курсы по управлению финансами Университета Флориды и Высшей
            школы экономики, а также Стокгольмской школы экономики и бизнеса в
            Санкт-Петербурге. Автор проекта MMBF.
          </p>

          <p>Служитель церкви «Вифания», г. Москва. Женат, воспитывает сына.</p>
        </author-information>

        <author-avatar>
          <img src="/images/finance-author-avatar.jpg" alt="author_avatar" />
        </author-avatar>
      </author-course-section>

      <course-achievement-section>
        <h2>Что вы получите?</h2>

        <ul>
          <li>
            <index>1</index>

            <span>Богословие финансов</span>

            <p>
              В этом блоке мы поговорим о том, что Библия говорит на тему
              финансов, пожертвований, долгов и займов,денежных отношений между
              людьми.
            </p>
          </li>

          <li>
            <index>2</index>

            <span>Финансовое управление</span>

            <p>
              В этом блоке мы поговорим о том, что Библия говорит на тему
              финансов, пожертвований, долгов и займов,денежных отношений между
              людьми.
            </p>
          </li>

          <li>
            <index>3</index>

            <span>Ответы на вопросы</span>

            <p>
              В этом блоке мы поговорим о том, что Библия говорит на тему
              финансов, пожертвований, долгов и займов,денежных отношений между
              людьми.
            </p>
          </li>
        </ul>
      </course-achievement-section>
    </wrapper>,
  )
}
