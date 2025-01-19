import React, { useState, useCallback } from 'react';
import data from '../pairs.json';
import TeamPairs from './teamPairs';
import OpenPairs from './openPairs';
import DeadPairs from './deadPairs';
import TypegridSelector from './typegridSelector';

const TeamViewer = () => {
  const [unclickedIndexes, setUnclickedIndexes] = useState([]);
  const [savedTypes, setSavedTypes] = useState(data.savedtypes);
  const [openMonsters, setOpenMonsters]= useState([]);

  // Memoize the function to avoid unnecessary re-renders
  const handleUnclickedIndexesUpdate = useCallback((updatedIndexes) => {
    setUnclickedIndexes(updatedIndexes);
  }, []); // This callback won't change unless specified dependencies change

  const handleButtonClick = () => {
    const namesFound = getNamesFromSavedTypes(unclickedIndexes, savedTypes);
    setOpenMonsters(namesFound);
    console.log(namesFound); // Log the result to the console
  };

  // Function to get names from savedTypes based on unclickedIndexes
  const getNamesFromSavedTypes = (unclickedIndexes, savedTypes) => {
    const namesFound = [];

    unclickedIndexes.forEach((index) => {
      Object.keys(savedTypes).forEach((key) => {
        if (savedTypes[key].includes(index)) {
          namesFound.push(key);
        }
      });
    });

    return namesFound;
  };

  

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, paddingRight: '80px' }}>
          <TeamPairs pairs={data.teamPairs} />
          <OpenPairs pairs={data.openPairs} />
          <DeadPairs pairs={data.deadPairs} />
        {/* Display savedTypes here 
        <div style={{ marginTop: '20px' }}>
            <h3>Saved Types:</h3>
            <pre>{JSON.stringify(savedTypes, null, 2)}</pre>
        </div>
        */}
        </div>
        <TypegridSelector 
          array={data.array} 
          onUnclickedIndexesUpdate={handleUnclickedIndexesUpdate} 
        />
        <button 
            onClick={handleButtonClick}
                style={{
                    backgroundColor: '#4CAF50', // Green background
                    color: 'white', // White text
                    padding: '10px 20px', // Padding inside the button
                    position:'relative',
                    top: '300px',
                    left: '-200px',
                    paddingTop: '10px',
                    border: 'none', // No border
                    borderRadius: '5px', // Rounded corners
                    fontSize: '16px', // Font size
                    cursor: 'pointer', // Pointer cursor on hover
                    transition: 'background-color 0.3s ease', // Smooth transition for background color
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} // Change color on hover
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'} // Revert color when hover ends
            >
            Generate Matches
        </button>
        <div>
            <h3>Matches:</h3>
                <ul>
                {openMonsters.map((item, index) => (
                <li key={index}>{item}</li> // Render each item of the array as a list item
                ))}
                </ul>
        </div>
        {/* Display unclicked indexes from parent 
            <div style={{ marginTop: '260px' }}>
                <h3>Unclicked Indexes (from Parent):</h3>
                <ul>
                    {unclickedIndexes.map((index) => (
                    <li key={index}>{index}</li>
                    ))}
                </ul>
            </div>
        */}   
        </div>
        
    </div>
  );
};

export default TeamViewer;
