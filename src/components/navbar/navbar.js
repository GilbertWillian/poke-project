import React from 'react'
import './navbar.css'
import Logo from '../../assets/img/pokeball.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navBar">
        <img className="logo" src={Logo} alt="Logo pokeball"/>
        <a className="logoText" href="/">PokéDex</a>

        <ul className="navbar-nav">
          <li>
            <a className="nav-item" href="/">Lista de Pokémons</a>
          </li>
          <li>
            <a className="nav-item" href="/">Counters</a>
          </li>
          <li>
            <a className="nav-item" href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar