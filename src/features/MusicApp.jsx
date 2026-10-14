import { NavLink, Outlet } from "react-router-dom"
import Player from "./Player"
import '../styles/music-app.scss'
import {Badge, Avatar} from 'antd'

const MusicApp = () => {
return(
    
    <div className="app-wrapper">
        
        <nav className="navbar"> 
        <NavLink to='/' className='nav-link'>
            <span className="material-icons">home</span>
            Home
        </NavLink>

        <NavLink to='/likedsongs' className='nav-link'>
        <Badge count={5}>
            <span className="material-icons">favorite</span>
        </Badge>
        Liked Songs
        </NavLink>
        </nav>
        
        <main className="outlet-wrapper">
            <Outlet/>
        </main>

        <Player/>
    </div>
    
)
}

export default MusicApp