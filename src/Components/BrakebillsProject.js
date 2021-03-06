import React from 'react';
import ReactPlayer from "react-player"

const BrakebillsProject = () => {

 

  return (

    <div className="brakebills-container">

      <ReactPlayer
        url="https://youtu.be/67evagTgJ_c" controls
        height="500px" width="970px" modestbranding="0"
      />

    <h3 className="brakebills-description">
      This project was a fun take on a classic academic website - it's based on a fictional university from the book/
      tv series The Magicians. The premise is that to outsiders, Brakebills is a regular ivy leage school,
      when in reality it teaches magic (think Hogwarts for adults.)</h3>
     
        <h3 className="brakebills-description">
          This concept is reflected in the layout of the website - there's a public facing version that shows
          traditional university content, and secret content that can only be seen by logged in students or facutly.
      </h3>

      <h3 className="brakebills-description">
        I also had a lot of fun building a message board on the logged-in side. Users can see messages posted by other students,
        and replies are conditionally rendered by clicking on different posts. The user can also add their own posts or replies to the board,
        and the content is instantly rendered to the page as well as sent to the database to persist the information.
      </h3>

    </div>

  )
}

export default BrakebillsProject;