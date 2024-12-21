
import '../Login/Login.css'

import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  const loginButtons = ['Home', 'About', 'Login'];

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
    <button type="submit">Login</button>
    <p class="signup-text">
      Don't have an account?
       <a href="#" class="signup-link"> Sign Up</a>
    </p>
  </form>
</div>
    </div>
    </div>
  )
}

export default Login