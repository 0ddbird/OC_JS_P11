import React, { FC } from 'react'
import kasaLogo from '../../assets/kasa_logo_white.svg'

const Footer: FC = () => {
  return (
    <div className="footer">
        <img src={kasaLogo} alt="Kasa logo"/>
        <span>&copy; 2020 Kasa. All rights reserved</span>
    </div>
  )
}

export default Footer
