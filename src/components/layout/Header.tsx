import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import kasaLogo from '../../assets/kasa_logo.svg'

const Header: FC = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={kasaLogo} className="kasa-logo" alt="Logo Kasa"/>
      </NavLink>
      <nav className='nav'>
            <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'navlink-active' : 'navlink'}>
              Accueil
            </NavLink>

            <NavLink
            to='/about'
            className={({ isActive }) => isActive ? 'navlink-active' : 'navlink'}>
              A propos
            </NavLink>
      </nav>
    </div>
  )
}

export default Header
