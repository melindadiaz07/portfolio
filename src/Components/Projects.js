import React, { useEffect, useState } from 'react';
import MovieMatcherProject from './MovieMatcherProject'
import BrakebillsProject from './BrakebillsProject'
import LearnTrackerProject from './LearnTrackerProject'
import WoMProject from './WoMProject'



const Projects = () => {

const [selectedProject, setSelectedProject] = useState(<BrakebillsProject />)



// const updateProject = () => {
//   // sets component to display based on state - case statements and returns component
//   switch(selectedProject) {
//     case "brakebills":
//       console.log("brakebills")
//       return <BrakebillsProject />
//     case "movieMatcher":
//       return <MovieMatcherProject />
//     case "WoM":
//       return <WoMProject />
//     case "learnTracker":
//       return <LearnTrackerProject />
//     default:
//       return null
//   }
// }

  return (
    <div>
      <div className="side-tabs">
       

        <div className="tab selected-tab" onClick={() => setSelectedProject(<BrakebillsProject />)}>
          <h3>Brakebills University</h3>
          <p>description</p>
        </div>

        <div className="tab" onClick={() => setSelectedProject(<LearnTrackerProject />)}>
         <h3> Learning Tracker </h3>
         <p>description</p>
        </div>

        <div className="tab" onClick={() => setSelectedProject(<WoMProject />)}>
         <h3> World of Magic </h3>
         <p>description</p>
        </div>

        <div className="tab" onClick={() => setSelectedProject(<MovieMatcherProject />)}>
          <h3>Movie Matcher </h3>
          <p>description</p>
        </div>

      </div>

      <div className="display-project-container">
        {selectedProject}
      </div>
    </div>
  )
}

export default Projects;