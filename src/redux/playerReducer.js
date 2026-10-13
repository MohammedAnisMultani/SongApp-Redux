
const initialState = {isPlaying : false, isLiked : false};

// songId : "30103",
// isPlaying : "false" | "true",
// movieId : "12312",
// isLiked : "false" | "true"



const playerReducer = (state = {initialState}, action) => {
    console.log(state);
    
    if(action.type == 'set_song'){
        return {songId : action.payload.songId, isPlaying : action.payload.isPlaying, movieId : action.payload.movieId, isLiked : action.payload.isLiked}
    }
    if(action.type == 'update_play_status'){
        return {...state, isPlaying : action.payload.isPlaying}
    }

    if(action.type == 'update_like_status'){
        return {...state, isLiked : action.payload.isLiked}
    }
return state
}

export default playerReducer