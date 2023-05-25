import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#header' className='footer__logo'>BOTBOY</a>
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='https://github.com/AnandDubey1711' target='__blank'>Porfolio</a></li>
        <li><a href='https://github.com/AnandDubey1711' target='__blank'>Github</a></li>
      </ul> 
      <div className='footer__copyright'>
        <small>&copy; BOTBOY WORKS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer