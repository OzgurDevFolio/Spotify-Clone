import React from 'react'
import './App.css'
import LeftSide from './components/LeftSide/LeftSide'
import Feed from './components/Feed/Feed'
import Player from './components/Player/Player'

export default function App() {
    return (
        <>
            <LeftSide />
            <Feed />
            <Player />
        </>
    )
}
