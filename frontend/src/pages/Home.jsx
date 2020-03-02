import React, { Component } from 'react';
import HeroSection from '../components/HeroSection';
import HomeCards from '../components/HomeCards';

class Home extends Component {
    render () {
        return (
            <div>
                <HeroSection />
                <HomeCards />
            </div>
        );
    }
}

export default Home;

