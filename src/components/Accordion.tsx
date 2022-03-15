import React, { FC, useState } from 'react'
import arrow from '../assets/arrow.svg'

interface IProps {
  content: string | string[]
  header: string
  defaultOpen: boolean
}

const Accordion: FC<IProps> = ({ content, header, defaultOpen }: IProps) => {
  const [isOpen, setState] = useState(defaultOpen)

  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content

  return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setState(!isOpen) }>
                <span className="accordion-title">{header}</span>
                <img src={arrow} alt="arrow" className="accordion-arrow" onClick={() => setState(!isOpen) }/>
            </div>
            <div className={isOpen ? 'accordion-content' : 'accordion-content__hidden'}>
            {
                displayedContent.map(item => {
                  return (
                        <span key={item + '_key'}>
                            {item}
                            <br />
                        </span>
                  )
                })
            }
            </div>
        </div>
  )
}

export default Accordion
