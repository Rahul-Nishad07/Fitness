import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function GetLoginDetails(){
    let items =  { email,password}
    fetch()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div> <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Login</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          
        </ul>
      </div>
    </div>
  </section>
  <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={GetLoginDetails }>Login</button>
        <div> <h5 >If You Don't Have Any Account</h5>
        <Link to="/register">Register</Link></div>
       
      </form>
    </div>
  </div>
  )
}

export default Login