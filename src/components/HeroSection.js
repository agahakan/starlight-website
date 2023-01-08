import React from 'react'
import { Button } from './Button';
import '../App.css'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>S'unir pour faire briller la santé</h1>
        <p>Starlight et ses distributeurs agrées s'unissent pour relever les défis d'un monde de la santé en constante évolution.</p>
        <div className='hero-btns'>
          <a target="Starlight" href="https://www.youtube.com/watch?v=wB4-UO2GmN8">
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            DÉCOUVREZ<i className='far fa-play-circle' />
            </Button>
          </a>
        </div>
        <div className='hero-btns'>
          <a href="/files/communique.pdf" download>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
              COMMUNIQUÉ DE PRESSE
            </Button>
          </a>
        </div>
    </div>
  )
}

export default HeroSection