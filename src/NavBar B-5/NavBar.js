import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'
        id='navbar'
        data-spy='affix'
        data-offset-top='197'>
        
        <div className='container'>
          <Link className="navbar-brand" id="navbarbrand" to="/">
            Business
          </Link>
          <button
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#myNavbar'
            aria-controls='myNavbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
          <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='myNavbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/services'} className='nav-link'>Services</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contactus'} className='nav-link'>ContactUs</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/about'} className='nav-link'>About</Link>
              </li>
              </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default NavBar