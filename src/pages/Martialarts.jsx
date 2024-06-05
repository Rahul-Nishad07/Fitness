import React from 'react'
import { Link } from 'react-router-dom'

const Martialarts = () => {
  return (
    
	<div>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Martial Arts</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="our-popular-post section-padding popular-post-page single-class-content">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
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
            <div className="title-box clearfix">
              <div className="title pull-left">
                <h3>Martial Arts</h3>
                <p>Shang-Chi</p>
              </div>
            </div>
            <p>Martial arts are structured systems of combat practices and self-defense techniques, emphasizing physical fitness, discipline, and mental focus, often rooted in cultural traditions.</p>
            <div className="description-box">
              <h3 className="sub-title">Description</h3>
              <p>Martial arts are structured systems of combat practices designed for self-defense, physical fitness, competition, and mental discipline. Rooted in ancient traditions, martial arts encompass a diverse range of styles and philosophies, each with its unique techniques and cultural heritage.</p>
            </div>
            <div className="work-benifits">
              <h3 className="sub-title">Workout benefits</h3>
              <ul>
                <li><i className="fa fa-angle-right" /> Physical Fitness: Martial arts promote strength, flexibility, endurance, and agility.</li>
                <li><i className="fa fa-angle-right" /> Self-Defense Skills: Practical techniques for protecting oneself confidently.
                </li>
                <li><i className="fa fa-angle-right" /> Mental Discipline: Enhances focus, self-control, and emotional regulation skills.</li>
                <li><i className="fa fa-angle-right" /> Personal Growth: Cultivates confidence, resilience, respect, and camaraderie.</li>
              </ul>
            </div>
          </div>
          {/* <div class="related-popular-class">
              <h3 class="main-title">Releted Classes</h3>
              <div class="owl-carousel owl-theme">
                  <div class="item">
                      <div class="single-popular-post">
                          <div class="img-box">
                              <img src="img/popular-class/1.jpg" alt="Awesome Image"/>
                              <div class="overlay">
                                  <div class="box">
                                      <div class="bottom">
                                          <h3>Duration - 50 Minutes</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="title-box clearfix">
                              <div class="title pull-left">
                                  <h3>BodyBuildin Program</h3>
                                  <p>Coach Shame Doe</p>
                              </div>
                              <div class="more-box pull-right">
                                  <a href="#">+</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="single-popular-post">
                          <div class="img-box">
                              <img src="img/popular-class/2.jpg" alt="Awesome Image"/>
                              <div class="overlay">
                                  <div class="box">
                                      <div class="bottom">
                                          <h3>Duration - 50 Minutes</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="title-box clearfix">
                              <div class="title pull-left">
                                  <h3>BodyBuildin Program</h3>
                                  <p>Coach Shame Doe</p>
                              </div>
                              <div class="more-box pull-right">
                                  <a href="#">+</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>					 */}
        </div>
        <div className="col-md-4">
          <div className="single-sidebar-wrapper">
            <div className="single-sidebar subscribe-form">
              <form action="#">
                <h3 className="title text-center">Subcribe</h3>
                <div className="form-grp">
                  <input type="text" placeholder="First Name*" />									
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Last Name" />									
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Email*" />									
                </div>
                <span>* Required Field</span>
                <div className="form-grp">
                  <button type="submit">Subcribe</button>
                </div>
              </form>
            </div>
            <div className="single-sidebar team-widget">
              <div className="sidebar-title">
                <h3>Trainer</h3>
              </div>
              <ul>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-1.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Jacov Stain</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-2.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Under taker</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-3.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Roman Reign</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="single-sidebar categories">
              <div className="sidebar-title">
                <h3>Catagories</h3>
              </div>
              <ul>
                <li><a href="#">Body Building</a></li>
                <li><a href="#">Muscle Gain</a></li>
                <li><a href="#">Weight Loss</a></li>
                <li><a href="#">Six pack</a></li>
                <li><a href="#">Meditation</a></li>
                <li><a href="#">Boxing</a></li>
              </ul>
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
</div>


  )
}

export default Martialarts