import React, { FC, useState } from 'react'
import SliderButton from './SliderButton'

interface IProps {
  pictures: string[]
  alt: string
}

const Slider: FC<IProps> = ({ pictures, alt }: IProps) => {
  const [sliderAnimation, setSliderAnimation] = useState({
    index: 0,
    inProgress: false
  })

  const nextSlide = () => {
    if (sliderAnimation.inProgress) return
    let index = sliderAnimation.index
    if (sliderAnimation.index < pictures.length - 1) index++
    else index = 0
    setSliderAnimation({
      index: index,
      inProgress: true
    })
    setTimeout(() => setSliderAnimation({
      index: index,
      inProgress: false
    }), 400)
  }

  const previousSlide = () => {
    if (sliderAnimation.inProgress) return
    let index = sliderAnimation.index
    if (sliderAnimation.index > 0) index--
    else index = pictures.length - 1
    setSliderAnimation({
      index: index,
      inProgress: true
    })
    setTimeout(() => setSliderAnimation({
      index: index,
      inProgress: false
    }), 400)
  }

  return (
    <div className="slider">
      {
        pictures.map((picture, index) => sliderAnimation.index === index && (
          <div key={'slider-' + index} className="slider-picture">
            <img src={picture} alt={alt} />
          </div>
        ))
      }
      {<SliderButton direction="previous" goTo={previousSlide}/>}
      {<SliderButton direction="next" goTo={nextSlide}/>}
      <div className="slider-counter">{sliderAnimation.index + 1} / {pictures.length}</div>
  </div>
  )
}

export default Slider
