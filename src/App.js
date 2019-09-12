import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './routes';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
    </div>
  );
}

export default App;
