import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MoviesList = () => {
 
const movielist = useSelector((state) =>{
  console.log(state)
  return state.songs.initialState
})

  return (
    
    <>
    <h1>MoviesList</h1>
    
    
   <div style={{display:'Flex', gap:'20px', padding:'20px', flexWrap: 'wrap' }}> 
     {movielist.map((item,index) => {
      return(
        <Link to={`/movie/${item.id}`} key={item.id} style={{textDecoration:'none', color:'white'}}>
          <img style={{width:'200px'}} src={item.displayPicture} alt="" />
          <p>{item.name}</p>
          <p>{item.releaseDate}</p>
        </Link>
      )
    })}
   </div>
    </>
  )
}

export default MoviesList
