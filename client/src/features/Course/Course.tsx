import styled from 'reshadow'

import { FC } from '~/utils/types'
import { CurriculumItem } from './CurriculumItem'
import { CourseLeadForm } from './CourseLeadForm'

export const Course: FC = () => {
  const courseCurriculum = [
    {
      title: 'Актуальность финансовой темы',
      body: (
        <LessonContent
          points={[
            'Основные понятия в области личных финансов',
            'Описание финансовых типов личности',
            'Выявление текущего состояния слушателя в отношении управления личными финансами',
          ]}
        />
      ),
    },
    {
      title: 'Финансовое богословие',
      body: (
        <LessonContent
          points={[
            'Что Ветхий Завет говорит о финансах?',
            'Практика долговых отношений Ветхого и Нового Заветов ',
            'Как можно применить принципы ветхозаветной десятины для новозаветного верующего?',
          ]}
        />
      ),
    },
    {
      title: 'Важность финансовой темы',
      body: (
        <LessonContent
          points={[
            'Почему отношение к финансам важно с точки зрения Писания? ',
            'Как отношение к материальным вопросам определяет духовное состояние человека?',
          ]}
        />
      ),
    },
    {
      title: 'Учение Христа о материальном',
      body: (
        <LessonContent
          points={[
            'Богатство в Библии и в современном мире',
            'Как учение Христа может помочь в отношении к личным финансам?',
          ]}
        />
      ),
    },
    {
      title: 'Учение Христа об инвестициях и имуществе',
      body: (
        <LessonContent
          points={[
            'Противоречат ли инвестиции библейскому учению о материальном?',
            'Отношения Христа к материальным накоплениям',
            'Библейская мотивация в финансовых инвестициях ',
          ]}
        />
      ),
    },
    {
      title: 'Поклонение Богу в материальной сфере',
      body: (
        <LessonContent
          points={[
            'Что такое сердце, око и маммона из нагорной проповеди Христа?',
            'Как занимаясь финансами не попасть под их влияние?',
            'Библейские ориентиры в финансовой тематике',
          ]}
        />
      ),
    },
    {
      title: 'Забота о материальном',
      body: (
        <LessonContent
          points={[
            'Что значит заботится о материальном?',
            'Как заботиться о финансах и не противоречить словам Христа? ',
            'Как практически заботиться о финансах ',
          ]}
        />
      ),
    },
    {
      title: 'Основы личных финансов',
      body: (
        <LessonContent
          points={[
            'Как практически управлять личными финансами?',
            'Финансовое планирование и целепологание',
            'Основы и практика личного бюджетирования',
          ]}
        />
      ),
    },
    {
      title: 'Финансы и пожертвования',
      body: (
        <LessonContent
          points={[
            'Как жертвовать и быть удовлетворенным?',
            'Разумные пожертвования',
            'Развитие качеств благотворителя',
          ]}
        />
      ),
    },
    {
      title: 'Финансы и кредит',
      body: (
        <LessonContent
          points={[
            'Как работать с долгами?',
            'Как отдать долги быстрее?',
            'Кому и на каких условиях предоставлять займ?',
          ]}
        />
      ),
    },
    {
      title: 'Потребление и кризис',
      body: (
        <LessonContent
          points={[
            'Основы разумного потребления',
            'Как потребление влияет на финансовое состояние?',
            'Как подготовиться к кризису?',
            'Какой бюджет нужен в кризис?',
          ]}
        />
      ),
    },
    {
      title: 'Ипотека и пенсия',
      body: (
        <LessonContent
          points={[
            'Что нужно знать ипотечному заемщику или какие вопросы не зададут в ипотечном банке?',
            'Как подготовиться к пенсии?',
            'Пенсионная стратегия для разных возрастов',
          ]}
        />
      ),
    },
  ]

  return styled`
    wrapper {
      display: flex;
      flex-direction: column;
      max-width: 950px;
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

    course-curriculum {
      padding: 60px 90px;
      padding-bottom: 100px;
      margin-bottom: 140px;

      border: 2px solid black;

      position: relative;
    }

    course-curriculum h2 {
      font-size: 45px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 55px;

      margin-bottom: 36px;
    }

    course-curriculum lessons-qty {
      font-size: 20px;
      font-family: 'Montserrat Alternates SemiBold';
      line-height: 24px;

      display: inline-block;
      padding: 8px 29px;
      margin-bottom: 58px;

      background-color: #FCB314;
    }

    registration-warning {
      min-width: 650px;
      padding: 20px 75px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 2px solid black;
      background-color: white;

      transform: translateX(-50%);
      position: absolute;
      left: 50%;
      bottom: -45px;
    }

    registration-warning span {
      width: 100%;
      display: inline-block;
      text-align: center;
    }

    registration-warning a {
      color: black;
      font-size: 15px;
      font-family: 'Mont SemiBold';
      text-decoration: none;

      padding: 13px 38px;

      border: 2px solid transparent;
      background-color: #f8b314;
      transition: all .2s ease-in-out;

      &:hover {
        border: 2px solid black;
        background-color: transparent;
      }
    }

    course-flow {
      margin-bottom: 150px;
    }

    course-flow h2 {
      font-size: 45px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 55px;

      margin-bottom: 64px;
    }

    course-flow ul {
      list-style: none;

      display: flex;
      justify-content: space-between;

      position: relative;

      &:before {
        content: '';

        width: 106px;
        height: 80%;

        position: absolute;
        top: -22px;
        left: 59%;
        z-index: -1;

        background-size: contain;
        background-image: url('/images/index-page-arrow-icon.svg');
        background-repeat: no-repeat;
      }

      &:after {
        content: '';

        width: 190px;
        height: 140%;

        position: absolute;
        top: 20px;
        left: 20%;
        z-index: -1;

        background-size: contain;
        background-image: url('/images/index-page-arrow-icon.svg');
        background-repeat: no-repeat;
      }
    }

    course-flow ul li {
      flex: 0 0 280px;
    }

    course-flow ul li span {
      font-size: 25px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 30px;

      display: inline-block;
      margin-bottom: 12px
    }

    course-flow ul li p {
      font-size: 15px;
      font-family: 'Mont';
      line-height: 19px;
    }

    course-registration {
      display: flex;
      margin-bottom: 100px;

      border: 2px solid black;
    }

    course-cost-info {
      flex: 0 0 50%;
      padding: 50px 75px;
      padding-left: 50px;

      background-color: #f8b314;
    }

    course-cost-info h2 {
      font-size: 45px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 47px;

      margin-bottom: 43px;
    }

    course-cost-info cost {
      font-family: 'Mont Bold';
      font-size: 65px;
      line-height: 68px;

      display: inline-block;
      margin-bottom: 45px;
    }

    sale span {
      font-size: 12px;
      font-family: 'Mont SemiBold';
      line-height: 13px;

      display: inline-block;
      margin-bottom: 7px;
    }

    cost-without-sale {
      font-size: 20px;
      font-family: 'Mont SemiBold';
      line-height: 21px;

      position: relative;

      display: block;

      &:after {
        content: '';

        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        left: -11px;

        width: 80px;
        height: 1px;

        background-color: black;
      }
    }

    program-closed {
      margin-bottom: 70px;
    }

    program-closed h2 {
      font-size: 45px;
      font-family: 'Montserrat Alternates Bold';
      line-height: 55px;

      margin-bottom: 10px;
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
            Вы получите пакет систематических знаний на тему финансов и
            управления ими
          </p>

          {/* <a href="#course-registration">Записаться</a> */}
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
            Обучался финансовому менеджменту в Северо-Западном Техническом
            Университете. Обладатель ряда профессиональных сертификатов, а также
            сертификатов по управлению личными финансами Университета Флориды,
            МакМастер Университета и Высшей школы экономики. Автор проекта MMBF.
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
              Формирование библейского взгляда на управление личными финансами,
              исходя из глубокой экзегезы мест Священного Писания, посвященных
              финансовой теме
            </p>
          </li>

          <li>
            <index>2</index>

            <span>Финансовое управление</span>

            <p>
              Теория управления финансами и практические упражнения на
              применение полученных знаний
            </p>
          </li>

          <li>
            <index>3</index>

            <span>
              Живое <br /> общение
            </span>

            <p>
              Возможность обсуждения пройденного материала в группе и
              консультации с преподавателем
            </p>
          </li>
        </ul>
      </course-achievement-section>

      <course-curriculum>
        <h2>Программа курса</h2>

        <lessons-qty as="span">12 уроков</lessons-qty>

        <ul style={{ listStyle: 'none' }}>
          {courseCurriculum.map((x, i) => (
            <CurriculumItem title={`${i + 1}. ${x.title}`}>
              <p>{x.body}</p>
            </CurriculumItem>
          ))}
        </ul>

        <registration-warning>
          <span>Начни обучение прямо сейчас!</span>

          {/* <a href="#course-registration">Записаться!</a> */}
        </registration-warning>
      </course-curriculum>

      <course-flow>
        <h2>Как проходит обучение</h2>

        <ul>
          <li>
            <span>Теория в классе</span>

            <p>
              Светские академические знания, Библейская экспозиция финансовой
              темы
            </p>
          </li>

          <li>
            <span>Домашние задания</span>

            <p>
              Практика лекционного материала, Задания для закрепления материала
            </p>
          </li>

          <li>
            <span>Личное общение</span>

            <p>Ответы на вопросы, Помощь в конкретных ситуациях</p>
          </li>
        </ul>
      </course-flow>

      {/* <course-registration id="course-registration">
        <course-cost-info>
          <h2>Стоимость курса</h2>

          <cost>19,99$</cost>

          <sale>
            <span>Стоимость без скидки</span>

            <cost-without-sale>39,99$</cost-without-sale>
          </sale>
        </course-cost-info>

        <CourseLeadForm />
      </course-registration> */}

      <program-closed>
        <h2>Набор закрыт ☹️</h2>

        <span>
          Запись на следующий поток будет в сентябре, <br /> следите за
          обновлениями в наших социальных сетях 🚀
        </span>
      </program-closed>
    </wrapper>,
  )
}

const LessonContent: FC<{ points: string[] }> = ({ points }) => {
  return styled`
    li {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  `(
    <ol>
      {points.map((x) => (
        <li>{x}</li>
      ))}
    </ol>,
  )
}
