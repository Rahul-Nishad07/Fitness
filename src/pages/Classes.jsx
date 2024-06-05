import React from 'react'
import { Link } from 'react-router-dom'


const Classes = () => {
  return (
    <>

<section class="inner-banner">
		<div class="container">
			<div class="title pull-left">
				<h3>Our CLass</h3>
			</div>
			<div class="breadcumb pull-right">
				<ul>
        <li><Link to="/">Home</Link></li>
         
				</ul>
			</div>
		</div>
	</section>

  {/* <section className="our-popular-post section-padding popular-post-page mixit-gallery"> */}
  <section className='classescards'>
    <div className="container">			
     
      <div className="row">
        <div className="col-md-4 mix building">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/pexels-victorfreitas-841130.jpg" alt="Awesome Image" />
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
                <h3>BodyBuilding</h3>
                <p>Jenna Fitwell</p>
              </div>
            </div>
            <p>Bodybuilding involves weightlifting and nutrition to increase muscle size, strength, and definition, often for aesthetic purposes or competitive bodybuilding events.</p>
            <li><Link to="/bodybuilding" className="read-more">Read More</Link></li>
          </div>
        </div>
        <div className="col-md-4 mix fat-loss">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/martialArts.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix" >
              <div className="title pull-left">
                <h3>Martial Arts</h3>
                <p>Alex Strongman</p>
              </div>
            </div>
            <p>Martial arts encompass various combat disciplines and self-defense techniques, emphasizing physical fitness, discipline, and mental focus through rigorous training.</p>
            <li><Link to="/martialarts" className="read-more">Read More</Link></li>
          </div>
        </div>
        <div className="col-md-4 mix boxing">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/crossfit.jpg" alt="Awesome Image" />
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
                <h3>CrossFit</h3>
                <p>Jake Flexington</p>
              </div>
            </div>
            <p>CrossFit is a high-intensity fitness program combining functional movements from various disciplines, emphasizing strength, conditioning.</p>
            <li><Link to="/crossfit" className="read-more">Read More</Link></li>
          </div>
        </div>
        <div className="col-md-4 mix building">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/pexels-amin-sujan-529242-1375883.jpg" alt="Awesome Image" />
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
                <h3>Yoga</h3>
                <p>Sarah</p>
              </div>
            </div>
            <p>Yoga is a holistic practice originating from ancient India, combining physical postures, breath work, and meditation for wellness and relaxation.</p>
            <li><Link to="/yoga" className="read-more">Read More</Link></li>
          </div>
        </div>
        <div className="col-md-4 mix fat-loss">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/cardio.jpg" alt="Awesome Image" />
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
                <h3>Fitness</h3>
                <p>David</p>
              </div>
            </div>
            <p>Fitness encompasses physical health, strength, endurance, flexibility, and overall well-being achieved through regular exercise, proper nutrition, and healthy.</p>
            <li><Link to="/fitness" className="read-more">Read More</Link></li>
          </div>
        </div>
        <div className="col-md-4 mix muscle">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/martialartsiiiii.jpg" alt="Awesome Image" />
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
                <h3>Karate</h3>
                <p>Shang Chi</p>
              </div>
            </div>
            <p>Karate is a martial art originating from Japan, focusing on striking techniques using hands, elbows, knees, and feet for self-defense.</p>
            <li><Link to="/karate" className="read-more">Read More</Link></li>
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
  {/* Modal */}
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



    </>
  )
}

export default Classes;