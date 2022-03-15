import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Thumbnail from '../components/Thumbnail'
import homeBackground from '../assets/home_background.png'
import { IAccomodations } from '../types'

interface IProps {
  accomodations: IAccomodations
}

const Home: FC<IProps> = ({ accomodations }: IProps) => {
  return (
    <div className="home">
      <div className="banner-container">
          <div className="banner">
              <img src={homeBackground} alt='home background' />
              <div className="darken-banner"></div>
              <span>Chez vous, partout et ailleurs</span>
          </div>
      </div>

      <div className="results-wrapper">
        <div className="results-container">
            {
                accomodations.map((object) => {
                  return (
                        <NavLink to={'/accomodation/' + object.id} className="accomodation-link" key={object.id}>
                            <Thumbnail cover={object.cover} title={object.title}/>
                        </NavLink>
                  )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Home
