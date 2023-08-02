import { React, useState } from 'react'
import './Playlist.css'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import GroupsIcon from '@mui/icons-material/Groups'
import ProfilePhoto from '/assets/ProfilePhoto.jpeg'
import { Avatar } from '@mui/material'
import Liked from '/assets/Liked.png'
import LeftSide from '../components/LeftSide/LeftSide'
import Player from '../components/Player/Player'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteIcon from '@mui/icons-material/Favorite'
import songimage from '/assets/songImage.png'
import songImage2 from '/assets/songImage2.png'

export default function Playlist() {
    const [isIconClicked, setIsIconClicked] = useState(false)
    const [isIconClicked1, setIsIconClicked1] = useState(false)
    const [isIconClicked2, setIsIconClicked2] = useState(false)

    const navigate = useNavigate()

    const handleClick = () => {
        setIsIconClicked(!isIconClicked)
    }

    const handleClick1 = () => {
        setIsIconClicked1(!isIconClicked1)
    }

    const handleClick2 = () => {
        setIsIconClicked2(!isIconClicked2), document.querySelector('.song__catergories').classList.toggle('song__categories-margin')
    }

    const displayClick = () => {
        document.querySelector('.sorting__navbar').classList.toggle('displayFunction')
    }

    const navigateToSearching = () => {
        navigate('/search')
    }

    return (
        <>
            <LeftSide />
            <div className="playlist">
                <div className="feed__top">
                    <div className="feed__top-leftbuttons">
                        <KeyboardArrowLeftIcon className="feed__top-leftbutton" />
                        <KeyboardArrowRightIcon className="feed__top-leftbutton" id="feed__top-button" />
                    </div>
                    <div className="feed__top-rightbuttons">
                        <GroupsIcon className="feed__top-rightbutton" />
                        <Avatar src={ProfilePhoto} className="feed__top-rightbutton" style={{ border: '3px solid black' }} />
                    </div>
                </div>
                <div className="playlist__content-listInformations">
                    <img src={Liked} alt="Image" />
                    <div className="playlist__content-listInformations__text">
                        <span style={{ fontSize: '20px', marginBottom: '30px' }}>Playlist</span>
                        <span style={{ fontSize: '100px', fontWeight: 'bold' }} className="liked__song-title">
                            Liked Songs
                        </span>
                        <div className="playlist__content-text__nameinfos">
                            <Avatar src={ProfilePhoto} id="content__avatar" />
                            <span className="playlist__content-text__nameinfo">Özgür</span>
                            <span className="playlist__content-text__nameinfo">•</span>
                            <span className="playlist__content-text__nameinfo">10 songs</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__content">
                    <div className="content__songButtons">
                        <section className="playIcon__section" onClick={handleClick}>
                            {isIconClicked ? <PauseIcon className="play__pause-icons" /> : <PlayArrowIcon className="play__pause-icons" />}
                        </section>
                        <ArrowCircleDownIcon className="content__topIcons" />
                        <div className="content__songButtons-right">
                            <section onClick={navigateToSearching}>
                                <SearchIcon id="content__songButtons-right-icon" />
                            </section>
                            <div
                                className="content__rightButton"
                                onClick={function (event) {
                                    handleClick1(), displayClick()
                                }}>
                                <span>Date Added</span>
                                {isIconClicked1 ? <ArrowDropUpIcon style={{ fontsize: '30px' }} /> : <ArrowDropDownIcon style={{ fontsize: '30px' }} />}
                            </div>
                        </div>
                    </div>
                    <div className="sorting__navbar">
                        <span style={{ marginLeft: '12px', fontSize: '12px', marginTop: '10px', color: 'gray' }}>Sort by</span>
                        <span className="sorting__navbar-text">Date Added</span>
                        <span className="sorting__navbar-text">Title</span>
                        <span className="sorting__navbar-text">Artist</span>
                        <span className="sorting__navbar-text">Album</span>
                    </div>
                    <div className="song__categories">
                        <span>#</span>
                        <span>Title</span>
                        <span>Album</span>
                        <div className="content__rightButton" onClick={handleClick2}>
                            <span>Date Added</span>
                            {isIconClicked2 ? <ArrowDropUpIcon style={{ fontsize: '30px', color: '#1db954' }} /> : <ArrowDropDownIcon style={{ fontsize: '30px', color: '#1db954' }} />}
                        </div>
                        <AccessTimeIcon style={{ color: 'gray' }} />
                    </div>
                    <hr style={{ width: '100%', marginLeft: '-13px', height: '1px', color: 'gray' }} />
                    <div className="songs">
                        <div className="song">
                            <span>1</span>
                            <img src={songimage} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Experience</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>2 days ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.43</span>
                        </div>
                        <div className="song">
                            <span>2</span>
                            <img src={songImage2} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Temple White</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>1 years ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.13</span>
                        </div>
                        <div className="song">
                            <span>3</span>
                            <img src={songimage} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Experience</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>2 days ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.43</span>
                        </div>
                        <div className="song">
                            <span>4</span>
                            <img src={songImage2} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Temple White</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>1 years ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.13</span>
                        </div>
                        <div className="song">
                            <span>5</span>
                            <img src={songimage} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Experience</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>2 days ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.43</span>
                        </div>
                        <div className="song">
                            <span>6</span>
                            <img src={songImage2} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Temple White</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>1 years ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.13</span>
                        </div>
                        <div className="song">
                            <span>7</span>
                            <img src={songimage} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Experience</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>2 days ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.43</span>
                        </div>
                        <div className="song">
                            <span>8</span>
                            <img src={songImage2} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Temple White</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>1 years ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.13</span>
                        </div>
                        <div className="song">
                            <span>9</span>
                            <img src={songimage} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Experience</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>2 days ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.43</span>
                        </div>
                        <div className="song">
                            <span>10</span>
                            <img src={songImage2} alt="Song Image" />
                            <div className="song__names">
                                <span style={{ color: '#fff' }}>Temple White</span>
                                <span>Ludovico Einaudi</span>
                            </div>
                            <span style={{ marginLeft: '-80px' }} className="album__name">
                                Underwater
                            </span>
                            <span style={{ marginRight: '-180px' }}>1 years ago</span>
                            <FavoriteIcon style={{ color: '#1db954', marginLeft: '100px' }} />
                            <span id="song__duration">2.13</span>
                        </div>
                    </div>
                </div>
            </div>
            <Player />
        </>
    )
}
