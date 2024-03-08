import React from 'react';
import '../styles/ProductCard.scss';

const ProductCard = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};




export default ProductCard;