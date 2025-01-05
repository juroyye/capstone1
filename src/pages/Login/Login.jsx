import '../Login/Login.css'
import { Link } from "react-router-dom";
import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from "react-router-dom";


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
            alert("Login successful");
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
    <h3>Login</h3>
    <h6>10,000+ stocks at your fingertips</h6>
    <div class="form-group">
      <input 
      type="text" 
      name='username'
      placeholder="Username"
      value={formData.username}
      onChange={handleInputChange}
      required />
    </div>
    <div class="form-group">
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