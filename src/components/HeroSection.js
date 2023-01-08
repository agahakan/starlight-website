import React from 'react'
import { Button } from './Button';
import '../App.css'
import './HeroSection.css';
var Background = '../img/Hero Header Slider 1.png';

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src={Background} alt="hero" />
        <h1>S'unir pour faire briller la santé</h1>
        <p>Starlight et ses distributeurs agrées s'unissent pour relever les défis d'un monde de la santé en constante évolution.</p>
        <div className='hero-btns'>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            COMMUNIQUÉ DE PRESSE
          </Button>
        </div>
        <div className='hero-btns'>
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            Lalala <i className='far fa-play-circle' />
          </Button>
        </div>
    </div>
  )
}

export default HeroSection