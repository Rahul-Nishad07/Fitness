import React from 'react'

import { Link } from 'react-router-dom'

const About = () => {
  return (
<>
    {/* <Header /> */}
  <div>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>About us</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="about-content-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video-box">
            <img src="img/resources/about-video-box.jpg" alt="Awesome Image" />
            <div className="overlay">
              <div className="box">
                <a href="https://www.youtube.com/watch?v=KssOT2QVg-M" className="video-fancybox"><img src="img/resources/video-play-btn.png" alt="Awesome Image" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-content-text">
            <h3>Who We are</h3>
            <p>Welcome to FITBAHUBALI, where fitness meets inspiration! At FITBAHUBALI, we're not just a gym; we're a community dedicated to helping you reach your health and wellness goals. With state-of-the-art facilities, expert trainers, and a diverse range of classes and programs, we're here to support you every step of the way on your fitness journey.</p>
          </div>
        </div>
      </div>
      <div className="about-call-to-action">
        <div className="row">
          <div className="col-md-4">
            <div className="single-top-call-to-action">
              <div className="icon-box">
                <i className="flaticon-people" />
              </div>
              <div className="text-box">								
                <h3>01. Pick Your Trainer</h3>
                <p>Meet our exceptional team: dedicated, passionate.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-top-call-to-action">
              <div className="icon-box">
                <i className="flaticon-gym" />
              </div>
              <div className="text-box">								
                <h3>02. Pick Your Workout</h3>
                <p>Choose your path to fitness</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-top-call-to-action no-divider">
              <div className="icon-box">
                <i className="flaticon-exercise" />
              </div>
              <div className="text-box">								
                <h3>03. Start Gym</h3>
                <p>Begin your fitness journey today. Unlock your potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="our-packages section-padding">
    <div className="container">
      <div className="section-title text-center">
        <h2>
          <span>Our Packages</span>
        </h2>
        <p>That sounds like a great way to offer your clients options tailored to their fitness needs! What kind of packages are you considering?</p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="single-our-package">
            <div className="img-box">
              <img src="img/our-package/1.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/payment"><h3>Basic Plan</h3></Link>
                <span>2 Trainers </span>
              </div>
              <div className="price-box pull-right">
                <span>$100</span>
              </div>
            </div>
            <div className="list-box">
              <ul>
                <li><i className="fa fa-check" /> 4 Days a Week</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Diet Plan Included</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Morning  Baches Only</li>
              </ul>
            </div>
            <div className="button-box clearfix">
              {/* <a href="#" class="thm-btn">Learn More</a> */}
              <Link to="/payment" className="thm-btn">Choose Plan</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 ">
          <div className="single-our-package">
            <div className="img-box">
              <img src="img/our-package/2.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/plan2"><h3>Premium Plan</h3></Link>
                <span>3 Trainers</span>
              </div>
              <div className="price-box pull-right">
                <span>$200</span>/M
              </div>
            </div>
            <div className="list-box">
              <ul>
                <li><i className="fa fa-check" /> 6 Days a Week</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Diet Plan Included</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Morning &amp; Evening Batches</li>
              </ul>
            </div>
            <div className="button-box clearfix">
              <Link to="/plan2" className="thm-btn">Choose Plan</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
          <div className="single-our-package">
            <div className="img-box">
              <img src="img/our-package/3.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
            <Link to="/plan3"><h3>Platinum Plan</h3></Link>
                <span>7 Trainers</span>
              </div>
              <div className="price-box pull-right">
                <span>$300</span>/M
              </div>
            </div>
            <div className="list-box">
              <ul>
                <li><i className="fa fa-check" /> 7 Days a Week</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Diet Plan Included</li>
                <li><i className="fa fa-check" /> Dedicated Trainer Alocated</li>
                <li><i className="fa fa-check" /> Morning &amp; Evening Batches</li>
              </ul>
            </div>
            <div className="button-box clearfix">
              <Link to="/plan2" className="thm-btn">Choose Plan</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="our-trainer section-padding">
    <div className="container">
      <div className="section-title text-center">
        <h2>
          <span>Our Trainer</span>
        </h2>				
      </div>
      <div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/1.png" alt />
              <div className="content-box text-center">
                <h3>Max Irons</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/2.png" alt />
              <div className="content-box text-center">
                <h3>Jenna Fitwell</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/3.png" alt />
              <div className="content-box text-center">
                <h3>Alex Strongman</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/4.png" alt />
              <div className="content-box text-center">
                <h3>Lily Power</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/1.png" alt />
              <div className="content-box text-center">
                <h3>Jacov Stain</h3>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/2.png" alt />
              <div className="content-box text-center">
                <h3>Jake Flexington</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/3.png" alt />
              <div className="content-box text-center">
                <h3>Sarah Muscleton</h3>
                {/* <p>female body trainer</p> */}
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/4.png" alt />
              <div className="content-box text-center">
                <h3>David Gymson</h3>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/1.png" alt />
              <div className="content-box text-center">
                <h3>Jacov Stain</h3>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
          <form className="contact-form search-form-box" action="https://html.tonatheme.com/2020/fitlab/inc/sendemail.php">
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

export default About