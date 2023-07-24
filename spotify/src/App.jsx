import { React } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Search from './pages/Search'
import Playlist from './pages/Playlist'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
