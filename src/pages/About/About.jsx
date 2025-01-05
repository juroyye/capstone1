import '../About/About.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const About = () => {
    const loginButtons = [  
        { label: "Home", route: "/" },
       { label: "About", route: "/about" },
       { label: "Login", route: "/login" },
   ];
  return (
    <div>
        <Navbar buttons={loginButtons} />
    </div>
  )
}

export default About;