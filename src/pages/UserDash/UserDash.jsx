
import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const UserDash = () => {
    const userDashButtons = ['Dashboard', 'Profile', 'Logout']; 

    return (
        <div className="user-dash">
            <Navbar buttons={userDashButtons} />
        </div>
    );
};

export default UserDash;
