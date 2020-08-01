import styled from 'reshadow'
import { useState } from 'preact/hooks'

import { FC } from '~/utils/types'

export const CurriculumItem: FC<{
  title: string
  children: React.ReactElement
}> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false)

  return styled`
    curriculum-item {
      &:last-child accordion-title {
        margin-bottom: 0px;
      }
    }

    accordion-title {
      margin-bottom: 10px;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: ${isOpen ? 'none' : '2px solid #C4C4C4'};
    }

    accordion-title span {
      font-size: 25px;
      font-family: 'Montserrat Alternates SemiBold';
      line-height: 30px;
    }

    accordion-title accordion-toggle {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 25px;
      font-family: 'Mont SemiBold';

      cursor: pointer;
      border-radius: 50%;
      background-color: #f8b314;
    }

    accordion-body {
      margin: 20px 0px;
      padding-bottom: 20px;

      border-bottom: 2px solid #C4C4C4;
    }
  `(
    <curriculum-item as="li">
      <accordion-title>
        <span>{title}</span>

        <accordion-toggle onClick={() => setOpen(!isOpen)}>
          {isOpen ? '-' : '+'}
        </accordion-toggle>
      </accordion-title>

      {isOpen && <accordion-body>{children}</accordion-body>}
    </curriculum-item>,
  )
}
