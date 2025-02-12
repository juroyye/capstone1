import '../About/About.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import vid from '../../imports/etc/stocksVid.mp4'
import { useNavigate } from "react-router-dom";


const About = () => {
    const loginButtons = [  
        { label: "Home", route: "/" },
       { label: "About", route: "/about" },
       { label: "Login", route: "/login" },
   ];

     const navigate = useNavigate();
   
     const handleSignUpClick = () => {
       navigate("/signup");
     };
  return (
    <div>
        <Navbar buttons={loginButtons} />
      <div className='about-div'>

      <div className='text-box'>
                <h1 className='about-text'>Grow Your <span className='about-highlights'>Wealth</span>, One Trade at a Time.</h1>
              <p>Our stock application is designed to provide investors and market enthusiasts with a single window of information to be empowered to make informed decisions. This application features the most powerful stock search to look for any stock's detailed information with ease, while a news feed curates the latest articles and updates about stocks and the greater economic scene. This application will serve as your most trusted buddy; be it an expert trader or newbie in the stock market.</p>
              <button onClick={handleSignUpClick} className="sign-up-button">Sign Up</button>
          </div>

            <video
                    className="about-video"
                    width="600"
                    height="300"
                    autoPlay
                    loop
                >
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
           
             
       </div>
     </div>
  )
}

export default About;