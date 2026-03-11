import React from 'react';
import StarRating from './StarRating';

const ProductDetails = ({ name, description, price, rating }) => {
  return (
    <div>
      <h3 style={{ margin: '0 0 10px 0' }}>{name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>{description}</p>
      <StarRating rating={rating} />
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{price} грн</p>
    </div>
  );
};

export default ProductDetails;
