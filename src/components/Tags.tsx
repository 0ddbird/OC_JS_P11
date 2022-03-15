import React, { FC } from 'react'

interface IProps {
  tags: string[]
}

const Tags: FC<IProps> = ({ tags }: IProps) => {
  return (
    <div className="tags">
        {
            tags.map(tag => {
              return (
                    <div className='tag' key={tag}>{tag}</div>
              )
            }
            )
        }
    </div>
  )
}

export default Tags
