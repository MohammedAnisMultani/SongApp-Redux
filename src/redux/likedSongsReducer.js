import React from 'react'

const initialState = []


const likedSongsReducer = (state = initialState, action) => {

  if(action.type == "update_like_status"){
      return(
        [...state, {isLiked : action.payload.isLiked, songId : action.payload.songId, movieId : action.payload.movieId}]
      )
  }
  return state
}

export default likedSongsReducer