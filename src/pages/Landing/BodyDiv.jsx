import React from 'react';
import './BodyDiv.css';
import demoImg from '../../imports/images/demo-img-capstone.jpg';

const BodyDiv = () => {
  return (
    <div className="bodyDiv">
      <div className="image-div">
        <img className="image" src={demoImg} alt="demo img" />
      </div>
      <div className="second-div">
          
      </div>
    </div>
  );
};

export default BodyDiv;
