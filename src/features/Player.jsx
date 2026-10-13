import React, { useEffect, useRef, useState } from 'react'
import './styles/player.scss'
import { useDispatch, useSelector } from 'react-redux';
export default function Player() {
  
  const audioRef = useRef();
  const dispatch = useDispatch()
  // const isLiked = true;
  // const [isPlaying, setIsPlaying] = useState(false)
  const [totalDuration, setTotalDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0);
  const playerInfo = useSelector((state) => state.player)
  let songId = playerInfo.songId;
  let isPlaying = playerInfo.isPlaying
  let movieId = playerInfo.movieId
  let isLiked = playerInfo.isLiked
  // console.log(playerInfo)
  // console.log(isPlaying);
  // console.log(movieId)
  
  let songsList = useSelector((state) =>{
    if(!movieId) return [];
    // console.log(state.songs.initialState)
    if(state.songs.initialState)
    return state.songs.initialState.filter((item) => item.id == movieId)[0].song
    
  })
  //songsDetails filtering to 1 songId 

  const songDetials = songsList.filter((item) => item.id == songId)[0]

  // console.log(songsList)
  // console.log(songDetials)

  const breakTime = (time) => {
    const min = parseInt(time/60);
    return `${min} : ${time - min*60}`
  }


const togglePlay = () => {
  isPlaying ? audioRef.current.pause() : audioRef.current.play()
  dispatch({type : 'update_play_status', payload : {isPlaying : !isPlaying,songId,movieId }})
}

const toggleLike = () => {
  dispatch({type : 'update_like_status', payload : {isLiked : !isLiked, songId,movieId}})
}

const timeUpdate = (e) => {
// console.log(audioRef.current.currentTime, audioRef.current.duration)
setSeekTime(audioRef.current.currentTime)
}

useEffect(()=>{
if(audioRef.current){
  setTotalDuration(audioRef.current.duration)
}
// console.log(audioRef.current.duration)
},[])

useEffect(()=>{

  if(!audioRef.current) return;

  if(isPlaying){
    audioRef.current.play()

  }
  else{
    audioRef.current.pause()
  }
},[isPlaying])

if(!songId) return null; 



  return (
    <div className='player-container'>
      
    <div className='left'>
      <img style={{borderRadius : "10px"}} src="/images/Dhurandhar.webp" alt="OOPS!!!" width={50}  />
      <h3>{songDetials.title}</h3>
      <button onClick={toggleLike} style={{color : isLiked ? "red" : 'white'}} className='material-icons btn-icon'>favorite</button>
    </div>

    {/* //default audio controle */}
    <audio  ref={audioRef} onLoadedMetadata={()=>setTotalDuration(audioRef.current.duration)} onTimeUpdate={timeUpdate} controls src={songDetials.fileAddress} className='native-audio'></audio>

    {/* ----- */}
    <div className='custom-player'>
      <div>
        <button className='material-icons btn-icon'>skip_previous</button>
        <button onClick={togglePlay} className='material-icons btn-icon'>{isPlaying ? 'pause':'play_arrow' }</button>
        <button className='material-icons btn-icon'>skip_next</button>
      </div>
      <div className='play-bar'>
        <span>{breakTime(parseInt(seekTime))}</span>
        <div className='bar'>
          <div className='seek-bar' style={{width : (seekTime/totalDuration)*100 + '%'}}></div>
        </div>
        <span>{breakTime(parseInt(totalDuration))}</span>
      </div>
    </div>
    {/* ----- */}
    </div>
  )
}
