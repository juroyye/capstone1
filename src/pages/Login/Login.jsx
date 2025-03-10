import '../Login/Login.css'
import { Link } from "react-router-dom";
import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from "react-router-dom";
import usernameIcon from '../../imports/images/icons8-user-24.png';
import passwordIcon from '../../imports/images/passyWord.png';
import loginIcon from '../../imports/images/mainLogin.png';


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const loginButtons = [  
     { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Login", route: "/login" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json(); 
          localStorage.setItem("userId", data.userId);
            navigate("/userdash");
        } else {
            const errorMessage = await response.text();
            alert(errorMessage);
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
    }
};

  return (
    <div className='login-page'>
        
        <Navbar buttons={loginButtons}/>

    <div className='loginBod'> 
      
      <div class="login-container">
  <form class="login-form" onSubmit={handleSubmit}>
  <img src={loginIcon} alt="login icon" className="login-Icon"/>
    <h5>Login</h5>
    <h6>10,000+ stocks at your fingertips</h6>
    <div class="form-group">
      <img src={usernameIcon} alt="username icon" className="input-icon" />
      <input 
      type="text" 
      name='username'
      placeholder="Username"
      value={formData.username}
      onChange={handleInputChange}
      required />
    </div>
    <div class="form-group">
      <img src={passwordIcon} alt="password icon" className="input-icon" />
      <input 
      type="password" 
      name='password'
      placeholder="Password" 
      value={formData.password}
      onChange={handleInputChange}
      required />
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