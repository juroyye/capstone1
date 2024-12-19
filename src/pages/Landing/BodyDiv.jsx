import React from 'react';
import './BodyDiv.css';
import demoImg from '../../imports/images/demo-img-capstone.jpg';
import { Carousel } from 'react-bootstrap';

const BodyDiv = () => {
  return (
    <div className="bodyDiv">
      <div className="image-div">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={demoImg} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="description-div">
        <h2>Welcome to the leading stock information platform</h2>
        <p>Brief description of the application and its features.</p>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default BodyDiv;

