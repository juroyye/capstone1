

import React from 'react';
import logo from "../../imports/images/enmasse.png";

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
            <div className="flex space-x-24 text-violet-600 font-bold float-end pt-4 pr-10">
                {buttons.map((button, index) => (
                    <button key={index}>{button}</button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;


