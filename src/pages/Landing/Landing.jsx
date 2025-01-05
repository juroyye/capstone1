import React from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import BodyDiv from '../Landing/BodyDiv';

const Landing = () => {
  const landingButtons = [ 
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Login", route: "/login" },
  ];

  return (
    <div className='home'>
      <Navbar buttons={landingButtons}/>
      <BodyDiv/>
    </div>
  )
}

export default Landing;