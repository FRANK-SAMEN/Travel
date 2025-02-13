import React from 'react';
import Destination from 'Destination';
const Dategrille = () => {
    return (
      <div>
        <Destination
          depart="D'ou partez vous?"
          destiner="ou allez-vous?"
          villeDestination="ville de départ"
          villeDépart="ville de destination"
        />
      </div>
    );
};
export default Dategrille;