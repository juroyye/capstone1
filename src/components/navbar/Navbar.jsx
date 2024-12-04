import React from 'react'
import logo from "../../imports/images/enMasselogo.webp"


const Navbar = () => {
  return (

<div class="flex items-center">

  <div class="flex w-3/5 items-center space-x-2">
          <img src={logo} alt='logo' style={{ width: '70px', height: '70px', borderBottomRightRadius: '5px'}}/>
          <p>En Masse</p>
  </div>

  
  <div class="flex ml-8 space-x-24">
         <button>
          Home
          </button>
          <button>
          About
          </button>
           <button>
          News
          </button>
          <button>
            Stocks
            </button>
  </div>
</div>
















    // <div className='selections'>


    //       <div id='header1'> 
    //       <img src={logo} alt='logo' style={{ width: '70px', height: '70px' }}/>
    //       <p>En Masse</p>
    //       </div>


    //     <div className='btns'>
    //      <button>
    //       <img src={homeIcon} alt='Home Button' style={{ width: '50px', height: '50px' }} />
    //       </button>
    //       <button>
    //       About
    //       </button>
    //      <button>
    //       News
    //       </button>
    //       <button>Stocks</button>
    //   </div>
    // </div>
  )
}

export default Navbar;

