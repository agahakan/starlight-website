import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Explorer STARLIGHT</h2>
            <Link to='/'>Solutions</Link>
            <Link to='/'>Produits</Link>
            <Link to='/'>Services</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Aide</h2>
            <Link to='/'>Contactez-nous</Link>
            <Link to='/'>Pièces de rechange</Link>
            <Link to='/'>Devenir distributeur</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À propos de nous</h2>
            <Link to='/'>Nos sites</Link>
            <Link to='/'>Carrières</Link>
          </div>
          <div class='footer-link-items'>
            <h2>NOUS SUIVRE</h2>
            <Link to='/'>Linkedin</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Tiktok</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='logo' src={require('../img/Logo.png')} alt='logo' />
              STARLIGHT
            </Link>
          </div>
          <small class='website-rights'>France</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;