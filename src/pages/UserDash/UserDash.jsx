import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Overlay from '../../components/overlay/Overlay';

const UserDash = () => {
    const userDashButtons = ['Dashboard', 'Profile', 'Logout']; 
    const [isOverlayVisible, setOverlayVisible] = useState(false); 
    const [selectedStock, setSelectedStock] = useState(null); 
  
    const handleStockClick = (stock) => {
        setSelectedStock(stock); 
        setOverlayVisible(true); 
      };
    
      const handleCloseOverlay = () => {
        setSelectedStock(null); 
        setOverlayVisible(false); 
      };

    return (
        <div className="user-dash">
            <Navbar buttons={userDashButtons} />
            <Sidebar onStockClick={handleStockClick} />
            {isOverlayVisible && (
        <Overlay stock={selectedStock} onClose={handleCloseOverlay} />
      )}
        </div>
    );
};

export default UserDash;
