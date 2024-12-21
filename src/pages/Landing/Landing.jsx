import React from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import BodyDiv from '../Landing/BodyDiv'

const Landing = () => {
  const landingButtons = ['Home', 'About', 'Login'];

  return (
    <div className='home'>
      <Navbar buttons={landingButtons}/>
      <BodyDiv/>
    </div>
  )
}

export default Landing;