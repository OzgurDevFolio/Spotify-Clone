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
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import IosShareIcon from '@mui/icons-material/IosShare'
import CircleIcon from '@mui/icons-material/Circle'
import './Feed.css'

const Feed = () => {
    return (
        <>
            <div className="feed">
                <div className="feed__top">
                    <div className="feed__top-leftbuttons">
                        <KeyboardArrowLeftIcon className="feed__top-leftbutton" />
                        <KeyboardArrowRightIcon className="feed__top-leftbutton" id="feed__top-button" />
                    </div>
                    <div className="feed__top-rightbuttons">
                        <GroupsIcon className="feed__top-rightbutton" />
                        <Avatar src={ProfilePhoto} className="feed__top-rightbutton" style={{ border: '3px solid black' }} />
                    </div>
                    {/* <div className="feed__profile-navbar">
                        <div className="feed__profile-navbar-account">
                            <span className="feed__profile-navbar-text">Account</span>
                            <IosShareIcon className="navbar__icon" />
                        </div>
                        <span className="feed__profile-navbar-text">Profile</span>
                        <span className="feed__profile-navbar-text">Private Session</span>
                        <span className="feed__profile-navbar-text">Settings</span>
                        <hr />
                        <div className="feed__profile-navbar-update">
                            <span className="feed__profile-navbar-text">Update Spotify Now</span>
                            <CircleIcon className="navbar__icon" style={{ color: '#037AF0' }} />
                        </div>
                        <span className="feed__profile-navbar-text">Log Out</span>
                    </div> */}
                </div>
                <div className="feed__content">
                    <img src={Content} alt="Billie Eilish" />
                    <div className="feed__content-texts">
                        <span style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '40px' }}>Public Playlist</span>
                        <span style={{ fontSize: '80px', fontWeight: 'bold', whiteSpace: 'nowrap', marginBottom: '30px' }}>Mega Hit Mix</span>
                        <span style={{ color: 'gray', fontSize: '18px', marginBottom: '20px' }}>A mega mix of 75 favorites from the last few years!</span>
                        <div className="feed__content-numbers">
                            <img src={Logo} alt="Logo" id="feed__content-image" />
                            <span className="feed__content-numbers__texts">Spotify</span>
                            <p className="feed__content-numbers__texts">•</p>
                            <span className="feed__content-numbers__texts">7,345,073 likes</span>
                            <p className="feed__content-numbers__texts">•</p>
                            <span className="feed__content-numbers__texts">75 songs</span>
                            <p className="feed__content-numbers__texts">•</p>
                            <span className="feed__content-numbers__texts">3hr 59 min</span>
                        </div>
                        <div className="feed__content-buttons">
                            <button id="feed__content-playButton">Play</button>
                            <button className="feed__content-button">Follow</button>
                            <button className="feed__content-button">• • •</button>
                        </div>
                    </div>
                    <button className="feed__content-announcement">Hide Announcements</button>
                </div>
                <span className="feed__content-dayMessage">Good afternoon</span>
                <div className="feed__playlists">
                    <div className="feed__playlist">
                        <img src={LikedSongs} alt="Playlist" style={{ width: '100px' }} />
                        <span>Liked Songs</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist1} alt="Playlist" />
                        <span>While Working</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist4} alt="Playlist" />
                        <span>Used to Listened</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist2} alt="Playlist" />
                        <span>Peaceful Piano</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist3} alt="Playlist" style={{ width: '95px' }} />
                        <span>Best Classical Music</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                    <div className="feed__playlist">
                        <img src={playlist7} alt="Playlist" />
                        <span>Summer Hits</span>
                        <PlayArrowIcon className="feed__content-playIcon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed
