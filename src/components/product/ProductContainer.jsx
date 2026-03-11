import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

const ProductContainer = () => {
  const [quantity, setQuantity] = useState(1);

  const productData = {
    name: 'Бездротові навушники Sony WH-1000XM4',
    description: 'Навушники з передовим активним шумозаглушенням та часом роботи до 30 годин.',
    price: 12500,
    rating: 5
  };

  const handleAdd = () => setQuantity(prev => prev + 1);
  const handleRemove = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '20px', 
      padding: '20px', 
      backgroundColor: '#fff', 
      borderRadius: '12px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      border: '1px solid #eee'
    }}>
      <ProductDetails 
        name={productData.name} 
        description={productData.description} 
        price={productData.price} 
        rating={productData.rating} 
      />
      <ProductActions 
        quantity={quantity} 
        onAdd={handleAdd} 
        onRemove={handleRemove} 
      />
    </div>
  );
};

export default ProductContainer;
