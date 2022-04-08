import React from 'react'
import Logo from "../assets/logo-a-white.png"
const Navbar = () => {
  return (
    <nav>
        <div className="nav-center">
        <a href="/"> <img src={Logo} alt="logo" /> </a>
        </div>
    </nav>
  )
}

export default Navbar