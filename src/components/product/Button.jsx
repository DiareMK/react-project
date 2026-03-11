import React from 'react';

const Button = ({ label, onClick, disabled, variant = 'primary' }) => {
  const styles = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 'bold',
    backgroundColor: variant === 'primary' ? '#007bff' : '#28a745',
    color: '#fff',
    opacity: disabled ? 0.6 : 1
  };

  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
