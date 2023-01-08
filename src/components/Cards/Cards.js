import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vos besoins les plus urgents sont notre priorité.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/Image Box 1.png'
              text='Suivi médical irréprochable'
              path='/#solutions'
            />
            <CardItem
              src='img/Image Box 2.png'
              text='Prévenir pour diagnostiquer'
              path='/#solutions'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/Image Box 3.png'
              text='Surveillance de la santé'
              path='/#solutions'
            />
            <CardItem
              src='img/Image Box 4.png'
              text="Optimiser l'efficacité"
              path='/#solutions'
            />
            <CardItem
              src='img/Image Box 5.png'
              text='Voir toutes les solutions'
              path='/#solutions'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;