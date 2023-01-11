import React from 'react'

const MovieCard = (props) => {
  return (
    <>
    <div className='movie-card' >
        <div className='movie-card-components'>
     
      <img  src={props.Poster} />
      <div>  { props.Title}         </div>
      <div>{props.Type}</div>
      </div>
      </div>
    </>
  

  )
}

export default MovieCard