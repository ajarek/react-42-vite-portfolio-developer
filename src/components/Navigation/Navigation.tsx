import React, { useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
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
      <ul className={!isOpen?'wrapper':'wrapper navbar-none'}>
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
      </ul>
      <div className="hamburger">
      <Hamburger
      size={30}
      duration={0.3}
      distance="md"
      color={isOpen?"#f15e50":'#808080'}
      easing="ease-in"
      rounded 
      label="Show menu"
      onToggle={toggled => {
        setOpen(true)
        if (toggled) {
           // open a menu
        } else {
          setOpen(false)
        }
      }}
      />
      </div>
    </nav>
  )
}

export default Navigation
