import React from 'react'
import '../navbar/Navbar.css'
import logo from "../../imports/images/enMasselogo.webp"
import homeIcon from "../../imports/images/homeIcon.jpg"
import aboutIcon from "../../imports/images/aboutIcon.webp"
import newspaper from "../../imports/images/newspaper-regular.svg"

const Navbar = () => {
  return (
    <div>

     <img src={logo} alt='logo' style={{ width: '70px', height: '70px' }}/>
      En Masse
      <div className='selections'>
        <button>
          <img src={homeIcon} alt='Home Button' style={{ width: '50px', height: '50px' }} />
        </button>
        <button>
          <img src={aboutIcon} alt='About Button' style={{ width: '38px', height: '38px' }} />
        </button>
        <button>
        <img src={newspaper} alt='Newspaper Button'  style={{ width: '38px', height: '38px' }} />
        </button>
        <button>Stocks</button>
      </div>
    </div>
  )
}

export default Navbar;