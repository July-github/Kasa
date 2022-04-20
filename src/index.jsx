import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos/index'
import Header from './components/Header/index'
import GlobalStyle from './utils/style/GlobalStyle'
import Error from './pages/Error404/index'
import Footer from './components/Footer/index'
import Accomodation from './pages/Accomodation/index'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/APropos" element={<APropos/>} />
                <Route path="/Accomodation/:id" element={<Accomodation/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
)