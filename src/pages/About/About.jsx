import '../About/About.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import sponsors from '../../imports/images/RefinedSponsors.png'

const About = () => {
    const loginButtons = [  
        { label: "Home", route: "/" },
       { label: "About", route: "/about" },
       { label: "Login", route: "/login" },
   ];
  return (
    <div>
        <Navbar buttons={loginButtons} />
        <div>   
          <img src={sponsors} alt='grid of sponsor companies' width='500px' height='200px' /></div>
          <div>ithgruth</div>
    </div>
  )
}

export default About;