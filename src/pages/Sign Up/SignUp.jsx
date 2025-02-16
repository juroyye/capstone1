
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Sign Up/SignUp.css";
import Navbar from "../../components/navbar/Navbar";
import usernameIcon from '../../imports/images/icons8-user-24.png';
import passwordIcon from '../../imports/images/passyWord.png';
import emailingIcon from '../../imports/images/emaily.png';
import signupIcon from '../../imports/images/mainSignup.png'

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.text();
            if (response.ok) {
                navigate("/login");
            } else {
                alert(data);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred. Please try again.");
        }
    };
   
    return (
        <div className="signup-page">
            <Navbar buttons={[{ label: "Home", route: "/" }, { label: "About", route: "/about" }, { label: "Login", route: "/login" }]} />
            <div className="loginBod">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}> 
                        
                        <img src={signupIcon} alt="signup icon" className="signup-Icon"/>
    
                        <h5>Sign Up</h5>
                    
                        <h6>10,000+ stocks at your fingertips</h6>
                        <div className="form-group">
                            <img src={usernameIcon} alt="username icon" className="input-icon" />
                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <img src={emailingIcon} alt="email icon" className="input-icon" />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <img src={passwordIcon} alt="password icon" className="input-icon" />
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btnsignup">Sign Up</button>
                        <p className="signup-text">
                            Have an account? <a href="/login" className="signup-link">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
