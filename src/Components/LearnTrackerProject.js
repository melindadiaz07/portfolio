import React from 'react';
import ReactPlayer from "react-player"

const LearnTrackerProject = () => {

  return (

    <div className="learn-tracker-container">
      <ReactPlayer
        url="https://youtu.be/H1ecrdMsdp4" controls
        height="500px" width="970px" modestbranding="0"
      />

      <h3 className="learn-tracker-description">
        I built the Learning Tracker site to organize all my plans to learn new programming 
        languages and frameworks. To create a responsive frontend, I implemented React.js, and use Semantic UI for styling.
        To build the backend, I created a Rails Api, and used a PostreSQL database to store user information and course data.
        </h3>

        <h3 className="learn-tracker-description">
        The most interesting aspect of creating this application was implementing the responsive progress bars.
        I installed the Victory Pie npm package to render the circular chart components, and created
        functions to calculate progress that rerun any time a box is checked.
        </h3>
        

    </div>

  )
}

export default LearnTrackerProject;