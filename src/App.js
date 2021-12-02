import React from 'react'
import { Route, Routes } from 'react-router'
import MovieDesc from './Component/MovieDesc'
import Home from './Home'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/desc" element={<MovieDesc/>} /> 
            </Routes>
        </div>
    )
}

export default App
