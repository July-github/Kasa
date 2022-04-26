import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/index'
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer/index'
import Navigation from './components/Navigation/index'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle/>
            <Header/>
            <Navigation/>            
            <Footer/>
        </Router>
    </React.StrictMode>
)