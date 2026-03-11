import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={containerStyle}>
      <nav className={styles.navbar}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Головна
          </NavLink>
          <NavLink 
            to="/feed" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Стрічка
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Профіль
          </NavLink>
        </div>
        
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
          {isAuthenticated ? (
            <>
              <span style={{ fontSize: '14px', color: '#666' }}>Привіт, <strong>{user.name}</strong></span>
              <button 
                onClick={handleLogout}
                style={{ padding: '5px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                Вийти
              </button>
            </>
          ) : (
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            >
              Увійти
            </NavLink>
          )}
        </div>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

// Fix for potentially undefined container variable if I made a typo in previous steps
const containerStyle = styles.container;

export default MainLayout;
