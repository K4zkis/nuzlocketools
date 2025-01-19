import React from 'react';
import data from '../pairs.json';
import TeamPairs from './teamPairs';
import OpenPairs from './openPairs';
import DeadPairs from './deadPairs'

const teamViewer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '60px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, paddingRight: '80px' }}>
        <TeamPairs pairs={data.teamPairs} />
        <OpenPairs pairs={data.openPairs} />
        <DeadPairs pairs={data.deadPairs} />
      </div>
        <div style={{ width: '200px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {data.array.slice(0, 18).map((item, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: 'purple', 
              color: '#fff', 
              textAlign: 'center', 
              padding: '10px', 
              borderRadius: '5px', 
              fontSize: '0.9rem' 
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default teamViewer