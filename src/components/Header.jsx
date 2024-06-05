import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>  <header className="header stricky">
    <div className="container">
      <div className="logo pull-left">
        <Link to="/">
          <img src="img/resources/fitlogo.png" alt="Awesome Image" />
        </Link>
      </div>
      <div className="header-right pull-right">
        <div className="top-info">
          <ul className="list-inline contact">
            <li><i className="flaticon-interface" /> fitbahubali@mail.com</li>
            <li><i className="flaticon-technology" /> <span>6261255992</span></li>
          </ul>
          <ul className="social list-inline">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>
        <nav className="mainmenu-holder">
          <div className="nav-header">
            <ul className="navigation">
              <li className="dropdown">
              <Link to="/">Home</Link>
                <ul className="submenu">
                
                </ul>
              </li>
              <li className="dropdown">
                <Link to="about">About Us</Link>
                <ul className="submenu">
                  <li><Link to="/trainer">Our Trainer</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="classes">Classes</Link>
                <ul className="submenu">
                
                  <li><Link to="schedule">Class Schedule</Link></li>
                  <li><Link to="bodybuilding">Class Details</Link></li>
                </ul>
              </li>
             
              <li>
              <Link to="contact">Contact</Link>
                </li>
            </ul>
          </div>
          <div className="nav-footer">
            <ul>
              <li>
                <button><i className="fa fa-search" /></button>
                <ul className="search-box">
                  <li>
                    <form action="#">
                      <input type="text" placeholder="Search for something..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </li>
                </ul>
              </li>
              <li><button className="menu-expander"><i className="fa fa-list-ul" /></button></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header></div>
  )
}

export default Header