import React from 'react';
import './BodyDiv.css';
import demoImg from '../../imports/images/stocksDemo1.png';
import { Carousel } from 'react-bootstrap';
import demoImg2 from '../../imports/images/newsDemo2.png'
import demoImg3 from '../../imports/images/demoImg3.jpg'
import { useNavigate } from "react-router-dom";

const BodyDiv = () => {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="bodyDiv">
      <div className="image-div slide-in-from-top">
        <Carousel>
          <Carousel.Item>
            <img src={demoImg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={demoImg2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img  src={demoImg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="description-div slide-in">
        <h2>Welcome to the leading <span className='highlight-landing-stockinfo'>stock information</span> platform</h2>
        <p>Manage your investments all in one place - track, strategize,  <span className='highlight-landing-stockinfo'>dominate</span>.</p>
        <button onClick={handleSignUpClick} className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default BodyDiv;

