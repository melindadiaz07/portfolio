import React from 'react';
import placeholder from '../images/moviematchplaceholder.gif'

const MovieMatcherProject = () => {

  return (

    <div className="movie-match-container">
      <img className="movie-match-gif" src={placeholder} alt="demo gif" />
      <h3 className="movie-match-description">
        Sign up, create your list of favorite films, and see the 10 people with lists most similiar to yours.
        </h3>
    </div>

  )
}

export default MovieMatcherProject;