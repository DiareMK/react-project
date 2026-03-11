import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Simulate saving
    alert('Налаштування збережено!');
    // Programmatic navigation to home
    navigate('/');
  };

  return (
    <div>
      <h4>Налаштування</h4>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Змінити пароль:</label>
        <input type="password" placeholder="Новий пароль" style={{ padding: '5px' }} />
      </div>
      <button 
        onClick={handleSave}
        style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Зберегти та вийти
      </button>
    </div>
  );
};

export default ProfileSettings;
