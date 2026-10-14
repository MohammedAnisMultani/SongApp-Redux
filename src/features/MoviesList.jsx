import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/movies-list.scss'



const MoviesList = () => {
 
const movielist = useSelector((state) =>{
  console.log(state)
  return state.songs.initialState
})

  return (
    <>
    <h1 className='page-title'>Movies</h1>
    
    
   <div className='movies-grid'> 
     {movielist.map((item) => {
      return(
        <Link to={`/movie/${item.id}`} key={item.id} className='movie-card'>
          <img src={item.displayPicture} alt={item.name}/>
          <p className='movie-name'>{item.name}</p>
          <p className='movie-date'>{item.releaseDate}</p>
        </Link>
      )
    })}
   </div>
    </>
  )
}

export default MoviesList
