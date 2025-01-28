import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../imports/images/completeenmasse.png'

const Navbar = ({ buttons }) => {
  return (
   
   <div>
    <div className="position absolute pt-4 pl-6">
    <img
                    src={logo}
                    alt="logo"
                    style={{ width: '260px', height: '55px', borderBottomRightRadius: '5px' }}
                />
    </div>
    <div>
    <nav>
      <ul className="flex space-x-24 text-violet-600 font-bold float-end pt-4 pr-10">
        {buttons.map((button, index) => (
          <li key={index} className="navbar-button">
            <Link to={button.route} className="navbar-link btns">
              {button.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>
    </div>
    
  );
};

export default Navbar;


