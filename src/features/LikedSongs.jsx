import React from 'react'
import { useDispatch } from 'react-redux'

const LikedSongs = () => {

//   const dispatch = useDispatch()
  
//   let  isPlaying = useSelector((state) => state.player.isPlaying)
//   console.log(isPlaying);
//   let isLiked = useSelector((state) => state.player.isLiked)
//   console.log(isLiked)

//  const setPlayer = (songId, isPlaying, isLiked) => {
//     dispatch({type : 'set_song', payload : {songId, isPlaying, isLiked, movieId }})
//   }

// const movieList

  return (
   <div>
     <div>LikedSongs</div>
     {/* <div key={item.id}>
          {item.title}
          <button onClick={()=>setPlayer(item.id, !isPlaying, isLiked)} className='material-icons'>{isPlaying ? 'pause' : 'play_arrow'}</button>
          <button onClick={()=>setPlayer(item.id, isPlaying, !isLiked)} className='material-icons' style={{color:(isLiked ? 'green' : 'black')}}>favorite</button>
        </div> */}
   </div>
  )
}

export default LikedSongs