import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './routes';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
