import React from 'react';
import ReactPlayer from "react-player"

const LearnTrackerProject = () => {

  return (

    <div className="learn-tracker-container">
      <ReactPlayer
        url="https://youtu.be/H1ecrdMsdp4" controls
        height="500px" width="970px" modestbranding="0"
      />

      <h3 className="learn-tracker-description">description of project</h3>
    </div>

  )
}

export default LearnTrackerProject;