import { React } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import './Leftside.css'
import '../Feed/Feed.css'

export default function LeftSide() {
    const navigate = useNavigate()

    const navigateToSearch = () => {
        navigate('/search')
    }

    const navigateToHome = () => {
        navigate('/home')
    }

    const navigateToPlaylist = () => {
        navigate('/playlist')
    }

    const setDisplay = () => {
        document.querySelector('.onclick__navbar').classList.toggle('clickFunction'), document.querySelector('.leftside__playlists').classList.toggle('clickFunction1')
    }

    const overflowDisplay = () => {
        document.querySelector('.leftside').classList.add('overflow__display')
    }

    const onclickOverflow = () => {
        document.querySelector('.onclick__leftside').classList.add('overflow__display')
    }

    const onclickDisplay = () => {
        document.querySelector('.leftside').classList.toggle('onclick__display'),
            document.querySelector('.onclick__leftside').classList.toggle('onclick__display'),
            document.querySelector('.feed').classList.toggle('feed__onclick'),
            document.querySelector('.leftside__top').classList.toggle('onclick__display'),
            document.querySelector('.leftside__bottom').classList.toggle('onclick__display')
    }

    return (
        <>
            <div className="leftside" onClick={overflowDisplay}>
                <div className="leftside__top">
                    <div className="leftside__home" onClick={navigateToHome}>
                        <HomeIcon className="leftside__icons" />
                        <span className="leftside__top-text">Home</span>
                    </div>
                    <div className="leftside__search" onClick={navigateToSearch}>
                        <SearchIcon className="leftside__icons" />
                        <span className="leftside__top-text">Search</span>
                    </div>
                </div>
                <div className="leftside__bottom">
                    <div className="leftside__library">
                        <span style={{ cursor: 'pointer' }} onClick={onclickDisplay}>
                            Your Library
                        </span>
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
                        <Link to="/search">
                            <SearchIcon id="leftside__playlist-searchicon" />
                        </Link>
                        <div className="leftside__recent" onClick={setDisplay}>
                            <span id="recent__text" style={{ fontSize: '18px', marginRight: '5px' }}>
                                Recents
                            </span>
                            <ArrowDropDownIcon id="recent__icon" />
                        </div>
                        <div className="onclick__navbar" onClick={overflowDisplay}>
                            <span style={{ marginLeft: '12px', fontSize: '12px', marginTop: '10px', color: 'gray' }}>Sort by</span>
                            <span className="onclick__navbar-text">Recents</span>
                            <span className="onclick__navbar-text">Recently Added</span>
                            <span className="onclick__navbar-text">Alphabetical</span>
                            <span className="onclick__navbar-text">Creator</span>
                        </div>
                    </div>
                    <div className="leftside__playlists">
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={LikedSongs} alt="Image" />
                            <span>Liked Songs</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={yourEpisodes} alt="Image" />
                            <span>Your Episodes</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist1} alt="Image" />
                            <span>While Working</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist4} alt="Image" />
                            <span>Used to Listened</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist2} alt="Image" />
                            <span>Peaceful Piano</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist3} alt="Image" />
                            <span>Best Classical Music</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist5} alt="Image" />
                            <span>Concentration</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist6} alt="Image" />
                            <span>Classic Essentials</span>
                        </div>
                        <div className="leftside__playlist" onClick={navigateToPlaylist}>
                            <img src={playlist7} alt="Image" />
                            <span>Summer Hits</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="onclick__leftside" onClick={onclickOverflow}>
                <div className="onclick__leftside-links">
                    <div className="onclick__leftside-link" onClick={navigateToHome}>
                        <HomeIcon className="onclick__leftside-icon" />
                    </div>
                    <div className="onclick__leftside-link" onClick={navigateToSearch}>
                        <SearchIcon className="onclick__leftside-icon" />
                    </div>
                    <div className="onclick__leftside-link">
                        <VideoLibraryIcon className="onclick__leftside-icon" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={LikedSongs} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={yourEpisodes} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist1} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist2} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist3} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist4} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist5} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist6} alt="Playlist" />
                    </div>
                    <div className="onclick__leftside-playlist" onClick={navigateToPlaylist}>
                        <img src={playlist7} alt="Playlist" />
                    </div>
                </div>
            </div>
        </>
    )
}
