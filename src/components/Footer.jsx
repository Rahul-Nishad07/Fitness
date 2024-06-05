import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div><footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="footer-widget">
            <Link to="/">
              <img src="img/resources/fitlogo.png" alt="Awesome Image" />
            </Link>
            <p>Welcome to Peak Performance Gym. Modern equipment, expert trainers, group classes, and a<br /> supportive community to elevate your fitness journey.</p>
            <ul className="social list-inline">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-pinterest" /></a></li>
              <li><a href="#"><i className="fa fa-vimeo" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="footer-widget quick-link-widget">
            <div className="title">
              <h3>Quick Links</h3>
            </div>
            <ul className="cateogry-link">
              <li><Link to="/classes">Classes</Link></li>
              {/* <li><a href="faq.html">Faq</a></li> */}
              <li><Link to="/trainer">Our Trainer</Link></li>
              <li><a>Daily workout </a></li>
              {/* <li><a href="shop.html">Products</a></li> */}
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="footer-widget latest-post-widget">
            <div className="title">
              <h3>About Us</h3>
            </div>
            <ul className="post-link">
              <li>
                <Link to="/about">About Our Website </Link>
                </li><a href>
              </a></ul><a href>
            </a></div><a href>
          </a></div><a href>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget">
              <div className="title">
                <h3>Address</h3>
              </div>
              <ul className="address-list">
                <li>
                  <div className="icon-box">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="text-box">
                    <p>Sector-17,Gurugram Haryana</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="text-box">
                    <p>6261255992</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="text-box">
                    <p>fitbahubali@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer-widget">
              <div className="title">
                <h3>Subcribe</h3>
              </div>
              <form action="#">
                <input type="text" placeholder="Enter your email here" />
                <button type="submit"><i className="fa fa-paper-plane" /></button>
              </form>
            </div>
          </div>
        </a></div><a href>			
      </a></div><a href>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center bottom-text">
                © 2024 Fit Bahubali. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </a></footer></div>
  )
}

export default Footer