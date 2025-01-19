import React from 'react';

const DeadPairs = ({ pairs }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      <div>
        <h3>Dead</h3>
        {pairs.map((pair, index) => (
          index % 2 === 0 && (
            <div key={index} style={{ display: 'flex', gap: '0.5rem' }}>
              <span>{pair[0]}</span> - <span>{pair[1]}</span>
            </div>
          )
        ))}
      </div>
      <div>
        <h3>Pairs</h3>
        {pairs.map((pair, index) => (
          index % 2 !== 0 && (
            <div key={index} style={{ display: 'flex', gap: '0.5rem' }}>
              <span>{pair[0]}</span> - <span>{pair[1]}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default DeadPairs;

