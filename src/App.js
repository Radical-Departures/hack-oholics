import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import Button from './components/navigation/Button';
import Footer from './components/navigation/Footer';
import Card from './components/navigation/Card';
import Hero from './components/navigation/Hero';

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
