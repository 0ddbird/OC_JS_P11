import React, { FC } from 'react'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

interface IProps {
  goTo: () => void
  direction: string
}

const SliderButton: FC<IProps> = ({ goTo, direction }: IProps) => {
  return (
    <button onClick={goTo} className={direction === 'next' ? 'slider-button next' : 'slider-button previous'}>
        <img src={direction === 'next' ? ArrowRight : ArrowLeft }
        alt={direction === 'next' ? '&#60;' : '&#62;'}/>
    </button>
  )
}

export default SliderButton
