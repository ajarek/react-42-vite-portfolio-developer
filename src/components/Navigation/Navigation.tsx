import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className={'nav'}>
      <a
        className={'link'}
        href='mailto:ajarek@poczta.onet.pl'
      >
        <div className='logo'>
          <img
            src='/public/my-logo.png'
            alt='logo'
          />@jarek
        </div>
      </a>
      <div className={'wrapper'}>
        <NavLink
          className={'link'}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={'link'}
          to='/projects'
        >
          Projects
        </NavLink>
        <NavLink
          className={'link'}
          to='/Contact'
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation
