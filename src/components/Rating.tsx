import React, { FC } from 'react'
import emptyStarSvg from '../assets/emptyStar.svg'
import fullStarSvg from '../assets/fullStar.svg'

interface IProps {
  rating: string
}
const Rating: FC<IProps> = ({ rating }:IProps) => {
  const stars = []
  const rate = parseInt(rating)

  for (let i = 0; i < 5; i++) {
    if (i < rate) stars.push(<img src={fullStarSvg} alt="full-star" key={i} />)
    else stars.push(<img src={emptyStarSvg} alt="empty-star" key={i}/>)
  }

  return (
        <div className="rating">{stars}</div>
  )
}

export default Rating
