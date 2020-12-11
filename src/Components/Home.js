import React from 'react';
import headshot from '../images/headshot.jpg'

const Home = () => {

  return(
    <div className="home-page-container">
      <img src={headshot} alt="headshot" className="headshot"/>
      <h2>
        Short intro about me...
      </h2>
    </div>

  )
}

export default Home;