import React from 'react';
import data from '../pairs.json';
import TeamPairs from './teamPairs';
import OpenPairs from './openPairs';
import DeadPairs from './deadPairs'

const teamViewer = () => {
  return (
    <div>
        <div>
        <TeamPairs pairs={data.teamPairs} />
        <OpenPairs pairs={data.openPairs} />
        <DeadPairs pairs={data.deadPairs} />
    </div>
    </div>
  )
}

export default teamViewer