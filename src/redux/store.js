import { combineReducers, legacy_createStore } from "redux";
import playerReducer from "./playerReducer";
import likedSongsReducer from "./likedSongsReducer";
import songsReducer from "./songsReducer";

const rootReducer = combineReducers({player: playerReducer, likedSongs : likedSongsReducer, songs : songsReducer})


let store = legacy_createStore(rootReducer)

export default store