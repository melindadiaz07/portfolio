import React from 'react';

const Skills = () => {
  return (
    <div id="skills-page">
    <div className="skills-container">
      <h2>Skills & Experience</h2>

    <div className="frontend-container">
      <h3>Front End</h3>

      <h4>Languages: </h4>
      <p>JavaScript</p>
      <p>HTML</p>
      <p>CSS</p>

      <h4>Frameworks/Libraries:</h4>
      <p>React</p>
      {/* <p>Redux</p> */}
      {/* <p>jQuery</p> */}
      <p>Bootstrap</p>
      <p>Semantic UI</p>
      <p>Material UI</p>
  </div>

<div className="backend-container">
    <h3>Backend</h3>

    <h4>Languages:</h4>
    <p>Ruby</p>
    <p>SQL</p>
    <p>Javascript</p>

    <h4>Frameworks/Databases:</h4>
    <p>Rails</p>
    <p>PostgreSQL</p>

  </div>
    
    <div className="testing-container">
    <h3>Testing</h3>

    <h4>Languages:</h4>
    <p>Mocha</p>
    {/* <p>RSpec</p> */}

    <h4>Frameworks/Libraries:</h4>
    <p>Chai</p>
    <p>Cypress</p>
    </div>

    </div>
    </div>
  )
}

export default Skills;