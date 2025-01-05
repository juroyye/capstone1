import '../Sign Up/SignUp.css'
import { Link } from "react-router-dom";


import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const SignUp = () => {
  const loginButtons = [  
     { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Login", route: "/login" },
];

  return (
    <div className='signup-page'>
        
        <Navbar buttons={loginButtons}/>

    <div className='loginBod'> 
      
      <div class="login-container">
  <form class="login-form">
    <h3>Sign Up</h3>
    <h6>10,000+ stocks at your fingertips</h6>
    <div class="form-group">
      <input type="text" placeholder="First Name" required />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Last Name" required />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Email" required />
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" required />
    </div>
    <button type="submit" className='btnsignup'>Sign Up</button>
    <p className="signup-text">
  Have an account? <Link to="/login" className='signup-link'>Login</Link>
</p>
  </form>
</div>
    </div>
    </div>
  )
}

export default SignUp;