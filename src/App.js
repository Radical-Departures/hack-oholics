import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './routes';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Hero from './components/navigation/Hero';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Hero/>
                <Routes/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
