import React, { FC } from 'react'

interface IProps {
  cover: string
  title: string
}

const Test: FC<IProps> = ({ cover, title }: IProps) => {
  return (
    <div className="thumbnail">
        <img src={cover} alt={title} className="thumbnail-picture"/>
        <div className="darken-thumbnail"></div>
        <div className="thumbnail-title">{title}</div>
    </div>
  )
}

export default Test
