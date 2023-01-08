import React from 'react';
import '../../App.css'
import Cards from '../Cards/Cards';
import ProductSection from '../ProductSection'
import HeroSection from '../HeroSection'
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <ProductSection />
            <Footer />
        </>
    )
}

export default Home;