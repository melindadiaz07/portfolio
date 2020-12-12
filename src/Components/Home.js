import React from 'react';
import headshot from '../images/headshot.jpg'

const Home = () => {

  return(
    <div className="home-page-container">
      <img src={headshot} alt="headshot" className="headshot"/>
      <h2>
        Hi, I'm Melinda Diaz - a Software Engineer and Full Stack Developer living in Alexandria, VA.
      </h2>
    </div>

  )
}

export default Home;