import React from 'react'

const openPairs = ({pairs}) => {
    const entries = Object.entries(pairs);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div>
          <h3>Open</h3>
          {entries.map((pair, index) => (
            index % 2 === 0 && (
              <div key={pair[0]}>
                {pair[0]} - {pair[1]}
              </div>
            )
          ))}
        </div>
        <div>
          <h3>Pairs</h3>
          {entries.map((pair, index) => (
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

export default openPairs