import React from 'react'
import './styles/navbar.css'
import logo from '../assets/images/logo_mflix.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="left-container">
                <div className="logo">
                  <img src={logo} alt="MM" height={'30px'} />
                </div>
                <div className="links">
                    <NavLink exact activeClassName='active-link' className='nav-links' to='/'>Home</NavLink>
                    <NavLink activeClassName='active-link' className='nav-links' to='/trending'>Trending</NavLink>
                    <NavLink activeClassName='active-link' className='nav-links' to='/watchlist'>Watchlist</NavLink>
                </div>
            </div>
            <div className='profile-icon'>
              <NavLink activeClassName='active-link' className='nav-links' to='/profile'>Profile</NavLink>
            </div>
        </div>
    </div>
  )
}
