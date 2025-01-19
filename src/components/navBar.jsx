import React from 'react';

const NavBar = () => {
  return (
    <div style={{ 
      width: '100%', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      backgroundColor: '#333', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      padding: '10px 0', 
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    }}>
      <div style={{ cursor: 'pointer', fontSize: '1.1rem' }}>TeamBuilder</div>
      <div style={{ cursor: 'pointer', fontSize: '1.1rem' }}>WeaknessCheck</div>
      <div style={{ cursor: 'pointer', fontSize: '1.1rem', opacity: 0.6 }}>Coming Soon</div>
    </div>
  );
};

export default NavBar;