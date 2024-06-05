import React from 'react'
import { Link } from 'react-router-dom'

const Trainer = () => {
  return (
 <div>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Our Trainer</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trainer">Our Trainer</Link></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="our-trainer section-padding our-trainer-page">
    <div className="container">
      <div className="section-title">
        <h2>
          <span>Our Best Trainer</span>
        </h2>
        <p>"Meet our award-winning gym trainers.Experience personalized coaching and exceptional results on your fitness journey with us."</p>	
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
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
        <div className="col-md-3 col-sm-6">
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
        <div className="col-md-3 col-sm-6">
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
        <div className="col-md-3 col-sm-6">
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
        <div className="col-md-3 col-sm-6">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/5.png" alt />
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
        <div className="col-md-3 col-sm-6">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/6.png" alt />
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
        <div className="col-md-3 col-sm-6">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/7.png" alt />
              <div className="content-box text-center">
                <h3>Sophia</h3>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>						
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-trainer">
            <div className="img-box text-center">
              <img src="img/our-trainer/8.png" alt />
              <div className="content-box text-center">
                <h3>Ryan Workoutson</h3>
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
</div>


  )
}

export default Trainer