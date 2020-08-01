import styled from 'reshadow'
import axios from 'axios'
import * as Yup from 'yup'
import { withFormik, FormikProps } from 'formik'

import { FC } from '~/utils/types'

type LeadFormFields = {
  name: string
  phone: string
  email: string
}

const CourseLeadLayout: FC<FormikProps<LeadFormFields>> = ({
  status,
  errors,
  values,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  return styled`
    wrapper {
      width: 100%;
      display: flex;
      flex: 0 0 50%;
      flex-direction: column;
      justify-content: center;
    }

    success-message {
      font-size: 22px;
      text-align: center;
      font-family: 'Montserrat Alternates SemiBold';
    }

    course-form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0px 80px;
    }

    course-form fields-wrapper {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }

    fields-wrapper input-field {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
    }

    input-field label {
      font-family: 'Montserrat Alternates SemiBold';
      font-size: 15px;
      line-height: 16px;

      margin-bottom: 7px;
    }

    input-field input {
      height: 30px;
      padding-left: 15px;

      border: 1px solid #C4C4C4;
    }

    input-field error {
      color: #D20000;
      font-size: 12px;

      margin-top: 2px;
    }

    course-form button-wrapper {
      display: flex;
      justify-content: center;
    }

    course-form button {
      color: black;
      font-size: 15px;
      font-family: 'Mont SemiBold';
      text-decoration: none;

      padding: 8px 38px;

      cursor: pointer;
      border: 2px solid transparent;
      background-color: #f8b314;
      transition: all .2s ease-in-out;

      &:hover {
        border: 2px solid black;
        background-color: transparent;
      }
    }

    course-start-info {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
    }

    course-start-info span {
      font-size: 12px;
    }

    course-start-info b {
      font-size: 12px;
      font-family: 'Mont SemiBold';
    }
  `(
    <wrapper>
      {status && status.isLeadCreated ? (
        <success-message>Ваша заявка принята!</success-message>
      ) : (
        <course-form as="form" onSubmit={handleSubmit}>
          <course-start-info>
            <span>
              Старт курса: <b>21 сентября</b>
            </span>

            <span>
              Осталось: <b>10 мест</b>
            </span>
          </course-start-info>

          <fields-wrapper>
            <input-field>
              <label htmlFor="name">Имя</label>

              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              {touched.name && errors.name && <error>Введите имя</error>}
            </input-field>

            <input-field>
              <label htmlFor="phone">Телефон</label>

              <input
                id="phone"
                name="phone"
                type="text"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              {touched.phone && errors.phone && <error>Введите телефон</error>}
            </input-field>

            <input-field>
              <label htmlFor="email">Электронная почта</label>

              <input
                id="email"
                name="email"
                type="text"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              {touched.email && errors.email && (
                <error>Введите электронную почту</error>
              )}
            </input-field>
          </fields-wrapper>

          <button-wrapper>
            <button type="submit">Записаться</button>
          </button-wrapper>
        </course-form>
      )}
    </wrapper>,
  )
}

export const CourseLeadForm = withFormik({
  mapPropsToValues: (): LeadFormFields => ({
    name: '',
    phone: '',
    email: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
  }),

  handleSubmit: async (values, fb) => {
    try {
      await axios.post(
        'https://api.airtable.com/v0/appOyYmAXsjeLUYsx/leads',
        {
          records: [{ fields: values }],
        },
        {
          headers: {
            Authorization: 'Bearer keyuIWkDrxCGaSnNR',
          },
        },
      )

      fb.setStatus({ isLeadCreated: true })
    } catch (e) {
      console.log('Lead error', e)
    }
  },
})(CourseLeadLayout)
