import React, { useState, useCallback } from 'react';
import data from '../pairs.json';
import TeamPairs from './teamPairs';
import OpenPairs from './openPairs';
import DeadPairs from './deadPairs';
import TypegridSelector from './typegridSelector';
import '../styles/teamViewer.css'; // Import the CSS file

const TeamViewer = () => {
  const [unclickedIndexes, setUnclickedIndexes] = useState([]);
  const [savedTypes, setSavedTypes] = useState(data.savedtypes);
  const [openMonsters, setOpenMonsters] = useState([]);
  const [matches, setMatches] = useState([]); // State for displaying matches

  const handleUnclickedIndexesUpdate = useCallback((updatedIndexes) => {
    setUnclickedIndexes(updatedIndexes);
  }, []);

  const handleButtonClick = () => {
    const namesFound = getNamesFromSavedTypes(unclickedIndexes, savedTypes);
    setOpenMonsters([...new Set(namesFound)]); // Update state
    const foundMatches = findOpenPairsMatches([...new Set(namesFound)]); // Find matches
    setMatches(foundMatches); // Update matches state
  };

  const getNamesFromSavedTypes = (unclickedIndexes, savedTypes) => {
    const namesFound = new Set(); // Use a Set to ensure uniqueness

    unclickedIndexes.forEach((index) => {
      Object.keys(savedTypes).forEach((key) => {
        if (savedTypes[key].includes(index)) {
          namesFound.add(key);
        }
      });
    });

    return Array.from(namesFound); // Convert Set back to an array
  };

  const findOpenPairsMatches = (monsters) => {
    const matches = new Set(); // Use a Set to ensure unique pairs

    monsters.forEach((monster) => {
      data.openPairs.forEach((pair) => {
        if (pair.includes(monster)) {
          const otherMonster = pair[0] === monster ? pair[1] : pair[0];
          if (monsters.includes(otherMonster)) {
            matches.add(JSON.stringify(pair)); // Serialize to avoid duplicate arrays
          }
        }
      });
    });

    const uniqueMatches = Array.from(matches).map((match) => JSON.parse(match)); // Deserialize pairs
    return uniqueMatches;
  };

  return (
    <div className="team-viewer-container">
      <div className="team-viewer-content">
        <div className="team-viewer-left">
          <TeamPairs pairs={data.teamPairs} />
          <OpenPairs pairs={data.openPairs} />
          <DeadPairs pairs={data.deadPairs} />
        </div>
        <TypegridSelector 
          array={data.array} 
          onUnclickedIndexesUpdate={handleUnclickedIndexesUpdate} 
        />
        <button 
          onClick={handleButtonClick}
          className="generate-button"
        >
          Generate Matches
        </button>
        <div className="matches-list">
          <h3>Matches:</h3>
          <ul>
            {matches.map((pair, index) => (
              <li key={index}>
                {pair[0]} - {pair[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamViewer;