import React from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BodyDiv from '../Landing/BodyDiv'

const Landing = () => {
  return (
    <div className='home'>
      <Navbar/>
      <BodyDiv/>
    </div>
  )
}

export default Landing;