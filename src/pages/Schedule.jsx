import React from 'react'
import { Link } from 'react-router-dom'


const Schedule = () => {
  return (
  <>
<section class="inner-banner">
		<div class="container">
			<div class="title pull-left">
				<h3>Schedule</h3>
			</div>
			<div class="breadcumb pull-right">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/schedule">Schedule</Link></li>
				</ul>
			</div>
		</div>
	</section>

<section className="schedule">
  <div className="container schedule-box">
    <div className="time-table">
      <div className="table-row head">
        <div className="table-cell head-cell dark">TIME</div>
        <div className="table-cell head-cell">SUNDAY</div>
        <div className="table-cell head-cell">MONDAY</div>
        <div className="table-cell head-cell">TUESDAY</div>
        <div className="table-cell head-cell">WEDNESDAY</div>
        <div className="table-cell head-cell">THURSDAY</div>
        <div className="table-cell head-cell">FRIDAY</div>
        <div className="table-cell head-cell">SATURDAY</div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">10:00 AM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-blue"><span>BODYBUILDING</span></div><br />
        </div>
        <div className="table-cell normal-cell "><span>CROSSFIT</span>
        </div>
        <div className="table-cell normal-cell">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>INDOOR FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">11:00 AM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-blue"><span>MARTIAL ARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell">
        </div>
        <div className="table-cell normal-cell">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>KARATE</span></div><br />
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>BODYBUILDING</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">12:00 PM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">01:00 PM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>ZUMBA FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span /></div><br />
          <div className="exercise bg-orange"><span /></div><br />
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span /></div><br />
          <div className="exercise bg-orange"><span /></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>MARTIAL ARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">02:00 PM</div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span /></div><br />
          <div className="exercise bg-orange"><span /></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">03:00 PM</div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span /></div><br />
          <div className="exercise bg-orange"><span /></div><br />
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span /></div><br />
          <div className="exercise bg-orange"><span /></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>INDOOR FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">04:00 PM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>KARATE</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-pink"><span>KARATE</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-orange"><span>MARTIAL ARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-golden"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-green"><span>CYCLING</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>FITNESS</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">05:00 PM</div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>MARTIAL ARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">06:00 PM</div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>RUNNING</span></div><br />
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">07:00 PM</div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
          <div className="exercise bg-green"><span>swimming</span></div><br />
          <div className="exercise bg-red"><span>INDOOR FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell empty">
        </div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">08:00 PM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>swimming</span></div><br />
          <div className="exercise bg-red"><span>INDOOR FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-golden"><span>RUNNING</span></div><br />
          <div className="exercise bg-green"><span>INDOOR FIT</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>CROSSFIT</span></div><br />
          <div className="exercise bg-orange"><span>CYCLING</span></div><br />
        </div>
        <div className="table-cell normal-cell empty">
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-green"><span>YOGA</span></div><br />
          <div className="exercise bg-red"><span>INDOOR FIT</span></div><br />
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
  </>

  )
}

export default Schedule