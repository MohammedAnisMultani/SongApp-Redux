import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import MusicApp from './features/MusicApp'
import MoviesList from './features/MoviesList'
import MovieSongs from './features/MovieSongs'
import LikedSongs from './features/LikedSongs'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='' element = {<MusicApp/>}>
      <Route path='/' element={<MoviesList/>}/>
      <Route path='/movie/:movieId' element={<MovieSongs/>}/>
      <Route path='/likedsongs' element={<LikedSongs/>}/>

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
