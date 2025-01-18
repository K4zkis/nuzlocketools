import React, { useEffect, useState } from 'react';

const DeadPairs = () => {
  const [deadPairs, setDeadPairs] = useState({});

  useEffect(() => {
    fetch('../../public/pairs.json')
      .then((response) => response.json())
      .then((data) => {
        setDeadPairs(data.deadPairs);
      })
      .catch((error) => console.error('Error loading pairs.json:', error));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      <div>
        <h3>Column 1</h3>
        {Object.entries(deadPairs).map((pair, index) => (
          index % 2 === 0 && (
            <div key={pair[0]}>
              {pair[0]} - {pair[1]}
            </div>
          )
        ))}
      </div>
      <div>
        <h3>Column 2</h3>
        {Object.entries(deadPairs).map((pair, index) => (
          index % 2 !== 0 && (
            <div key={pair[0]}>
              {pair[0]} - {pair[1]}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default DeadPairs;
