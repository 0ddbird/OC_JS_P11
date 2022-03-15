import React, { FC } from 'react'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Accordion from '../components/Accordion'
import Slider from '../components/Slider'
import { useParams, Navigate } from 'react-router-dom'
import { IAccomodations } from '../types'

interface IProps {
  accomodations: IAccomodations
}

const Accomodation: FC<IProps> = ({ accomodations }: IProps) => {
  const { id } = useParams()
  const accomodationDetails = accomodations.find(object => object.id === id)
  if (!accomodationDetails) {
    return (
        <Navigate to="/404"></Navigate>
    )
  }
  const { pictures, title, location, host, tags, rating, description, equipments } = accomodationDetails

  return (
        <>
            {
                <div className='accomodation'>
                    <Slider pictures={pictures} alt={title}/>
                    <div className="accomodation-overview">
                        <div className="overview-left">
                            <span className="accomodation-title">{title}</span>
                            <span className="accomodation-location">{location}</span>
                            <Tags tags={tags}/>
                        </div>

                        <div className="overview-right">
                            <div className="host-details">
                                <span className="host-name">{host.name}</span>
                                <img src={host.picture} alt={host.name + 'photo de profil'} className="host-picture"/>
                            </div>
                            <Rating rating={rating}/>
                        </div>
                    </div>
                    <div className="accomodation-details">
                        <Accordion header="Description" content={description} defaultOpen={true}/>
                        <Accordion header="Équipements" content={equipments} defaultOpen={true}/>
                    </div>
                </div>
            }
        </>
  )
}

export default Accomodation
