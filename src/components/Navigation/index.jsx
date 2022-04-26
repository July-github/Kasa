import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accomodation from '../../pages/Accomodation/index'
import Error from '../../pages/Error404/index'
import Home from '../../pages/Home/index'
import About from '../../pages/About/index'

function Navigation(){

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Accomodation/:id" element={<Accomodation/>} />
            <Route path="/*" element={<Error/>} />
        </Routes>
    )
}

export default Navigation