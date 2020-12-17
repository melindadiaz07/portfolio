import React, { useEffect, useState } from 'react';
import MovieMatcherProject from './MovieMatcherProject'
import BrakebillsProject from './BrakebillsProject'
import LearnTrackerProject from './LearnTrackerProject'
import WoMProject from './WoMProject'



const Projects = () => {

const [selectedProject, setSelectedProject] = useState(<BrakebillsProject />)



const handleClick = (event) => {
  
  document.querySelector(".selected-tab").classList.remove("selected-tab")
  event.currentTarget.classList.add("selected-tab")
}



  return (
    <div>
      <div className="side-tabs">
       

        <div className="tab selected-tab" onClick={(event) => {
          setSelectedProject(<BrakebillsProject />)
          handleClick(event)
        }} >
          <h3>Brakebills University</h3>
          <p>An academic website with secret content</p>
        </div>

        <div className="tab" onClick={(event) => {
          setSelectedProject(<LearnTrackerProject />)
          handleClick(event)
        }}>
         <h3> Learning Tracker </h3>
         <p>Build or find custom curriculum</p>
        </div>

        <div className="tab" onClick={(event) => {
          setSelectedProject(<WoMProject />)
          handleClick(event)
        }}>
         <h3> World of Magic </h3>
         <p>Cast spells to catch magical creatures</p>
        </div>

        <div className="tab" onClick={(event) => {
          setSelectedProject(<MovieMatcherProject />)
          handleClick(event)
        }}>
          <h3>Movie Matcher </h3>
          <p>Meet your matches based on your favorite films</p>
        </div>

      </div>

      <div className="display-project-container">
        {selectedProject}
      </div>
    </div>
  )
}

export default Projects;