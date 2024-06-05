import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (

  <div>
  <header className="header stricky">
    <div className="container">
      <div className="logo pull-left">
        <a href="">
          <img src="img/resources/fitlogo.png" alt="Awesome Image" />
        </a>
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
                
                  <li><Link to="/schedule">Class Schedule</Link></li>
                  <li><Link to="/classes1">Class Details</Link></li>
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
    <Link to="/login"><h1 className='loginbutton1'>LOGIN</h1></Link>
  </header>

<div><img src="img/slider/1.jpg" alt width={1920} height={705} data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={1} /></div>
  
   {/* <section>
    <div id="slider1" className="rev_slider" data-version={5.0}>
      <ul>
        <li data-transition="parallaxtoleft" className='liii'>
          <img src="img/slider/1.jpg" alt width={1920} height={705} data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={1} />
          <div className="tp-caption sfl tp-resizeme fitlab-caption-h1" data-x="left" data-hoffset={0} data-y="top" data-voffset={308} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            it’s<br />gym time
          </div>
          <div className="tp-caption sfl tp-resizeme fitlab-caption-p" data-x="left" data-hoffset={0} data-y="top" data-voffset={545} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            When I feel tired, I just think about how great I will feel once I finally reach my goal.
          </div>
        </li>
        <li data-transition="parallaxtoleft">
          <img src="img/slider/2.jpg" alt width={1920} height={705} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={2} />
          <div className="tp-caption sfl tp-resizeme fitlab-caption-h2 text-center" data-x="center" data-hoffset={0} data-y="top" data-voffset={322} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            Be Stronger
          </div>
          <div className="tp-caption sfl tp-resizeme fitlab-caption-h1 text-center" data-x="center" data-hoffset={0} data-y="top" data-voffset={378} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            Doing HArd work
          </div>
          <div className="tp-caption sfl tp-resizeme fitlab-caption-p text-center" data-x="center" data-hoffset={0} data-y="top" data-voffset={514} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            When I feel tired, I just think about how great I will feel once I finally reach my goal.
          </div></li>
      </ul>
    </div> */}
   
   <section className="call-to-action">
    <div className="container">
      <div className="col-md-6">
        <div className="single-call-to-action left">
          <div className="title">
            <h3>Crossfit</h3>
            <h4>Extended your Strength</h4>
          </div>
          <p>You dream. You plan. You reach. There will be obstacles. <br />There will be doubters.There will be mistakes. But with hard work, with belief,<br /> with confidence and trust in yourself and those around you, there are no limits</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="single-call-to-action right" style={{backgroundImage: 'url(img/call-to-action/2.jpg), url(img/call-to-action/background-shape.png)'}}>
          <div className="content">
            <div className="title">
              <h3>Train</h3>
              <h4>Personal Coach</h4>
            </div>
            <p>The last three or four reps is what makes the muscle grow. <br />This area of pain divides a champion from someone who is not a champion.”</p>
            
          </div>
        </div>
      </div>
    </div>
  </section> 
   <section className="featured-section section-padding">
    <div className="container">
      <div className="col-md-5">
        <div className="featured-title">
          <span>WorkOuts</span>
          <h2>Arms &amp; Soulder Workout</h2>
        </div>
        <p>An arms and shoulders workout typically includes exercises that target the muscles of the upper arms (biceps, triceps) and the shoulders (deltoids). </p>
        <a href="#" className="read-more">see all workout</a>
        <div className="video-box">
          <img src="img/resources/video-box-bg.jpg" alt="Awesome Image" />
          <div className="overlay">
            <div className="box">
              <a href="https://www.youtube.com/watch?v=KssOT2QVg-M" className="video-fancybox"><img src="img/resources/video-play-btn.png" alt="Awesome Image" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="single-featured-box">
          <div className="number-box">
            01
          </div>
          <div className="content-box">
            <div className="box">
              <h3>CRUNCH - 3 set / 5 minutes</h3>
              <p> a crunch is a core exercise that primarily targets the rectus abdominis, also known as the "six-pack" muscles. It is a popular exercise for strengthening and toning the abdominal muscles.</p>
              <div className="bottom-box">
                <ul>
                  <li><span>100</span> Reps Done</li>
                  <li><span>/</span> <a data-toggle="modal" data-target=".booking-form" href="#">Join Now</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="img/featured-box/1.png" alt="Awesome Image" />
          </div>
        </div>
        <div className="single-featured-box mb0">
          <div className="number-box">
            02
          </div>
          <div className="content-box">
            <div className="box">
              <h3>Pull-up - 3 set / 5 minutes</h3>
              <p>A pull-up is a strength training exercise that primarily targets the muscles of the upper body, including the latissimus dorsi (lats), biceps, and trapezius.</p>
              <div className="bottom-box">
                <ul>
                  <li><span>60</span> Reps Done</li>
                  <li><span>/</span> <a data-toggle="modal" data-target=".booking-form" href="#">Join Now</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="img/featured-box/2.png" alt="Awesome Image" />
          </div>
        </div>
        <div className="single-featured-box">
          <div className="number-box">
            03
          </div>
          <div className="content-box">
            <div className="box">
              <h3>Bench Press - 3 set / 5 minutes</h3>
              <p>The bench press is a foundational strength training exercise that primarily targets the muscles of the chest (pectorals), shoulders (deltoids), and triceps.</p>
              <div className="bottom-box">
                <ul>
                  <li><span>90</span> Reps Done</li>
                  <li><span>/</span> <a data-toggle="modal" data-target=".booking-form" href="#">Join Now</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="img/featured-box/3.png" alt="Awesome Image" />
          </div>
        </div>
      </div>
    </div>
  </section> 
   <section className="our-popular-post section-padding gray-bg">
    <div className="container">
      <div className="section-title text-center">
        <h2>
          <span>Our populer Classes</span>
        </h2>
        <p>That's great! Offering popular classes can attract a wide range of clients and enhance the overall experience at your gym. Here are some popular types of gym classes you might consider providing, along with brief descriptions and potential benefits:</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="img/popular-class/1.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link href="/bodybuilding"><h3>BodyBuilding</h3></Link>
                <p>Andro Ruso</p>
              </div>
            </div>
            <p>Bodybuilding involves strength training and nutrition to develop muscularity, symmetry, and definition, often for aesthetic purposes or competitive bodybuilding events. </p>
            <Link to="/bodybuilding" className="read-more">Read More</Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="img/popular-class/2.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/martialarts"><h3>Martial Arts</h3></Link>
                <p>Shang-Chi</p>
              </div>
            </div>
            <p>Martial arts encompass various combat disciplines and self-defense techniques, emphasizing physical fitness, mental discipline, and self-improvement through rigorous training.</p>
            <Link to="/martialarts" className="read-more">Read More</Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="img/popular-class/3.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/yoga"><h3>Yoga</h3></Link>
                <p>Andro Ruso</p>
              </div>
            </div>
            <p>Yoga is a holistic practice originating from ancient India, combining physical postures, breathing exercises, meditation, and relaxation techniques for wellness.</p>
            <Link to="/yoga" className="read-more">Read More</Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="img/popular-class/4.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/cardio"><h3>Cardio</h3></Link>
                <p>Jos Peter</p>
              </div>
            </div>
            <p>Cardio, short for cardiovascular exercise, includes activities like running, cycling, and swimming, which elevate heart rate to improve endurance.</p>
            <Link to="/cardio" className="read-more">Read More</Link>
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
                <span>Coach Shame Doe</span>
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
            
              <Link  to="/payment" className="thm-btn">Choose Plan</Link>
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
                <span>Coach Shame Doe</span>
              </div>
              <div className="price-box pull-right">
                <span>$200</span>
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
              <Link to="/plan3" > <h3>Platinum Plan</h3> </Link>
                <span>Coach Shame Doe</span>
              </div>
              <div className="price-box pull-right">
                <span>$300</span>
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
              <Link to="/plan3" className="thm-btn">Choose Plan</Link>
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
                <p>female body trainer</p>
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
  )
}

export default Home