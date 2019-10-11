import React from 'react'
import logo from '../../static/logos/logo.png'
import '../../styles/Navbar.css'

function NavBar() {
  return (
    <div className="navbar-container">
      <div  className="navbar" >
        <div className="nav-left">
          <img src={logo} id="logo" alt={"utthanLogo"}/>
        </div>
        <div className="nav-right">
          <a className="nav-link" href={"https://www.google.com"}>RECRUITMENT</a>
          <a className="nav-link" href={"https://www.google.com"}>ABOUT US</a>
          <a className="nav-link" href={"https://www.google.com"}>PORTFOLIO</a>
          <a className="nav-link" href={"https://www.google.com"}>CONTACT US</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
