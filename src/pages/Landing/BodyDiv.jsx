import React from 'react';
import './BodyDiv.css';
import demoImg from '../../imports/images/demo-img-capstone.jpg';
import { Carousel } from 'react-bootstrap';
import demoImg2 from '../../imports/images/demoImg2.jpg'
import demoImg3 from '../../imports/images/demoImg3.jpg'

const BodyDiv = () => {
  return (
    <div className="bodyDiv">
      <div className="image-div">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="description-div">
        <h2>Welcome to the leading <span className='highlight-landing-stockinfo'>stock information</span> platform</h2>
        <p>Manage your investments all in one place - track, strategize,  <span className='highlight-landing-stockinfo'>dominate</span>.</p>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default BodyDiv;

