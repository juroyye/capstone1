import '../About/About.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import vid from '../../imports/etc/stocksVid.mp4'



const About = () => {
    const loginButtons = [  
        { label: "Home", route: "/" },
       { label: "About", route: "/about" },
       { label: "Login", route: "/login" },
   ];
  return (
    <div>
        <Navbar buttons={loginButtons} />
      <div className='about-div'>

      <div className='text-box'>
                <h1 className='about-text'>Grow Your <span className='about-highlights'>Wealth</span>, One Trade at a Time.</h1>
              <p>Our stock application offers a comprehensive platform for investors and market enthusiasts to stay informed and make smarter decisions. With a powerful stock search feature, users can effortlessly look up detailed information about any stock and a personalized news feed that curates the latest articles and updates related to stocks and the broader market, ensuring users are always up-to-date on market trends and events. Whether you're a seasoned trader or just starting, this app is your ultimate companion for staying ahead in the stock market.</p>
          </div>

            <video
                    className="about-video"
                    width="600"
                    height="300"
                    autoPlay
                    loop
                >
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
           
             
       </div>
     </div>
  )
}

export default About;