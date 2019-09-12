import React from 'react';
import Hero from '../components/navigation/Hero';
import Card from '../components/navigation/Card';

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Hero/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Home;
