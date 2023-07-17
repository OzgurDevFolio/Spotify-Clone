import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import GroupsIcon from '@mui/icons-material/Groups'
import ProfilePhoto from '/assets/ProfilePhoto.jpeg'
import { Avatar } from '@mui/material'
import Content from '/assets/content.png'
import Logo from '/assets/spotify-icon.png'
import LikedSongs from '/assets/likedSongs.jpg'
import playlist1 from '/assets/playlist1.png'
import playlist2 from '/assets/playlist2.png'
import playlist3 from '/assets/playlist3.png'
import playlist4 from '/assets/playlist4.png'
import playlist7 from '/assets/playlist7.png'
import './Feed.css'

const Feed = () => {
    return (
        <>
            <div className="feed">
                <div className="feed__top">
                    <div className="feed__top-leftbuttons">
                        <KeyboardArrowLeftIcon className="feed__top-leftbutton" />
                        <KeyboardArrowRightIcon className="feed__top-leftbutton" />
                    </div>
                    <div className="feed__top-rightbuttons">
                        <GroupsIcon className="feed__top-rightbutton" />
                        <Avatar src={ProfilePhoto} className="feed__top-rightbutton" />
                    </div>
                </div>
                {/* <div className="feed__content">
                    <img src={Content} alt="Billie Eilish" />
                    <div className="feed__content-texts">
                        <span>Public Playlist</span>
                        <span>Mega Hit Mix</span>
                        <span>A mega mix of 75 favorites from the last few years!</span>
                        <div className="feed__content-numbers">
                            <img src={Logo} alt="Logo" />
                            <span>Spotify</span>
                            <p>.</p>
                            <span>7,345,073 likes</span>
                            <p>.</p>
                            <span>75 songs, 3hr 59 min</span>
                        </div>
                        <button>Play</button>
                        <button>Follow</button>
                        <span>...</span>
                    </div>
                    <button>Hide Announcements</button>
                </div>
                <span>Good afternoon</span>
                <div className="feed__playlists">
                    <div className="feed__playlist">
                        <img src={LikedSongs} alt="Playlist" />
                        <span>Liked Songs</span>
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist1} alt="Playlist" />
                        <span>While Working</span>
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist4} alt="Playlist" />
                        <span>Used to Listened</span>
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist2} alt="Playlist" />
                        <span>Peaceful Piano</span>
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist3} alt="Playlist" />
                        <span>Best Classical Music</span>
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist7} alt="Playlist" />
                        <span>Summer Hits</span>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Feed
