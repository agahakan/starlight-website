import React from 'react';
import './ProductSection.css';
import ProductItem from './ProductItem';

function ProductSection() {
  return (
    <div className='products' id='produits'>
      <h1>Nos innovations.</h1>
      <div className='products__container'>
        <div className='products__wrapper'>
          <ul className='products__items'>
            <ProductItem
              src='img/Product 1.png'
              text='Brosse à dent connecté SHINY BRUSH™'
              path='/#solutions'
            />
            <ProductItem
              src='img/Product 2.png'
              text='Balance connecté SUN-LI SCALE™'
              path='/#solutions'
            />
            <ProductItem
              src='img/Product 3.png'
              text='Surveillance de la santé'
              path='/#solutions'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;