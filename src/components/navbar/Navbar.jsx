import React from 'react'
import logo from "../../imports/images/enmasse.png"


const Navbar = () => {
  return (

<div class="flex items-center">

  <div class="flex w-1/4 position: absolute">
          <img src={logo} alt='logo' style={{ width: '400px', height: '400px', borderBottomRightRadius: '5px'}}/>
  </div>

  {/* <form id="form"> 
  <input type="search" id="query" name="q" placeholder="Search..."/>
  <button>Search</button>
</form> */}
  
  <div class="flex ml-6 space-x-24 text-purple-500">
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

