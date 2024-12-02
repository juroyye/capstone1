import React from 'react'
import '../navbar/Navbar.css'
import logo from "../../imports/images/enMasselogo.webp"

const Navbar = () => {
  return (
    <div>

     <img src={logo} alt='logo'/>

      <div className='selections'>
        <button>Home</button>
        <button>About</button>
        <button>News</button>
        <button>Stocks</button>
      </div>
    </div>
  )
}

export default Navbar;