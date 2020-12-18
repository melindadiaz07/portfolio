import React from 'react';
import ReactPlayer from "react-player"
import placeholder from '../images/womdemo2.gif'

const WoMProject = () => {

  return (

    <div className="wom-container">
      
      {/* <ReactPlayer
        url=" youtube url " controls
        height="500px" width="970px" modestbranding="0"
      /> */}

      <img className="wom-gif" src={placeholder} alt="wom-demo" />

      <h3 className="wom-description">Using Javascript to build this app allowed me to create a really interactive interface.
        Users can select their character, or get 'sorted' into a house (chosen through a function that selects a random house id from the database).
        Once the game starts, magical creatures are randomly selected from the API, and rendered in random 'locations'(backgrounds) to create numerous scenarios.
      </h3>

      <h3 className="wom-description">
        There were a lot of challenging but rewarding pieces in creating this game. As a single page application, many elements need to stay hidden until specific
        scenarios are reached, and even then the items that should render are tied to events in the game - for instance,
        potion bottles at the bottom of the screen show how many lives a player has left, and are removed in order when a life is lost. 
        This information is also stored in the backend (using a Rails API and a SQLite database), so that it persists.
      </h3>

    </div>

  )
}

export default WoMProject;