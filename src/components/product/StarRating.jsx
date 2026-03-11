import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div style={{ color: '#ffc107', marginBottom: '10px' }}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      <span style={{ color: '#666', fontSize: '14px', marginLeft: '5px' }}>({rating}/5)</span>
    </div>
  );
};

export default StarRating;
