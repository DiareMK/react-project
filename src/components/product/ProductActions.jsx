import React from 'react';
import Button from './Button';

const ProductActions = ({ quantity, onAdd, onRemove }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button 
          onClick={onRemove} 
          disabled={quantity <= 0}
          style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ccc', cursor: quantity <= 0 ? 'not-allowed' : 'pointer' }}
        >
          -
        </button>
        <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
        <button 
          onClick={onAdd}
          style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ccc', cursor: 'pointer' }}
        >
          +
        </button>
      </div>
      <Button 
        label="Додати в кошик" 
        onClick={() => alert(`Додано ${quantity} шт. у кошик`)} 
        disabled={quantity <= 0} 
      />
    </div>
  );
};

export default ProductActions;
