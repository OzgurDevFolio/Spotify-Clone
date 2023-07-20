import { React } from 'react'
import LeftSide from '../components/LeftSide/LeftSide'
import SearchIcon from '@mui/icons-material/Search'
import GroupsIcon from '@mui/icons-material/Groups'
import ProfilePhoto from '/assets/ProfilePhoto.jpeg'
import { Avatar } from '@mui/material'
import './Search.css'
import Player from '../components/Player/Player'
import playlist111 from '/assets/playlist111.png'
import playlist222 from '/assets/playlist222.png'
import playlist333 from '/assets/playlist333.png'
import playlist444 from '/assets/playlist444.png'
import playlist555 from '/assets/playlist555.png'
import playlist666 from '/assets/playlist666.png'
import playlist777 from '/assets/playlist777.png'
import playlist8 from '/assets/playlist8.png'
import playlist9 from '/assets/playlist9.png'
import playlist10 from '/assets/playlist10.png'
import playlist11 from '/assets/playlist11.png'
import playlist12 from '/assets/playlist12.png'
import playlist13 from '/assets/playlist13.png'
import playlist14 from '/assets/playlist14.png'
import playlist15 from '/assets/playlist15.png'
import playlist16 from '/assets/playlist16.png'
import playlist17 from '/assets/playlist17.png'
import playlist18 from '/assets/playlist18.png'
import playlist19 from '/assets/playlist19.png'
import playlist20 from '/assets/playlist20.png'
import playlist21 from '/assets/playlist21.png'
import playlist22 from '/assets/playlist22.png'
import playlist23 from '/assets/playlist23.png'
import playlist24 from '/assets/playlist24.png'
import playlist25 from '/assets/playlist25.png'
import playlist26 from '/assets/playlist26.png'
import playlist27 from '/assets/playlist27.png'
import playlist28 from '/assets/playlist28.png'
import playlist29 from '/assets/playlist29.png'
import playlist30 from '/assets/playlist30.png'
import playlist31 from '/assets/playlist31.png'
import playlist32 from '/assets/playlist32.png'
import playlist33 from '/assets/playlist33.png'
import playlist34 from '/assets/playlist34.png'
import playlist35 from '/assets/playlist35.png'
import playlist36 from '/assets/playlist36.png'
import playlist37 from '/assets/playlist37.png'
import playlist38 from '/assets/playlist38.png'
import playlist39 from '/assets/playlist39.png'
import playlist40 from '/assets/playlist40.png'
import playlist41 from '/assets/playlist41.png'
import playlist42 from '/assets/playlist42.png'
import playlist43 from '/assets/playlist43.png'
import playlist44 from '/assets/playlist44.png'
import playlist45 from '/assets/playlist45.png'
import playlist46 from '/assets/playlist46.png'
import playlist47 from '/assets/playlist47.png'
import playlist48 from '/assets/playlist48.png'
import playlist49 from '/assets/playlist49.png'
import playlist50 from '/assets/playlist50.png'

function Search() {
    return (
        <>
            <LeftSide />
            <div className="search">
                <div className="feed__top">
                    <div className="feed__search">
                        <SearchIcon id="search-icon" />
                        <input type="text" placeholder="What do you want to listen to?" />
                    </div>
                    <div className="feed__top-rightbuttons">
                        <GroupsIcon className="feed__top-rightbutton" />
                        <Avatar src={ProfilePhoto} className="feed__top-rightbutton" style={{ border: '3px solid black' }} />
                    </div>
                </div>
                <div className="search__bottom">
                    <span style={{ color: '#fff', fontSize: '30px', marginTop: '50px', marginLeft: '100px', whiteSpace: 'nowrap' }}>Browse all</span>
                    <div className="search__bottom-playlists">
                        <img src={playlist111} alt="Playlist Image" />
                        <img src={playlist222} alt="Playlist Image" />
                        <img src={playlist333} alt="Playlist Image" />
                        <img src={playlist444} alt="Playlist Image" />
                        <img src={playlist555} alt="Playlist Image" />
                        <img src={playlist666} alt="Playlist Image" />
                        <img src={playlist777} alt="Playlist Image" />
                        <img src={playlist8} alt="Playlist Image" />
                        <img src={playlist9} alt="Playlist Image" />
                        <img src={playlist10} alt="Playlist Image" />
                        <img src={playlist11} alt="Playlist Image" />
                        <img src={playlist12} alt="Playlist Image" />
                        <img src={playlist13} alt="Playlist Image" />
                        <img src={playlist14} alt="Playlist Image" />
                        <img src={playlist15} alt="Playlist Image" />
                        <img src={playlist16} alt="Playlist Image" />
                        <img src={playlist17} alt="Playlist Image" />
                        <img src={playlist18} alt="Playlist Image" />
                        <img src={playlist19} alt="Playlist Image" />
                        <img src={playlist20} alt="Playlist Image" />
                        <img src={playlist21} alt="Playlist Image" />
                        <img src={playlist22} alt="Playlist Image" />
                        <img src={playlist23} alt="Playlist Image" />
                        <img src={playlist24} alt="Playlist Image" />
                        <img src={playlist25} alt="Playlist Image" />
                        <img src={playlist26} alt="Playlist Image" />
                        <img src={playlist27} alt="Playlist Image" />
                        <img src={playlist28} alt="Playlist Image" />
                        <img src={playlist29} alt="Playlist Image" />
                        <img src={playlist30} alt="Playlist Image" />
                        <img src={playlist31} alt="Playlist Image" />
                        <img src={playlist32} alt="Playlist Image" />
                        <img src={playlist33} alt="Playlist Image" />
                        <img src={playlist34} alt="Playlist Image" />
                        <img src={playlist35} alt="Playlist Image" />
                        <img src={playlist36} alt="Playlist Image" />
                        <img src={playlist37} alt="Playlist Image" />
                        <img src={playlist38} alt="Playlist Image" />
                        <img src={playlist39} alt="Playlist Image" />
                        <img src={playlist40} alt="Playlist Image" />
                        <img src={playlist41} alt="Playlist Image" />
                        <img src={playlist42} alt="Playlist Image" />
                        <img src={playlist43} alt="Playlist Image" />
                        <img src={playlist44} alt="Playlist Image" />
                        <img src={playlist45} alt="Playlist Image" />
                        <img src={playlist46} alt="Playlist Image" />
                        <img src={playlist47} alt="Playlist Image" />
                        <img src={playlist48} alt="Playlist Image" />
                        <img src={playlist49} alt="Playlist Image" />
                        <img src={playlist50} alt="Playlist Image" />
                    </div>
                </div>
            </div>
            <Player />
        </>
    )
}

export default Search
