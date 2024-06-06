import React from 'react'
import esglogo from '../../../images/esglogo.svg'

const Logo = () => {
  return (
    <div className="logo">
        <div className="logo-icon">
            <img src={esglogo} alt="esglogo" className="logo-actual" />
        </div>
    </div>
  )
}

export default Logo