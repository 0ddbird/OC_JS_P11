import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div className="notfound">
        <div className="notfound-wrapper">
            <span className="four-o-four">404</span>
            <span className="four-o-four-details"> Oups! La page que vous demandez n&apos;existe pas.</span>
            <NavLink to="/"
            className="back-to-home">
            <span>Retourner sur la page d&apos;accueil</span>
            </NavLink>
        </div>
    </div>)
}

export default NotFound
