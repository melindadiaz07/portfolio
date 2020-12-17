import React from 'react';
import headshot from '../images/hexheadshot.png'

const Home = () => {

  return(
    <div id="home-page">
  

<div className="home-page-container">
<hr id="top-rule"></hr>
  <img src={headshot} alt="headshot" className="headshot"/>
  <hr id="bottom-rule"></hr>
      <h2>
        Hi, I'm Melinda Diaz - a Software Engineer and Full Stack Developer living in Alexandria, VA.
      </h2>
    </div>
 <div className="text-background"></div>
    </div>

  )
}

export default Home;