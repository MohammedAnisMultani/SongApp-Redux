import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../styles/movie-songs.scss"

export default function MovieSongs() {
  
  const {movieId} = useParams()
  const dispatch = useDispatch()
  console.log(movieId)
  
  const songsList = useSelector((state)=>{
    console.log(state.songs.initialState)
    return state.songs.initialState.filter((item)=> item.id == movieId)[0].song
  })

  let  isPlaying = useSelector((state) => state.player.isPlaying)
  console.log(isPlaying);
  let isLiked = useSelector((state) => state.likedSongs.isLiked)
  console.log(isLiked)
  let songId  = useSelector((state)=> state.player.songId)
  console.log(songsList);
  
  const setPlayer = (songId, isPlaying) => {
    dispatch({type : 'set_song', payload : {songId, isPlaying, movieId }})
  }

  const setLike = (isLiked, songId, movieId)=>{
    dispatch({type : 'update_like_status', payload : {isLiked, songId, movieId}})
  }

  return (
 
    // <h2>MovieSongs</h2>
   <div className='song-list'>
    { songsList.map((item,index)=>{
      // let isPlaying = false;
      // let isLiked = false;
      return(
        <div key={item.id}>
          {item.title}
          <button onClick={()=>setPlayer(item.id, !isPlaying)} className='material-icons'>{isPlaying && item.id==songId ? 'pause' : 'play_arrow'}</button>
          <button onClick={()=>setLike(!isLiked, songId, movieId )} className='material-icons' style={{color:(isLiked && item.id==songId? 'green' : 'black')}}>favorite</button>
        </div>
      )
    })}
   </div>
    
  )
}