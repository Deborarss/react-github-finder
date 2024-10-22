import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title, icon }) => {
  return(
    <nav className='navbar bg-primary'> 
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Início</Link>
        </li>
        <li>
          <Link to='/sobre'>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar