import { React, useState } from 'react'
import './Player.css'
import SongImage from '/assets/spotify-song-image.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ReplayIcon from '@mui/icons-material/Replay'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { Slider } from '@mui/material'
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import DevicesIcon from '@mui/icons-material/Devices'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'

const Player = () => {
    const [isIconClicked, setIsIconClicked] = useState(false)

    const handleClick = () => {
        setIsIconClicked(!isIconClicked)
    }

    const [isIconClicked1, setIsIconClicked1] = useState(false)

    const handleClick1 = () => {
        setIsIconClicked1(!isIconClicked1)
    }

    const setDisplay = () => {
        document.querySelector('.player__informations-like').classList.toggle('clickFunction')
    }

    return (
        <>
            <div className="player">
                <div className="player__informations">
                    <img src={SongImage} alt="Song Image" className="player__song-image" />
                    <div className="player__informations-texts">
                        <span id="player__informations-text1">Aşka Yürek Gerek</span>
                        <span id="player__informations-text2">Mustafa Sandal</span>
                    </div>
                    <section onClick={setDisplay} className="favourite-section">
                        <FavoriteIcon className="player__informations-like" />
                    </section>
                </div>
                <div className="player__song-buttons">
                    <div className="player__song-buttonsUp">
                        <ShuffleIcon className="player__song-buttonsUp-button" />
                        <SkipPreviousIcon className="player__song-buttonsUp-button" />
                        <section onClick={handleClick}>
                            {isIconClicked ? (
                                <PlayCircleIcon id="play-pause__button" className="player__song-buttonsUp-button" />
                            ) : (
                                <PauseCircleFilledIcon id="play-pause__button" className="player__song-buttonsUp-button" />
                            )}
                        </section>
                        <SkipNextIcon className="player__song-buttonsUp-button" />
                        <ReplayIcon className="player__song-buttonsUp-button" />
                    </div>
                    <div className="player__song-buttonsDown">
                        <p className="player__song-buttonsDown-time" style={{ marginRight: '-230px' }}>
                            0:00
                        </p>
                        <Slider className="time__slider" />
                        <p className="player__song-buttonsDown-time">1:58</p>
                    </div>
                </div>
                <div className="player__extra-buttons">
                    <MicExternalOnIcon className="player__extra-button" />
                    <QueueMusicIcon className="player__extra-button" />
                    <DevicesIcon className="player__extra-button" />
                    <section onClick={handleClick1} className="section1">
                        {isIconClicked1 ? <VolumeUpIcon className="player__extra-button" /> : <VolumeMuteIcon className="player__extra-button" />}
                    </section>
                    <Slider className="extra__buttons-volumeSlider" style={{ marginLeft: '-10px' }} />
                    <FitScreenIcon className="player__extra-button" style={{ marginLeft: '30px' }} />
                </div>
            </div>
        </>
    )
}

export default Player
