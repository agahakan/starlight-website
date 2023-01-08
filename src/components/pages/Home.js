import React from 'react';
import '../../App.css'
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection'
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;