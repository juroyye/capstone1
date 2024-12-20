import React from 'react'
import logo from "../../imports/images/enmasse.png"


const Navbar = () => {
  return (

<div class="">

  <div class="position: absolute pt-4 pl-6">
          <img src={logo} alt='logo' style={{ width: '260px', height: '55px', borderBottomRightRadius: '5px'}}/>
  </div>
  
  
  <div class="flex space-x-24 text-violet-600 font-bold float-end pt-4 pr-10">
         <button>
          Home
          </button>
          <button>
          About
          </button>
           <button>
          Login
          </button>
  </div>
</div>

  )
}

export default Navbar;

