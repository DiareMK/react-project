import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вибачте, але за вказаною адресою нічого немає.</p>
      <a href="/">Повернутися на головну</a>
    </div>
  );
};

export default NotFound;
