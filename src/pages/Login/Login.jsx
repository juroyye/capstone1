import '../Login/Login.css'
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  const loginButtons = [  
     { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Login", route: "/login" },
  ];

  return (
    <div className='login-page'>
        
        <Navbar buttons={loginButtons}/>

    <div className='loginBod'> 
      
      <div class="login-container">
  <form class="login-form">
    <h3>Login</h3>
    <h6>10,000+ stocks at your fingertips</h6>
    <div class="form-group">
      <input type="text" placeholder="Username" required />
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" required />
    </div>
    <button type="submit" className='btnsignup'>Login</button>
    <p className="signup-text">
  Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
</p>

  </form>
</div>
    </div>
    </div>
  )
}

export default Login