import React, { useState } from 'react'
import MovieCard from './MovieCard';




const API_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=a07b0e15'







const SearchField = () => {


  const [text,setText] = useState();
  const [MovieList,setMovieList] = useState([]);


  const ChangeGrabber = (e)=>{
    setText(e.target.value)
    

  }

  const TextSubmit = async(text)=>{
    
console.log(`${API_url}&s=${text}`)
const response = await fetch (`${API_url}&s=${text}`)
console.log(response,'response')
const moviedata =await response.json();

console.log(moviedata.Search)
// console.log(typeof(moviedata.Search),'typeof')
const ArrayOfMovies = moviedata.Search
setMovieList(ArrayOfMovies)






  }


  return (
    <>
    <div>SearchField</div>

    <input className='' placeholder='enter movie name' onChange={(e)=>ChangeGrabber(e)} ></input>
    <button onClick={()=>TextSubmit(text)} > Search</button> <br/>
    text:{text}
    <br/>
   
        <div>
     {/* {MovieList.map((movie) => <MovieCard Title = {movie.Title} Year = {movie.Year} Type = {movie.Type} Poster = {movie.Poster}    />)}   */}
     </div>
  { /* how to show title year type only on searching  */}
        {/* {text.length > 0 && MovieList.length > 0 ? MovieList.map((movie)=><MovieCard  Title = {movie.Title} Poster={movie.Poster} Year = {movie.Year } Type = {movie.Type}/>) : "error" }

  */}
        {MovieList && MovieList.length > 0 ? (
        <div className="container">
          {MovieList.map((movie) => (
            <MovieCard Title = {   "Title: "  + movie.Title} Year = {"Year: " + movie.Year} Type = {"Type: " + movie.Type} Poster = {  movie.Poster}  />
          ))}
        </div>
      ) : (
        <div className="empty">
          {/* <h2>No movies found</h2> */}
        </div>
      )}
  





    </>
    
  )
}

export default SearchField