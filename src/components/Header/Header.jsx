import React from 'react'
import Logo from '../../assets/download.png';
import './Header.css';
const Header = () => {
  return (
    <section id="header">
      <div className="header_details">
        <img className="logo" src={Logo} alt="Logo"  />
      <h3>ALGO.IO</h3>
    </div>
    </section>
    
  )
}

export default Header