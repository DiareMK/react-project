import React from 'react';

const UserInfo = ({ name, email, role }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginTop: 0 }}>Інформація про користувача</h2>
      <p><strong>Ім'я:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Роль:</strong> {role}</p>
    </div>
  );
};

export default UserInfo;
