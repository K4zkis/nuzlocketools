import React from 'react';

const Footer = () => {
  return (
    <div style={{ 
      width: '100%', 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      backgroundColor: '#f1f1f1', 
      display: 'flex', 
      justifyContent: 'space-evenly', 
      alignItems: 'center', 
      padding: '10px 20px', 
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <span style={{ fontSize: '1rem', color: '#333' }}>made by Janus (fan since 2015)</span>
      <button style={{ 
        backgroundColor: '#007BFF', 
        color: '#fff', 
        border: 'none', 
        padding: '9px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        fontSize: '1rem' 
      }}>
        Future Button
      </button>
    </div>
  );
};

export default Footer;