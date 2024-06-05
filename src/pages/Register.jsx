
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Contact:', contact);
      console.log('Email:', email);
      console.log('Password:', password);
      // Handle form submission, e.g., send data to server
    };
  
  return (
    <div> <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Register</h3>
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
        <h2>REGISTER</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
        <div className='alreadyaccount'>
      <h5>If You have Already Account</h5>
      <Link to="/login"><h5 id="log">Login</h5></Link>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Register