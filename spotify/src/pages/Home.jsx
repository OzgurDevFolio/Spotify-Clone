import React from 'react'
import LeftSide from '../components/LeftSide/LeftSide'
import Feed from '../components/Feed/Feed'
import Player from '../components/Player/Player'

export default function Home() {
    return (
        <>
            <LeftSide />
            <Feed />
            <Player />
        </>
    )
}
