import React from 'react';
import './BodyDiv.css';
import demoImg from '../../imports/images/demo-img-capstone.jpg';

const BodyDiv = () => {
  return (
    <div className="bodyDiv">
      <div className="image-div">
        <img className="image" src={demoImg} alt="demo img" />
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

