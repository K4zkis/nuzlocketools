import React, { useState } from 'react';

const TypegridSelector = ({ array, onUnclickedIndexesUpdate }) => {
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const handleClick = (index) => {
    setClickedIndexes((prevClicked) => {
      const newClicked = prevClicked.includes(index)
        ? prevClicked.filter((clickedIndex) => clickedIndex !== index) // Unclick
        : [...prevClicked, index]; // Click

      // Now update the parent component with the unclicked indexes only after the state change
      const unclickedIndexes = array
        .map((item, idx) => (newClicked.includes(idx) ? null : idx))
        .filter((idx) => idx !== null);
      
      onUnclickedIndexesUpdate(unclickedIndexes);

      return newClicked;
    });
  };

  return (
    <div className="main-content">
      <div style={{ width: '200px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {array.slice(0, 18).map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: clickedIndexes.includes(index) ? 'gray' : 'purple',
              color: '#fff',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypegridSelector;
