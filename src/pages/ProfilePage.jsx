import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import ActivityList from '../components/ActivityList';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading data
    const timer = setTimeout(() => {
      setUser({
        name: 'Maksym Zinin',
        email: 'crabgmvs@gmail.com',
        role: 'Frontend Розробник'
      });
      setActivities([
        { id: 1, action: 'Оновив профіль - додав нові навички', date: '12 Березня, 2026' },
        { id: 2, action: 'Створив компонент - таби для списку студентів', date: '11 Березня, 2026' },
        { id: 3, action: 'Виконав коміт - Практична робота №4', date: '12 Березня, 2026' }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Завантаження профілю...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Мій Дашборд</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <UserInfo name={user.name} email={user.email} role={user.role} />
        <ActivityList activities={activities} />
      </div>
    </div>
  );
};

export default ProfilePage;
