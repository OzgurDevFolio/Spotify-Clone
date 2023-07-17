import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import EastIcon from '@mui/icons-material/East'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import yourEpisodes from '/assets/yourEpisodes.png'
import LikedSongs from '/assets/likedSongs.jpg'
import playlist1 from '/assets/playlist1.png'
import playlist2 from '/assets/playlist2.png'
import playlist3 from '/assets/playlist3.png'
import playlist4 from '/assets/playlist4.png'
import playlist5 from '/assets/playlist4.png'
import playlist6 from '/assets/playlist5.png'
import playlist7 from '/assets/playlist7.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import './Leftside.css'

const LeftSide = () => {
    return (
        <>
            <div className="leftside">
                <div className="leftside__top">
                    <div className="leftside__home">
                        <HomeIcon className="leftside__icons" />
                        <span className="leftside__top-text">Home</span>
                    </div>
                    <div className="leftside__search">
                        <SearchIcon className="leftside__icons" />
                        <span className="leftside__top-text">Search</span>
                    </div>
                </div>
                <div className="leftside__bottom">
                    <div className="leftside__library">
                        <span id="leftside__library-text">Your Library</span>
                        <AddIcon style={{ marginRight: '15px' }} className="leftside__library-icons" />
                        <EastIcon className="leftside__library-icons" />
                    </div>
                    <div className="leftside__library-all">
                        <KeyboardArrowLeftIcon className="leftside__library-all-icons" />
                        <button className="leftside__playlist-kinds">Playlists</button>
                        <button className="leftside__playlist-kinds">Albums</button>
                        <button className="leftside__playlist-kinds">Artists</button>
                        <KeyboardArrowRightIcon className="leftside__library-all-icons" />
                    </div>
                    <div className="leftside__playlist-search">
                        <SearchIcon id="leftside__playlist-searchicon" />
                        <div className="leftside__recent">
                            <span id="recent__text">Recents</span>
                            <ArrowDropDownIcon id="recent__icon" />
                        </div>
                    </div>
                    <div className="leftside__playlists">
                        <div className="leftside__playlist">
                            <img src={LikedSongs} alt="Image" />
                            <span>Liked Songs</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={yourEpisodes} alt="Image" />
                            <span>Your Episodes</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist1} alt="Image" />
                            <span>While Working</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist4} alt="Image" />
                            <span>Used to Listened</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist2} alt="Image" />
                            <span>Peaceful Piano</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist3} alt="Image" />
                            <span>Best Classical Music</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist5} alt="Image" />
                            <span>Concentration</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist6} alt="Image" />
                            <span>Classic Essentials</span>
                        </div>
                        <div className="leftside__playlist">
                            <img src={playlist7} alt="Image" />
                            <span>Summer Hits</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide
