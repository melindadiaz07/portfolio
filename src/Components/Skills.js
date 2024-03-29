import React from 'react';

const Skills = () => {
  return (
    <div id="skills-page">
      <h2>Skills & Experience</h2>
    <div className="skills-container">
      

    <div className="frontend-container grid-item">
      <h3> &#60;&nbsp;  Front End  &nbsp;&#62;</h3>

      <h4>Languages: </h4>
      <p>JavaScript</p>
      <p>HTML</p>
      <p>CSS</p>

      <h4>Frameworks/Libraries:</h4>
      <p>React.js</p>
      <p>React Native</p>
      <p>Redux</p>
      <p>jQuery</p>
      <p>Bootstrap</p>
      <p>Vue.js</p>
  </div>

<div className="backend-container grid-item">
    <h3> &#60;&nbsp; Back End &nbsp;&#62;</h3>

    <h4>Languages:</h4>
    <p>Ruby</p>
    <p>SQL</p>
    <p>Javascript</p>

    <h4>Frameworks/Databases:</h4>
    <p>Rails</p>
    <p>Node.js</p>
    <p>Express.js</p>
    <p>PostgreSQL</p>

  </div>
    
    <div className="testing-container grid-item">
    <h3> &#60; &nbsp; Testing &nbsp;&#62;</h3>

    <h4>Languages:</h4>
    <p>Mocha</p>
    {/* <p>Postman</p> */}
    

  <h4>Frameworks/Libraries:</h4>
    <p>Chai</p>
    <p>Cypress</p> 
    </div>

    </div>
    </div>
  )
}

export default Skills;