import React from 'react'
import '/src/pages/payment.css'
import { Link } from 'react-router-dom'


const Plan2 = () => {
  return (
    <>
    <section class="inner-banner">
		<div class="containerx">
			<div class="title pull-left">
				
			</div>
			<div class="breadcumb pull-right">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/schedule">Schedule</Link></li>
				</ul>
			</div>
		</div>
	</section>
 <section className='sectionform'>
  <div className='container2'>
         <div className='div1'>
            <div className="img-box">
              <img src="img/our-package/1.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <h3>PREMIUM PLAN</h3>
                <span>Coach Shame Doe</span>
              </div>
             
            </div>
            <div className="">
              <p>6 Days a Week</p>
              <p>Dedicated Trainer Alocated</p>
              <p>Diet Plan Included</p>
              <p>Morning Evening Batches</p>
            </div> 
          </div> 

     <div className='container1'>  
      
        <form className="form">
                  <div className="row1">
                    <div className="col-12">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Card Number</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">MM / yy</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__div">
                        <input type="password" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Cvv code</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Name on the card</label>
                      </div>
                    </div>
                    <div className="payment1">
                      <div className="pay">Pay<span>$100</span></div>
                    </div>
                  </div>
                </form>
                <img className='cardsclass'  src='public/img/payment/mastercard-removebg-preview.png'></img>
                <img  className='cardsclass' src='public/img/payment/upi-removebg-preview.png'></img>
                <img  className='cardsclass'  src='public/img/payment/visa-removebg-preview.png'></img>
                <img></img>
    </div>
   
  </div>
   
</section>
</>
  )
}

export default Plan2