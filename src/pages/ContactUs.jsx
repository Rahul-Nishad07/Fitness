import React from 'react'
import { Link } from 'react-router-dom'


const ContactUs = () => {
  return (
    <>
    
   <div>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Contact Us</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
        <li><Link to="/">Home</Link></li>
          
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="contact-content section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="title">
            <h3>Our Address</h3>
            <p>
              "We're always here to connect with you! Reach out to us at Gurugram, where every inquiry finds a warm welcome and dedicated assistance."</p>
          </div>
          <ul className="contact-info">
            <li>
              <div className="icon-box">
                <i className="flaticon-pin" />
              </div>
              <div className="text-box">
                <h3>Address</h3>
                <p>Sector-17,Gurugram Haryana</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="flaticon-technology" />
              </div>
              <div className="text-box">
                <h3>Phone</h3>
                <p>6261255992</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="flaticon-interface" />
              </div>
              <div className="text-box">
                <h3>Email</h3>
                <p>fitbahubali@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-7">
          <img src="img/resources/contact-content.jpg" alt="Awesome Image" />
        </div>
      </div>
    </div>
  </section>
  <section className="map-and-form full-width">
    <div className="container-fluid">
      <div className="col-md-6">
        <div className="google-map" id="contact-page-google-map" data-map-lat="40.650002" data-map-lng="-73.949997" data-icon-path="img/resources/map-
			pin.png" data-map-title="Awesome Place" data-map-zoom={12} />
      </div>
      <div className="col-md-6">
        <form action="" className="contact-form">
          <div className="title">
            <h3>Get In Touch</h3>
          </div>
          <div className="row">
            <div className="form-grp col-md-6">
              <input type="text" name="name" placeholder="Your Name" />
            </div>
            <div className="form-grp col-md-6">
              <input type="text" name="email" placeholder="Your Email" />
            </div>
            <div className="form-grp col-md-12">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-grp col-md-12">
              <textarea name="message" placeholder="Your Message" defaultValue={""} />
              <button type="submit" className="thm-btn borderd">Send Request</button>
            </div>
          </div>
        </form>
      </div>
    </div>	
  </section>
  <section className="our-bmi">
    <div className="container">
      <div className="section-title">
        <h2>
          <span>Know your BMI</span>
        </h2>				
      </div>
      <div className="clearfix">
        <form action="#" className="clearfix">
          <div className="form-grp">
            <select name="gender" className="select-menu">
              <option value>Gender</option>
              <option value>Male</option>
              <option value>Female</option>
            </select>
          </div>
          <div className="form-grp">
            <input type="text" id="weight" placeholder="Weight In KG" />
          </div>
          <div className="form-grp">
            <input type="text" id="height" placeholder="Height In Inch" />
          </div>
          <div className="form-grp submit">
            <button type="submit" id="calculate">calculator</button>
          </div>					
          <span>=</span>
          <span className="result" id="result">00.0</span>
        </form>
      </div>
    </div>
  </section>
  <div className="modal contact-page fade booking-form" id="booking-form" tabIndex={-1} role="dialog" aria-labelledby="booking-form">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h3 className="main-title"><i className="flaticon-interface" />Join us Today!!! </h3>
          <form className="contact-form search-form-box" action="">
            <h3 className="title"><i className="fa fa-user" />Basic Information</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="name" placeholder="Enter your First name*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="name" placeholder="Enter your Last name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="email" placeholder="Enter your email*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your phone" />
                </div>
              </div>							
              <div className="col-md-6">
                <div className="form-grp">
                  <select className="select-menu">
                    <option value="#">Gender</option>
                    <option value="#">Male</option>
                    <option value="#">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" placeholder="Enter your Date of Birth" className="date-picker" />
                </div>
              </div>			
              <div className="clear" />							
            </div>
            <h3 className="title"><i className="fa fa-male" />Physical Information</h3>								
            <div className="row">								
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your Weight In KG" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your height In Inch" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <select className="select-menu">
                    <option value="#">Course Name</option>
                    <option value="#">Course Name</option>
                    <option value="#">Course Name</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your Age" />
                </div>
              </div>
            </div>
            <h3 className="title"><i className="fa fa-suitcase" />Personal Information</h3>								
            <div className="row">
              <div className="col-md-12">
                <div className="form-grp">
                  <input type="text" placeholder="Enter Your Address" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-grp has-textarea">
                  <textarea name="message" placeholder="Enter Your message" defaultValue={""} />
                </div>
                <button type="submit" className="pull-right thm-btn">JOIN US</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ContactUs